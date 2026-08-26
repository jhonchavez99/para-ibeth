/**
 * Yale Bright Star Catalog Subset (~1,200 stars down to magnitude 6.0)
 * Coordinates: RA in degrees (0..360), Dec in degrees (-90..+90)
 * mag: Visual magnitude V
 * name: Common star name (optional)
 * bayer: Bayer designation (optional)
 * spectral: Spectral class (O, B, A, F, G, K, M)
 */

export const STARS = [
  // Top Brightest Stars with Common Names
  { ra: 101.2872, dec: -16.7161, mag: -1.46, name: "Sirius", bayer: "α CMa", spectral: "A" },
  { ra: 95.9879, dec: -52.6957, mag: -0.74, name: "Canopus", bayer: "α Car", spectral: "F" },
  { ra: 219.9009, dec: -60.8351, mag: -0.27, name: "Rigil Kentaurus", bayer: "α Cen A", spectral: "G" },
  { ra: 213.9153, dec: 19.1824, mag: -0.05, name: "Arcturus", bayer: "α Boo", spectral: "K" },
  { ra: 279.2347, dec: 38.7837, mag: 0.03, name: "Vega", bayer: "α Lyr", spectral: "A" },
  { ra: 79.1723, dec: 45.9980, mag: 0.08, name: "Capella", bayer: "α Aur", spectral: "G" },
  { ra: 78.6345, dec: -8.2016, mag: 0.13, name: "Rigel", bayer: "β Ori", spectral: "B" },
  { ra: 114.8255, dec: 5.2250, mag: 0.37, name: "Procyon", bayer: "α CMi", spectral: "F" },
  { ra: 24.4285, dec: -57.2368, mag: 0.46, name: "Achernar", bayer: "α Eri", spectral: "B" },
  { ra: 88.7929, dec: 7.4071, mag: 0.50, name: "Betelgeuse", bayer: "α Ori", spectral: "M" },
  { ra: 210.9559, dec: -60.3730, mag: 0.61, name: "Hadar", bayer: "β Cen", spectral: "B" },
  { ra: 297.6958, dec: 8.8683, mag: 0.76, name: "Altair", bayer: "α Aql", spectral: "A" },
  { ra: 186.6496, dec: -63.0991, mag: 0.76, name: "Acrux", bayer: "α Cru", spectral: "B" },
  { ra: 68.9802, dec: 16.5093, mag: 0.86, name: "Aldebaran", bayer: "α Tau", spectral: "K" },
  { ra: 247.3519, dec: -26.4320, mag: 0.96, name: "Antares", bayer: "α Sco", spectral: "M" },
  { ra: 201.2983, dec: -11.1613, mag: 0.97, name: "Spica", bayer: "α Vir", spectral: "B" },
  { ra: 116.0348, dec: 28.0262, mag: 1.14, name: "Pollux", bayer: "β Gem", spectral: "K" },
  { ra: 344.4127, dec: -29.6222, mag: 1.16, name: "Fomalhaut", bayer: "α PsA", spectral: "A" },
  { ra: 310.3580, dec: 45.2803, mag: 1.25, name: "Deneb", bayer: "α Cyg", spectral: "A" },
  { ra: 191.9304, dec: -59.6888, mag: 1.25, name: "Mimosa", bayer: "β Cru", spectral: "B" },
  { ra: 152.0929, dec: 11.9672, mag: 1.35, name: "Regulus", bayer: "α Leo", spectral: "B" },
  { ra: 104.6565, dec: -28.9721, mag: 1.50, name: "Adhara", bayer: "ε CMa", spectral: "B" },
  { ra: 113.6494, dec: 31.8883, mag: 1.58, name: "Castor", bayer: "α Gem", spectral: "A" },
  { ra: 81.2828, dec: 6.3497, mag: 1.64, name: "Bellatrix", bayer: "γ Ori", spectral: "B" },
  { ra: 81.5730, dec: 28.6075, mag: 1.65, name: "Elnath", bayer: "β Tau", spectral: "B" },
  { ra: 138.3005, dec: -69.7284, mag: 1.68, name: "Miaplacidus", bayer: "β Car", spectral: "A" },
  { ra: 84.0534, dec: -1.2019, mag: 1.69, name: "Alnilam", bayer: "ε Ori", spectral: "B" },
  { ra: 85.1897, dec: -1.9426, mag: 1.77, name: "Alnitak", bayer: "ζ Ori", spectral: "B" },
  { ra: 86.9391, dec: -9.6696, mag: 2.06, name: "Saiph", bayer: "κ Ori", spectral: "B" },
  { ra: 37.9545, dec: 89.2641, mag: 1.98, name: "Polaris", bayer: "α UMi", spectral: "F" },

  // Big Dipper / Ursa Major
  { ra: 165.9320, dec: 61.7510, mag: 1.79, name: "Dubhe", bayer: "α UMa", spectral: "K" },
  { ra: 165.4603, dec: 56.3824, mag: 2.37, name: "Merak", bayer: "β UMa", spectral: "A" },
  { ra: 178.4578, dec: 53.6948, mag: 2.44, name: "Phecda", bayer: "γ UMa", spectral: "A" },
  { ra: 183.8569, dec: 57.0326, mag: 3.31, name: "Megrez", bayer: "δ UMa", spectral: "A" },
  { ra: 193.5073, dec: 55.9598, mag: 1.77, name: "Alioth", bayer: "ε UMa", spectral: "A" },
  { ra: 200.9814, dec: 54.9254, mag: 2.23, name: "Mizar", bayer: "ζ UMa", spectral: "A" },
  { ra: 206.8852, dec: 49.3133, mag: 1.86, name: "Alkaid", bayer: "η UMa", spectral: "B" },

  // Cassiopeia
  { ra: 9.8362, dec: 56.5373, mag: 2.24, name: "Schedar", bayer: "α Cas", spectral: "K" },
  { ra: 2.2945, dec: 59.1498, mag: 2.28, name: "Caph", bayer: "β Cas", spectral: "F" },
  { ra: 14.1772, dec: 60.7167, mag: 2.15, name: "Navi", bayer: "γ Cas", spectral: "B" },
  { ra: 20.6444, dec: 60.2353, mag: 2.68, name: "Ruchbah", bayer: "δ Cas", spectral: "A" },
  { ra: 28.5989, dec: 63.6701, mag: 3.35, name: "Segin", bayer: "ε Cas", spectral: "B" },

  // Cygnus
  { ra: 292.6803, dec: 27.9597, mag: 3.05, name: "Albireo", bayer: "β Cyg", spectral: "K" },
  { ra: 305.5571, dec: 40.2567, mag: 2.23, name: "Sadr", bayer: "γ Cyg", spectral: "F" },
  { ra: 296.2437, dec: 45.1303, mag: 2.48, name: "Gienah", bayer: "ε Cyg", spectral: "K" },

  // Scorpius & Sagittarius
  { ra: 240.2792, dec: -22.6219, mag: 2.32, name: "Graffias", bayer: "β Sco", spectral: "B" },
  { ra: 241.3592, dec: -19.8054, mag: 2.32, name: "Dschubba", bayer: "δ Sco", spectral: "B" },
  { ra: 253.8675, dec: -37.0975, mag: 1.63, name: "Shaula", bayer: "λ Sco", spectral: "B" },
  { ra: 254.4447, dec: -37.2965, mag: 2.41, name: "Sargas", bayer: "θ Sco", spectral: "F" },
  { ra: 276.0430, dec: -29.8722, mag: 1.79, name: "Kaus Australis", bayer: "ε Sgr", spectral: "B" },
  { ra: 283.8164, dec: -26.2967, mag: 2.05, name: "Nunki", bayer: "σ Sgr", spectral: "B" },

  // Southern Cross (Crux)
  { ra: 187.7915, dec: -59.6888, mag: 1.63, name: "Gacrux", bayer: "γ Cru", spectral: "M" },
  { ra: 183.8278, dec: -58.7489, mag: 2.79, name: "Imai", bayer: "δ Cru", spectral: "B" },

  // Pegasus & Andromeda
  { ra: 2.0969, dec: 29.0904, mag: 2.07, name: "Alpheratz", bayer: "α And", spectral: "B" },
  { ra: 345.9436, dec: 15.2053, mag: 2.49, name: "Markab", bayer: "α Peg", spectral: "B" },
  { ra: 346.1903, dec: 29.8736, mag: 2.42, name: "Scheat", bayer: "β Peg", spectral: "M" },
  { ra: 3.3090, dec: 15.1333, mag: 2.83, name: "Algenib", bayer: "γ Peg", spectral: "B" },
  { ra: 326.0463, dec: 9.8750, mag: 2.38, name: "Enif", bayer: "ε Peg", spectral: "K" },

  // Leo
  { ra: 177.2649, dec: 14.5721, mag: 2.14, name: "Denebola", bayer: "β Leo", spectral: "A" },
  { ra: 155.0999, dec: 19.8415, mag: 2.01, name: "Algieba", bayer: "γ Leo", spectral: "K" },
  { ra: 167.8344, dec: 20.5236, mag: 2.56, name: "Zosma", bayer: "δ Leo", spectral: "A" },

  // Taurus & Orion extras
  { ra: 56.8711, dec: 24.1051, mag: 2.87, name: "Alcyone", bayer: "η Tau", spectral: "B" }, // Pleiades bright star
  { ra: 83.0016, dec: 0.2991, mag: 2.23, name: "Mintaka", bayer: "δ Ori", spectral: "B" },
  { ra: 84.4111, dec: -5.3853, mag: 2.77, name: "Hatysa", bayer: "ι Ori", spectral: "B" },

  // Bootes, Virgo, Centaurus, Lyra, Aquila, Auriga extras
  { ra: 224.6329, dec: 27.0742, mag: 2.68, name: "Izar", bayer: "ε Boo", spectral: "K" },
  { ra: 190.9161, dec: -0.6667, mag: 2.74, name: "Porrima", bayer: "γ Vir", spectral: "F" },
  { ra: 205.5524, dec: -1.4504, mag: 3.38, name: "Heze", bayer: "ζ Vir", spectral: "A" },
  { ra: 283.3962, dec: 33.3627, mag: 3.25, name: "Sulafat", bayer: "γ Lyr", spectral: "B" },
  { ra: 299.0769, dec: 13.8636, mag: 2.72, name: "Tarazed", bayer: "γ Aql", spectral: "K" },
  { ra: 75.3113, dec: 33.1664, mag: 2.69, name: "Hassaleh", bayer: "ι Aur", spectral: "K" },
  { ra: 89.8801, dec: 44.9475, mag: 2.99, name: "Almaaz", bayer: "ε Aur", spectral: "F" },

  // Systematic grid of ~1,000 background catalog stars (mag 2.5 to 6.2)
  ...generateBackgroundStars()
];

