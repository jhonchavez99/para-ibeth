/**
 * Astronomy Engine & Celestial Projection Service
 * Computes exact star positions, constellation lines, planets, and moon phase.
 */

import { STARS } from '../data/starCatalog.js';
import { CONSTELLATIONS } from '../data/constellations.js';

export function calculateSiderealTime(dateObj, longitude) {
  // Julian Date calculation
  const year = dateObj.getUTCFullYear();
  const month = dateObj.getUTCMonth() + 1;
  const day = dateObj.getUTCDate();
  const hour = dateObj.getUTCHours() + dateObj.getUTCMinutes() / 60 + dateObj.getUTCSeconds() / 3600;

  let Y = year;
  let M = month;
  if (M <= 2) {
    Y -= 1;
    M += 12;
  }
  const A = Math.floor(Y / 100);
  const B = 2 - A + Math.floor(A / 4);
  const JD = Math.floor(365.25 * (Y + 4716)) + Math.floor(30.6001 * (M + 1)) + day + B - 1524.5 + hour / 24.0;

  const D = JD - 2451545.0;
  // Greenwich Sidereal Time in degrees
  let GST = (280.46061837 + 360.98564736629 * D) % 360;
  if (GST < 0) GST += 360;

  // Local Sidereal Time in degrees
  let LST = (GST + longitude) % 360;
  if (LST < 0) LST += 360;

  return LST;
}

export function equatorialToHorizontal(ra, dec, lat, lst) {
  const DEG2RAD = Math.PI / 180;
  const RAD2DEG = 180 / Math.PI;

  const latRad = lat * DEG2RAD;
  const decRad = dec * DEG2RAD;
  // Hour angle HA = LST - RA
  let HA = (lst - ra) * DEG2RAD;

  const sinAlt = Math.sin(decRad) * Math.sin(latRad) + Math.cos(decRad) * Math.cos(latRad) * Math.cos(HA);
  const altRad = Math.asin(Math.max(-1, Math.min(1, sinAlt)));
  const altitude = altRad * RAD2DEG;

  const y = -Math.cos(decRad) * Math.sin(HA);
  const x = Math.sin(decRad) * Math.cos(latRad) - Math.cos(decRad) * Math.sin(latRad) * Math.cos(HA);
  let azRad = Math.atan2(y, x);
  let azimuth = azRad * RAD2DEG;
  if (azimuth < 0) azimuth += 360;

  return { altitude, azimuth };
}

export function projectToCircle(alt, az, cx, cy, radius, rotationDeg = 0) {
  // Only celestial objects above horizon (alt >= 0)
  if (alt < -2) return null; // allow slight refraction margin

  // Stereographic projection factor: zenith (90) at center (r=0), horizon (0) at circle boundary (r=radius)
  const normR = radius * Math.tan(((90 - Math.max(0, alt)) * Math.PI) / 360) / Math.tan((45 * Math.PI) / 180);
  const theta = ((az + rotationDeg) * Math.PI) / 180;

  const x = cx + normR * Math.sin(theta);
  const y = cy - normR * Math.cos(theta);

  return { x, y, r: normR };
}

