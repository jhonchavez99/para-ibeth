/**
 * Geocoding Service
 * Provides location autocompletion via OpenStreetMap Nominatim API with fallback to popular locations dataset.
 */

import { POPULAR_LOCATIONS, formatLatLon } from '../data/presetLocations.js';

let debounceTimer = null;

export async function searchLocation(query, callback) {
  if (!query || query.trim().length < 2) {
    callback(POPULAR_LOCATIONS.slice(0, 8));
    return;
  }

  const qLower = query.toLowerCase().trim();
  // Check local offline match first
  const localMatches = POPULAR_LOCATIONS.filter(loc =>
    loc.city.toLowerCase().includes(qLower) || loc.country.toLowerCase().includes(qLower)
  );

  if (debounceTimer) clearTimeout(debounceTimer);

  debounceTimer = setTimeout(async () => {
    try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=6&addressdetails=1`;
      const response = await fetch(url, {
        headers: { 'Accept-Language': 'en-US,en' }
      });
      if (response.ok) {
        const data = await response.json();
        const apiResults = data.map(item => {
          const lat = parseFloat(item.lat);
          const lon = parseFloat(item.lon);
          const city = item.address.city || item.address.town || item.address.village || item.address.state || item.display_name.split(',')[0];
          const country = item.address.country || '';
          return {
            city: city.trim(),
            country: country.trim(),
            lat,
            lon,
            formattedCoords: formatLatLon(lat, lon)
          };
        });

        // Merge with local matches without duplicates
        const combined = [...apiResults];
        localMatches.forEach(lm => {
          if (!combined.some(c => c.city.toLowerCase() === lm.city.toLowerCase())) {
            combined.push(lm);
          }
        });
        callback(combined);
        return;
      }
    } catch (err) {
      console.warn("Geocoding API network issue, falling back to preset database:", err);
    }
    callback(localMatches.length > 0 ? localMatches : POPULAR_LOCATIONS.slice(0, 8));
  }, 300);
}