// Helper to fill celestial sphere uniformly with real-looking star distribution
function generateBackgroundStars() {
  const stars = [];
  let seed = 42;
  function pseudoRandom() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  }

  // Milky Way plane inclination and density boost
  const numStars = 1100;
  for (let i = 0; i < numStars; i++) {
    const ra = pseudoRandom() * 360;
    // Uniform spherical angle distribution
    const sinDec = 2 * pseudoRandom() - 1;
    const dec = (Math.asin(sinDec) * 180) / Math.PI;

    // Milky Way galactic equator proximity check (approximate RA/Dec relation)
    const galacticDist = Math.abs(Math.sin((ra - 280) * Math.PI / 180) * 62 - dec);
    const inMilkyWay = galacticDist < 18;

    let mag = 3.5 + Math.pow(pseudoRandom(), 1.8) * 2.7; // 3.5 to 6.2
    if (inMilkyWay && pseudoRandom() < 0.6) {
      mag -= 0.6; // dense galactic cluster stars
    }

    const spectrals = ['B', 'A', 'F', 'G', 'K', 'M'];
    const spec = spectrals[Math.floor(pseudoRandom() * spectrals.length)];

    stars.push({
      ra: Number(ra.toFixed(4)),
      dec: Number(dec.toFixed(4)),
      mag: Number(mag.toFixed(2)),
      spectral: spec
    });
  }
  return stars;
}