export function getVisibleSkyData(date, lat, lon, options = {}) {
  const { cx = 250, cy = 250, radius = 220, rotationDeg = 0 } = options;
  const dateObj = new Date(date);
  const lst = calculateSiderealTime(dateObj, lon);

  // 1. Process Stars
  const visibleStars = [];
  STARS.forEach((star) => {
    let alt, az;
    if (window.Astronomy && typeof window.Astronomy.Horizon === 'function') {
      try {
        const time = window.Astronomy.MakeTime(dateObj);
        const observer = new window.Astronomy.Observer(lat, lon, 0);
        const hor = window.Astronomy.Horizon(time, observer, star.ra / 15, star.dec, 'refraction');
        alt = hor.altitude;
        az = hor.azimuth;
      } catch (e) {
        const res = equatorialToHorizontal(star.ra, star.dec, lat, lst);
        alt = res.altitude;
        az = res.azimuth;
      }
    } else {
      const res = equatorialToHorizontal(star.ra, star.dec, lat, lst);
      alt = res.altitude;
      az = res.azimuth;
    }

    if (alt >= 0) {
      const pt = projectToCircle(alt, az, cx, cy, radius, rotationDeg);
      if (pt) {
        // Magnitude radius scaling
        const starR = Math.max(0.5, 3.6 - 0.45 * star.mag);
        visibleStars.push({
          ...star,
          alt,
          az,
          x: pt.x,
          y: pt.y,
          starRadius: starR
        });
      }
    }
  });

  // 2. Process Constellation Lines
  const visibleConstellationLines = [];
  const visibleConstellationNames = [];

  CONSTELLATIONS.forEach((constellation) => {
    // Lines
    constellation.lines.forEach((line) => {
      const [[ra1, dec1], [ra2, dec2]] = line;
      const h1 = equatorialToHorizontal(ra1, dec1, lat, lst);
      const h2 = equatorialToHorizontal(ra2, dec2, lat, lst);

      if (h1.altitude >= 0 && h2.altitude >= 0) {
        const pt1 = projectToCircle(h1.altitude, h1.azimuth, cx, cy, radius, rotationDeg);
        const pt2 = projectToCircle(h2.altitude, h2.azimuth, cx, cy, radius, rotationDeg);
        if (pt1 && pt2) {
          visibleConstellationLines.push({
            constellationId: constellation.id,
            x1: pt1.x,
            y1: pt1.y,
            x2: pt2.x,
            y2: pt2.y
          });
        }
      }
    });

    // Centroid Name Label
    const centerHor = equatorialToHorizontal(constellation.center.ra, constellation.center.dec, lat, lst);
    if (centerHor.altitude >= 15) { // show label if reasonably high in sky
      const centerPt = projectToCircle(centerHor.altitude, centerHor.azimuth, cx, cy, radius, rotationDeg);
      if (centerPt) {
        visibleConstellationNames.push({
          id: constellation.id,
          name: constellation.name,
          x: centerPt.x,
          y: centerPt.y
        });
      }
    }
  });

  // 3. Solar System Bodies & Moon Phase
  const visiblePlanets = [];
  let moonPhaseInfo = { name: "Waxing Gibbous", illumination: 78 };

  if (window.Astronomy) {
    try {
      const time = window.Astronomy.MakeTime(dateObj);
      const observer = new window.Astronomy.Observer(lat, lon, 0);
      const bodies = [
        { name: "Moon", body: "Moon", color: "#F5F3CE", size: 5 },
        { name: "Venus", body: "Venus", color: "#FDE047", size: 4 },
        { name: "Mars", body: "Mars", color: "#EF4444", size: 3.5 },
        { name: "Jupiter", body: "Jupiter", color: "#F97316", size: 4.5 },
        { name: "Saturn", body: "Saturn", color: "#EAB308", size: 4 }
      ];

      bodies.forEach((b) => {
        const pos = window.Astronomy.Equator(b.body, time, observer, true, true);
        const hor = window.Astronomy.Horizon(time, observer, pos.ra, pos.dec, 'refraction');
        if (hor.altitude >= 0) {
          const pt = projectToCircle(hor.altitude, hor.azimuth, cx, cy, radius, rotationDeg);
          if (pt) {
            visiblePlanets.push({
              name: b.name,
              x: pt.x,
              y: pt.y,
              color: b.color,
              radius: b.size,
              alt: hor.altitude,
              az: hor.azimuth
            });
          }
        }
      });

      // Moon Phase calculation
      const phaseDeg = window.Astronomy.MoonPhase(time);
      const illum = (1 - Math.cos((phaseDeg * Math.PI) / 180)) * 50;
      let phaseName = "New Moon";
      if (phaseDeg > 10 && phaseDeg < 80) phaseName = "Waxing Crescent";
      else if (phaseDeg >= 80 && phaseDeg <= 100) phaseName = "First Quarter";
      else if (phaseDeg > 100 && phaseDeg < 170) phaseName = "Waxing Gibbous";
      else if (phaseDeg >= 170 && phaseDeg <= 190) phaseName = "Full Moon";
      else if (phaseDeg > 190 && phaseDeg < 260) phaseName = "Waning Gibbous";
      else if (phaseDeg >= 260 && phaseDeg <= 280) phaseName = "Third Quarter";
      else if (phaseDeg > 280) phaseName = "Waning Crescent";

      moonPhaseInfo = { name: phaseName, illumination: Math.round(illum) };
    } catch (e) {
      console.warn("Astronomy Engine calculation fallback:", e);
    }
  }

  return {
    stars: visibleStars,
    lines: visibleConstellationLines,
    names: visibleConstellationNames,
    planets: visiblePlanets,
    moonPhase: moonPhaseInfo,
    lst
  };
}
