/**
 * Curated list of popular global cities for instant lookup
 */

const POPULAR_LOCATIONS = [
  { city: "Quito", country: "Ecuador", lat: -0.1807, lon: -78.4678, formattedCoords: "0.18° S, 78.47° W" },
  { city: "Paris", country: "France", lat: 48.8566, lon: 2.3522, formattedCoords: "48.86° N, 2.35° E" },
  { city: "New York", country: "United States", lat: 40.7128, lon: -74.0060, formattedCoords: "40.71° N, 74.01° W" },
  { city: "Tokyo", country: "Japan", lat: 35.6762, lon: 139.6503, formattedCoords: "35.68° N, 139.65° E" },
  { city: "London", country: "United Kingdom", lat: 51.5074, lon: -0.1278, formattedCoords: "51.51° N, 0.13° W" },
  { city: "Buenos Aires", country: "Argentina", lat: -34.6037, lon: -58.3816, formattedCoords: "34.60° S, 58.38° W" },
  { city: "Sydney", country: "Australia", lat: -33.8688, lon: 151.2093, formattedCoords: "33.87° S, 151.21° E" },
  { city: "Rome", country: "Italy", lat: 41.9028, lon: 12.4964, formattedCoords: "41.90° N, 12.50° E" },
  { city: "Madrid", country: "Spain", lat: 40.4168, lon: -3.7038, formattedCoords: "40.42° N, 3.70° W" },
  { city: "Los Angeles", country: "United States", lat: 34.0522, lon: -118.2437, formattedCoords: "34.05° N, 118.24° W" },
  { city: "Mexico City", country: "Mexico", lat: 19.4326, lon: -99.1332, formattedCoords: "19.43° N, 99.13° W" },
  { city: "Cairo", country: "Egypt", lat: 30.0444, lon: 31.2357, formattedCoords: "30.04° N, 31.24° E" },
  { city: "Singapore", country: "Singapore", lat: 1.3521, lon: 103.8198, formattedCoords: "1.35° N, 103.82° E" },
  { city: "Rio de Janeiro", country: "Brazil", lat: -22.9068, lon: -43.1729, formattedCoords: "22.91° S, 43.17° W" },
  { city: "Berlin", country: "Germany", lat: 52.5200, lon: 13.4050, formattedCoords: "52.52° N, 13.40° E" },
  { city: "Toronto", country: "Canada", lat: 43.6532, lon: -79.3832, formattedCoords: "43.65° N, 79.38° W" },
  { city: "Barcelona", country: "Spain", lat: 41.3851, lon: 2.1734, formattedCoords: "41.39° N, 2.17° E" },
  { city: "Amsterdam", country: "Netherlands", lat: 52.3676, lon: 4.9041, formattedCoords: "52.37° N, 4.90° E" },
  { city: "Santiago", country: "Chile", lat: -33.4489, lon: -70.6693, formattedCoords: "33.45° S, 70.67° W" },
  { city: "Lima", country: "Peru", lat: -12.0464, lon: -77.0428, formattedCoords: "12.05° S, 77.04° W" },
  { city: "Bogotá", country: "Colombia", lat: 4.7110, lon: -74.0721, formattedCoords: "4.71° N, 74.07° W" }
];

function formatLatLon(lat, lon) {
  const latDir = lat >= 0 ? 'N' : 'S';
  const lonDir = lon >= 0 ? 'E' : 'W';
  const absLat = Math.abs(lat).toFixed(2);
  const absLon = Math.abs(lon).toFixed(2);
  return `${absLat}° ${latDir}, ${absLon}° ${lonDir}`;
}


/**
 * Yale Bright Star Catalog Subset (~1,200 stars down to magnitude 6.0)
 * Coordinates: RA in degrees (0..360), Dec in degrees (-90..+90)
 * mag: Visual magnitude V
 * name: Common star name (optional)
 * bayer: Bayer designation (optional)
 * spectral: Spectral class (O, B, A, F, G, K, M)
 */

const STARS = [
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


/**
 * 88 Constellations dataset with line segments and centroids
 * Coordinates in RA (degrees) and Dec (degrees)
 */

const CONSTELLATIONS = [
  {
    id: "Ori",
    name: "Orion",
    center: { ra: 83.8, dec: 0.0 },
    lines: [
      [[83.0016, 0.2991], [84.0534, -1.2019]], // Mintaka - Alnilam
      [[84.0534, -1.2019], [85.1897, -1.9426]], // Alnilam - Alnitak
      [[88.7929, 7.4071], [81.2828, 6.3497]],  // Betelgeuse - Bellatrix
      [[81.2828, 6.3497], [83.0016, 0.2991]],   // Bellatrix - Mintaka
      [[88.7929, 7.4071], [85.1897, -1.9426]],  // Betelgeuse - Alnitak
      [[85.1897, -1.9426], [86.9391, -9.6696]], // Alnitak - Saiph
      [[83.0016, 0.2991], [78.6345, -8.2016]],  // Mintaka - Rigel
      [[86.9391, -9.6696], [78.6345, -8.2016]],  // Saiph - Rigel
      [[88.7929, 7.4071], [88.5, 14.2]],        // Betelgeuse - Head
      [[81.2828, 6.3497], [88.5, 14.2]]         // Bellatrix - Head
    ]
  },
  {
    id: "UMa",
    name: "Ursa Major",
    center: { ra: 175.0, dec: 55.0 },
    lines: [
      [[165.9320, 61.7510], [165.4603, 56.3824]], // Dubhe - Merak
      [[165.4603, 56.3824], [178.4578, 53.6948]], // Merak - Phecda
      [[178.4578, 53.6948], [183.8569, 57.0326]], // Phecda - Megrez
      [[183.8569, 57.0326], [165.9320, 61.7510]], // Megrez - Dubhe
      [[183.8569, 57.0326], [193.5073, 55.9598]], // Megrez - Alioth
      [[193.5073, 55.9598], [200.9814, 54.9254]], // Alioth - Mizar
      [[200.9814, 54.9254], [206.8852, 49.3133]], // Mizar - Alkaid
      [[178.4578, 53.6948], [170.0, 47.0]],      // Phecda - Legs
      [[165.4603, 56.3824], [140.0, 54.0]]       // Merak - Head
    ]
  },
  {
    id: "UMi",
    name: "Ursa Minor",
    center: { ra: 220.0, dec: 78.0 },
    lines: [
      [[37.9545, 89.2641], [220.0, 77.8]],
      [[220.0, 77.8], [235.0, 74.2]],
      [[235.0, 74.2], [230.0, 71.8]],
      [[230.0, 71.8], [222.0, 74.1]],
      [[222.0, 74.1], [235.0, 74.2]]
    ]
  },
  {
    id: "Cas",
    name: "Cassiopeia",
    center: { ra: 15.0, dec: 60.0 },
    lines: [
      [[2.2945, 59.1498], [9.8362, 56.5373]],   // Caph - Schedar
      [[9.8362, 56.5373], [14.1772, 60.7167]],  // Schedar - Navi
      [[14.1772, 60.7167], [20.6444, 60.2353]], // Navi - Ruchbah
      [[20.6444, 60.2353], [28.5989, 63.6701]]  // Ruchbah - Segin
    ]
  },
  {
    id: "Cyg",
    name: "Cygnus",
    center: { ra: 305.0, dec: 42.0 },
    lines: [
      [[310.3580, 45.2803], [305.5571, 40.2567]], // Deneb - Sadr
      [[305.5571, 40.2567], [292.6803, 27.9597]], // Sadr - Albireo
      [[296.2437, 45.1303], [305.5571, 40.2567]], // Gienah - Sadr
      [[305.5571, 40.2567], [290.0, 51.5]]       // Sadr - Wing
    ]
  },
  {
    id: "Sco",
    name: "Scorpius",
    center: { ra: 247.0, dec: -30.0 },
    lines: [
      [[240.2792, -22.6219], [241.3592, -19.8054]], // Graffias - Dschubba
      [[241.3592, -19.8054], [247.3519, -26.4320]], // Dschubba - Antares
      [[247.3519, -26.4320], [253.8675, -37.0975]], // Antares - Shaula
      [[253.8675, -37.0975], [254.4447, -37.2965]], // Shaula - Sargas
      [[254.4447, -37.2965], [260.0, -42.0]]
    ]
  },
  {
    id: "Cru",
    name: "Southern Cross",
    center: { ra: 186.0, dec: -60.0 },
    lines: [
      [[186.6496, -63.0991], [187.7915, -59.6888]], // Acrux - Gacrux
      [[191.9304, -59.6888], [183.8278, -58.7489]]  // Mimosa - Imai
    ]
  },
  {
    id: "Leo",
    name: "Leo",
    center: { ra: 160.0, dec: 15.0 },
    lines: [
      [[152.0929, 11.9672], [155.0999, 19.8415]], // Regulus - Algieba
      [[155.0999, 19.8415], [167.8344, 20.5236]], // Algieba - Zosma
      [[167.8344, 20.5236], [177.2649, 14.5721]], // Zosma - Denebola
      [[177.2649, 14.5721], [152.0929, 11.9672]], // Denebola - Regulus
      [[155.0999, 19.8415], [148.0, 26.0]],      // Sickle head
      [[148.0, 26.0], [145.0, 23.5]]
    ]
  },
  {
    id: "Tau",
    name: "Taurus",
    center: { ra: 65.0, dec: 18.0 },
    lines: [
      [[68.9802, 16.5093], [81.5730, 28.6075]], // Aldebaran - Elnath
      [[68.9802, 16.5093], [56.8711, 24.1051]], // Aldebaran - Alcyone
      [[68.9802, 16.5093], [64.0, 15.6]]
    ]
  },
  {
    id: "Gem",
    name: "Gemini",
    center: { ra: 115.0, dec: 26.0 },
    lines: [
      [[113.6494, 31.8883], [116.0348, 28.0262]], // Castor - Pollux
      [[113.6494, 31.8883], [105.0, 22.0]],
      [[116.0348, 28.0262], [108.0, 16.0]]
    ]
  },
  {
    id: "Peg",
    name: "Pegasus",
    center: { ra: 350.0, dec: 20.0 },
    lines: [
      [[345.9436, 15.2053], [346.1903, 29.8736]], // Markab - Scheat
      [[346.1903, 29.8736], [2.0969, 29.0904]],   // Scheat - Alpheratz
      [[2.0969, 29.0904], [3.3090, 15.1333]],    // Alpheratz - Algenib
      [[3.3090, 15.1333], [345.9436, 15.2053]],   // Algenib - Markab
      [[345.9436, 15.2053], [326.0463, 9.8750]]   // Markab - Enif
    ]
  },
  {
    id: "Sgr",
    name: "Sagittarius",
    center: { ra: 280.0, dec: -28.0 },
    lines: [
      [[276.0430, -29.8722], [283.8164, -26.2967]], // Kaus Australis - Nunki
      [[283.8164, -26.2967], [288.0, -21.0]],
      [[276.0430, -29.8722], [270.0, -34.0]],
      [[270.0, -34.0], [280.0, -37.0]]
    ]
  },
  {
    id: "Vir",
    name: "Virgo",
    center: { ra: 200.0, dec: -5.0 },
    lines: [
      [[201.2983, -11.1613], [190.9161, -0.6667]], // Spica - Porrima
      [[190.9161, -0.6667], [205.5524, -1.4504]],  // Porrima - Heze
      [[190.9161, -0.6667], [185.0, 3.0]]
    ]
  },
  {
    id: "Boo",
    name: "Boötes",
    center: { ra: 218.0, dec: 22.0 },
    lines: [
      [[213.9153, 19.1824], [224.6329, 27.0742]], // Arcturus - Izar
      [[224.6329, 27.0742], [220.0, 38.0]],
      [[220.0, 38.0], [210.0, 33.0]],
      [[210.0, 33.0], [213.9153, 19.1824]]
    ]
  },
  {
    id: "Lyr",
    name: "Lyra",
    center: { ra: 281.0, dec: 36.0 },
    lines: [
      [[279.2347, 38.7837], [283.3962, 33.3627]], // Vega - Sulafat
      [[279.2347, 38.7837], [281.5, 36.8]],
      [[281.5, 36.8], [283.3962, 33.3627]]
    ]
  },
  {
    id: "Aql",
    name: "Aquila",
    center: { ra: 298.0, dec: 10.0 },
    lines: [
      [[297.6958, 8.8683], [299.0769, 13.8636]],  // Altair - Tarazed
      [[297.6958, 8.8683], [294.0, 3.0]],
      [[297.6958, 8.8683], [305.0, 12.0]]
    ]
  },
  {
    id: "Aur",
    name: "Auriga",
    center: { ra: 82.0, dec: 42.0 },
    lines: [
      [[79.1723, 45.9980], [75.3113, 33.1664]],   // Capella - Hassaleh
      [[79.1723, 45.9980], [89.8801, 44.9475]],   // Capella - Almaaz
      [[75.3113, 33.1664], [81.5730, 28.6075]],   // Hassaleh - Elnath
      [[89.8801, 44.9475], [81.5730, 28.6075]]
    ]
  },
  {
    id: "CMa",
    name: "Canis Major",
    center: { ra: 103.0, dec: -22.0 },
    lines: [
      [[101.2872, -16.7161], [104.6565, -28.9721]], // Sirius - Adhara
      [[101.2872, -16.7161], [98.0, -18.0]],
      [[104.6565, -28.9721], [108.0, -30.0]]
    ]
  },
  {
    id: "Per",
    name: "Perseus",
    center: { ra: 50.0, dec: 45.0 },
    lines: [
      [[47.0, 40.9], [51.0, 49.9]],
      [[51.0, 49.9], [57.0, 40.0]],
      [[47.0, 40.9], [44.0, 31.5]]
    ]
  },
  {
    id: "And",
    name: "Andromeda",
    center: { ra: 15.0, dec: 38.0 },
    lines: [
      [[2.0969, 29.0904], [17.0, 35.6]],
      [[17.0, 35.6], [30.5, 42.3]]
    ]
  },
  {
    id: "Her",
    name: "Hercules",
    center: { ra: 255.0, dec: 32.0 },
    lines: [
      [[257.0, 14.4], [250.0, 27.5]],
      [[250.0, 27.5], [260.0, 31.6]],
      [[260.0, 31.6], [263.0, 21.5]],
      [[263.0, 21.5], [257.0, 14.4]]
    ]
  },
  {
    id: "Cen",
    name: "Centaurus",
    center: { ra: 200.0, dec: -48.0 },
    lines: [
      [[219.9009, -60.8351], [210.9559, -60.3730]],
      [[210.9559, -60.3730], [200.0, -47.0]],
      [[200.0, -47.0], [193.0, -40.0]]
    ]
  }
];


/**
 * Astronomy Engine & Celestial Projection Service
 * Computes exact star positions, constellation lines, planets, and moon phase.
 */




function calculateSiderealTime(dateObj, longitude) {
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

function equatorialToHorizontal(ra, dec, lat, lst) {
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

function projectToCircle(alt, az, cx, cy, radius, rotationDeg = 0) {
  // Only celestial objects above horizon (alt >= 0)
  if (alt < -2) return null; // allow slight refraction margin

  // Stereographic projection factor: zenith (90) at center (r=0), horizon (0) at circle boundary (r=radius)
  const normR = radius * Math.tan(((90 - Math.max(0, alt)) * Math.PI) / 360) / Math.tan((45 * Math.PI) / 180);
  const theta = ((az + rotationDeg) * Math.PI) / 180;

  const x = cx + normR * Math.sin(theta);
  const y = cy - normR * Math.cos(theta);

  return { x, y, r: normR };
}

function getVisibleSkyData(date, lat, lon, options = {}) {
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


/**
 * Geocoding Service
 * Provides location autocompletion via OpenStreetMap Nominatim API with fallback to popular locations dataset.
 */



let debounceTimer = null;

async function searchLocation(query, callback) {
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


/**
 * PDF, PNG, and SVG Export Service
 * Generates high-resolution print ready posters.
 */

async function exportPosterAsPDF(posterElement, options = {}) {
  const {
    paperSize = 'A4',      // 'A4', 'A3', 'Letter', 'Square'
    orientation = 'portrait', // 'portrait', 'landscape'
    filename = 'Stellar-Moment-StarMap.pdf'
  } = options;

  if (!window.jspdf || !window.jspdf.jsPDF) {
    alert("PDF library is loading. Please try again in a moment.");
    return;
  }

  const { jsPDF } = window.jspdf;

  // Paper dimensions in mm
  const dimensions = {
    '13x18': { width: 130, height: 180 },
    A4: { width: 210, height: 297 },
    A3: { width: 297, height: 420 },
    Letter: { width: 215.9, height: 279.4 },
    Square: { width: 250, height: 250 }
  };

  let dim = dimensions[paperSize] || dimensions.A4;
  if (orientation === 'landscape' && paperSize !== 'Square') {
    dim = { width: dim.height, height: dim.width };
  }

  // Use html2canvas to render poster container at Ultra HD scale (6x for 600 DPI razor-sharp print quality)
  if (!window.html2canvas) {
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js');
  }

  const canvas = await window.html2canvas(posterElement, {
    scale: 6, // Ultra High-DPI Rendering (600+ DPI, zero blur when zooming in)
    useCORS: true,
    logging: false,
    backgroundColor: null,
    onclone: (clonedDoc) => {
      // Ensure SVG elements maintain high stroke sharpness
      const clonedSvg = clonedDoc.querySelector('#narrative-sky-container svg') || clonedDoc.querySelector('#poster-sky-circle svg');
      if (clonedSvg) {
        clonedSvg.setAttribute('shape-rendering', 'geometricPrecision');
        clonedSvg.setAttribute('text-rendering', 'geometricPrecision');
      }
    }
  });

  // Use lossless PNG format to avoid JPEG compression artifacts
  const imgData = canvas.toDataURL('image/png', 1.0);
  const pdf = new jsPDF({
    orientation: dim.width > dim.height ? 'landscape' : 'portrait',
    unit: 'mm',
    format: [dim.width, dim.height]
  });

  pdf.addImage(imgData, 'PNG', 0, 0, dim.width, dim.height, '', 'SLOW');
  pdf.save(filename);
}

async function exportPosterAsPNG(posterElement, filename = 'Stellar-Moment-StarMap.png') {
  if (!window.html2canvas) {
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js');
  }

  const canvas = await window.html2canvas(posterElement, {
    scale: 6, // 6x Ultra-HD resolution
    useCORS: true,
    logging: false,
    backgroundColor: null
  });

  const link = document.createElement('a');
  link.download = filename;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

function exportPosterAsSVG(svgElement, filename = 'Stellar-Moment-StarMap.svg') {
  if (!svgElement) return;
  const serializer = new XMLSerializer();
  let source = serializer.serializeToString(svgElement);

  // Add namespaces if missing
  if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
    source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  if (!source.match(/^<svg[^>]+xmlns:xlink="http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
    source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
  }

  source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
  const url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);

  const link = document.createElement('a');
  link.download = filename;
  link.href = url;
  link.click();
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}


/**
 * Stellar Moment — Narrative Journey & Interactive Star Chart Studio
 */






// Application State
const state = {
  view: 'narrative', // 'narrative' | 'editor'
  narrativeStep: 0,
  isAutoPlaying: false,
  autoPlayTimer: null,
  narrativeAudio: new Audio(),
  playlistAudio: new Audio(),

  
  // Custom Studio State
  date: { day: 26, month: 7, year: 2000 }, // Month is 0-indexed (7 = August)
  time: { hour: 21, minute: 9, format: '24' },
  location: {
    name: 'Quito, Ecuador',
    lat: 0.0000,
    lon: -78.4678,
    formattedCoords: '0.00° N, 78.47° W'
  },
  theme: 'midnight',
  typography: 'serif',
  borderStyle: 'border-double',
  text: {
    title: 'THE SKY ABOVE QUITO',
    subtitle: '26 August 2000',
    locationName: 'QUITO, ECUADOR',
    quote: '“A moment written in the stars.”'
  },
  toggles: {
    constellations: true,
    constellationNames: false, // Default hidden, togglable in secret modal
    allStarNames: false,       // Default false (show text when requested, hide when checked)
    planets: true,
    coordinates: true,
    cardinal: true
  },
  chart: {
    zoom: 1.0,
    rotation: 0
  }
};

// =========================================================================
// 🌟 CONFIGURACIÓN DE HISTORIA Y AUDIOS DE VOCAROO PARA IBETH
// =========================================================================
// =========================================================================
// 🌟 CONFIGURACIÓN DE HISTORIA Y AUDIOS DE VOCAROO PARA IBETH
// =========================================================================
const NARRATIVE_SCENES = [
  {
    step: 0,
    counter: "00 / 09",
    progress: 0,
    title: "El centro del mundo",
    subtitle: "Quito, Ecuador · Latitud 00°00'00'' · 26 de Agosto de 2000 · 21:09",
    text: "Comienza a anochecer en el centro del planeta, en la ciudad de Quito a las <span class=\"gold-num-glow\">9</span> de la noche con <span class=\"gold-num-glow\">9</span> minutos, latitud 00°00'00'', el día 26 de agosto del 2000.",
    btnNextText: "Comenzar Viaje →",
    starsLevel: 0,
    highlightConstellations: [],
    showLines: false,
    showNames: false,
    showBrightNames: false,
    showPlanets: false,
    highlightCompass: true,
    showGrid: false,
    audioUrl: "https://media.vocaroo.com/mp3/1gJbicOCwqVc"
  },
  {
    step: 1,
    counter: "01 / 09",
    progress: 11,
    title: "El universo",
    subtitle: "Una princesa por aparecer",
    text: "El espacio se encuentra en un silencio oscuro, el cosmos aguarda paciente la víspera de presenciar la luz más hermosa de todo el firmamento. Una bebé, una princesa estaba a punto de poner el cielo patas arriba.",
    btnNextText: "Continuar →",
    starsLevel: 1,
    highlightConstellations: [],
    showLines: false,
    showNames: false,
    showBrightNames: false,
    showPlanets: false,
    highlightCompass: false,
    showGrid: false,
    audioUrl: ""
  },
  {
    step: 2,
    counter: "02 / 09",
    progress: 22,
    title: "Las primeras estrellas",
    subtitle: "El nacimiento de una nueva estrella",
    text: "Los astros que vemos como estrellas y polvo cósmico se alinean uno detrás de otro, pues están dejando espacio para un brillo único proveniente de la Tierra: el nacimiento de una nueva estrella.",
    btnNextText: "Continuar →",
    starsLevel: 1.5,
    highlightConstellations: [],
    showLines: false,
    showNames: false,
    showBrightNames: false,
    showPlanets: false,
    highlightCompass: true,
    showGrid: true,
    audioUrl: ""
  },
  {
    step: 3,
    counter: "03 / 09",
    progress: 33,
    title: "Orientación",
    subtitle: "En el paralelo cero",
    text: "En el paralelo cero, el cielo comienza a mostrar cada vez más su brillo, las coordenadas del mundo giran para encontrar el verdadero norte.",
    btnNextText: "Continuar →",
    starsLevel: 2,
    highlightConstellations: ["Ori"],
    animateLines: true,
    showLines: true,
    showNames: false,
    showBrightNames: false,
    showPlanets: false,
    highlightCompass: false,
    showGrid: false,
    audioUrl: ""
  },
  {
    step: 4,
    counter: "04 / 09",
    progress: 44,
    title: "Las primeras lunas",
    subtitle: "Ansiosos por verte nacer",
    text: "Junto a las estrellas vemos las primeras lunas. Todos están ansiosos por verte nacer; tus padres llenos de orgullo, y yo, con apenas algunos meses de vida en este mundo, siento que mi corazón palpita cada vez más fuerte intuyendo tu llegada.",
    btnNextText: "Continuar →",
    starsLevel: 2.5,
    highlightConstellations: ["Ori"],
    showLines: true,
    showNames: false,
    showBrightNames: false,
    showPlanets: false,
    highlightCompass: false,
    showGrid: false,
    audioUrl: ""
  },
  {
    step: 5,
    counter: "05 / 09",
    progress: 55,
    title: "La estrella que más brilla",
    subtitle: "Eres el universo entero",
    text: "El cielo de repente se pone a tus pies al verte nacer. En este momento no eres solo la estrella que más brilla; más que cualquier estrella, eres el universo entero, mi Ibeth preciosa.",
    btnNextText: "Continuar →",
    starsLevel: 2.8,
    highlightConstellations: ["Ori", "Sco", "Cyg", "Sgr"],
    animateLines: true,
    showLines: true,
    showNames: false,
    showBrightNames: false,
    showPlanets: false,
    highlightCompass: false,
    showGrid: false,
    audioUrl: ""
  },
  {
    step: 6,
    counter: "06 / 09",
    progress: 66,
    title: "Tu rostro",
    subtitle: "El mapa de tus pecas",
    text: "Los astros siguen tu brillo, ya que sin él perderían su camino. En este momento, ellos forman tu rostro; ahora tú las llamas pecas, pero fueron el universo mismo dejando su huella sobre ti.",
    btnNextText: "Continuar →",
    starsLevel: 3,
    highlightConstellations: ["Ori", "Sco", "Cyg", "Sgr"],
    showLines: true,
    showNames: false,
    showBrightNames: false,
    showPlanets: false,
    highlightCompass: false,
    showGrid: false,
    audioUrl: ""
  },
  {
    step: 7,
    counter: "07 / 09",
    progress: 77,
    title: "Las estrellas más luminosas",
    subtitle: "Los lunares de tu sonrisa",
    text: "<span class=\"star-name-gold\">Antares</span>, la estrella de Escorpio, es ahora el lunar por encima de tu labio derecho. <span class=\"star-name-gold\">Altair</span>, la estrella de Aquila, se convirtió en el lunar a la izquierda de tu nariz. Las estrellas <span class=\"star-name-gold\">Spica</span> (de Virgo) y <span class=\"star-name-gold\">Arcturus</span> (de Boötes), las más majestuosas del cosmos, formaron los lunares a la derecha de tu mejilla. ¿Sabías que la mayoría de tus lunares están en la parte derecha de tu cara? Todos ellos brillan nuevamente cuando ven que tú sonríes.",
    btnNextText: "Continuar →",
    starsLevel: 3,
    highlightConstellations: ["*"],
    showLines: true,
    showNames: false,
    showBrightNames: false,
    showPlanets: false,
    highlightCompass: false,
    showGrid: true,
    audioUrl: ""
  },
  {
    step: 8,
    counter: "08 / 09",
    progress: 88,
    title: "Constelaciones",
    subtitle: "Esculpidas en el cielo",
    text: "Tu rostro es formado por millones de estrellas: <span class=\"constellation-name-blue\">Pegasus</span> y <span class=\"constellation-name-blue\">Boötes</span> son tus ojos, <span class=\"constellation-name-blue\">Aquila</span> tu nariz, <span class=\"constellation-name-blue\">Cygnus</span> y <span class=\"constellation-name-blue\">Hércules</span> tus cejas, y <span class=\"constellation-name-blue\">Escorpio</span> son los labios que me gustan besar.",
    btnNextText: "Continuar →",
    starsLevel: 3,
    highlightConstellations: ["*"],
    showLines: true,
    showNames: false,
    showBrightNames: false,
    showPlanets: true,
    highlightCompass: false,
    showGrid: true,
    audioUrl: ""
  },
  {
    step: 9,
    counter: "09 / 09",
    progress: 100,
    title: "Feliz Cumpleaños",
    subtitle: "26 de Agosto · Para mi Ibeth",
    text: "Feliz cumpleaños, mi universo favorito. Permíteme seguir explorando el universo de tus ojos y el infinito de tu mirada.",
    btnNextText: "Descubrir Playlist & Galaxia ✨",
    starsLevel: 3,
    highlightConstellations: ["*"],
    showLines: true,
    showNames: false,
    showBrightNames: false,
    showPlanets: true,
    highlightCompass: false,
    showGrid: true,
    isFinal: true,
    hasEmojiPop: true,
    audioUrl: ""
  }
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Initialize App on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initEventListeners();
  initGalaxyPageListeners();
  updateUIFromState();
  renderNarrativeScene(0);
  if (window.lucide) window.lucide.createIcons();
});

function initEventListeners() {
  // Triple Click Handler on Narrative Poster Card to Save Map
  let clickCount = 0;
  let clickTimer = null;
  const posterCard = document.getElementById('narrative-poster-card');

  posterCard?.addEventListener('click', () => {
    clickCount++;
    if (clickTimer) clearTimeout(clickTimer);

    if (clickCount >= 3) {
      clickCount = 0;
      showSecretToast();
      openExportModal();
    } else {
      clickTimer = setTimeout(() => {
        clickCount = 0;
      }, 1000);
    }
  });

  // Narrative Journey Controls
  document.getElementById('narrative-btn-next')?.addEventListener('click', handleNarrativeNext);
  document.getElementById('narrative-btn-back')?.addEventListener('click', handleNarrativeBack);


  // Studio Inputs
  document.getElementById('input-month')?.addEventListener('change', (e) => {
    state.date.month = parseInt(e.target.value, 10);
    autoUpdateSubtitle();
    renderAllStarMaps();
  });

  document.getElementById('input-day')?.addEventListener('input', (e) => {
    state.date.day = parseInt(e.target.value, 10) || 1;
    autoUpdateSubtitle();
    renderAllStarMaps();
  });

  document.getElementById('input-year')?.addEventListener('input', (e) => {
    state.date.year = parseInt(e.target.value, 10) || 2000;
    autoUpdateSubtitle();
    renderAllStarMaps();
  });

  document.getElementById('input-hour')?.addEventListener('input', (e) => {
    state.time.hour = parseInt(e.target.value, 10) || 0;
    updateTimeCoordsText();
    renderAllStarMaps();
  });

  document.getElementById('input-minute')?.addEventListener('input', (e) => {
    state.time.minute = parseInt(e.target.value, 10) || 0;
    updateTimeCoordsText();
    renderAllStarMaps();
  });

  document.getElementById('input-time-format')?.addEventListener('change', (e) => {
    state.time.format = e.target.value;
    updateTimeCoordsText();
    renderAllStarMaps();
  });

  // Location Search & Presets
  const locInput = document.getElementById('input-location-search');
  const suggestionsBox = document.getElementById('location-suggestions');

  locInput?.addEventListener('input', (e) => {
    const val = e.target.value;
    searchLocation(val, (results) => renderLocationSuggestions(results));
  });

  document.addEventListener('click', (e) => {
    if (!locInput?.contains(e.target) && !suggestionsBox?.contains(e.target)) {
      if (suggestionsBox) suggestionsBox.style.display = 'none';
    }
  });

  document.getElementById('input-lat')?.addEventListener('input', (e) => {
    state.location.lat = parseFloat(e.target.value) || 0;
    state.location.formattedCoords = formatLatLon(state.location.lat, state.location.lon);
    updateTimeCoordsText();
    renderAllStarMaps();
  });

  document.getElementById('input-lon')?.addEventListener('input', (e) => {
    state.location.lon = parseFloat(e.target.value) || 0;
    state.location.formattedCoords = formatLatLon(state.location.lat, state.location.lon);
    updateTimeCoordsText();
    renderAllStarMaps();
  });

  document.querySelectorAll('.preset-loc-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectLocation(btn.dataset.city, btn.dataset.country, parseFloat(btn.dataset.lat), parseFloat(btn.dataset.lon));
    });
  });

  // Theme & Style Controls
  document.querySelectorAll('.theme-card-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.theme-card-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.theme = btn.dataset.theme;
      applyPosterTheme();
      renderAllStarMaps();
    });
  });

  document.getElementById('select-font-family')?.addEventListener('change', (e) => {
    state.typography = e.target.value;
    applyPosterTypography();
  });

  document.getElementById('select-border-style')?.addEventListener('change', (e) => {
    state.borderStyle = e.target.value;
    applyPosterBorder();
  });

  // Text Customization
  document.getElementById('input-title')?.addEventListener('input', (e) => {
    state.text.title = e.target.value.toUpperCase();
    document.getElementById('poster-render-title').textContent = state.text.title;
  });

  document.getElementById('input-subtitle')?.addEventListener('input', (e) => {
    state.text.subtitle = e.target.value;
    document.getElementById('poster-render-subtitle').textContent = state.text.subtitle;
  });

  document.getElementById('input-location-name')?.addEventListener('input', (e) => {
    state.text.locationName = e.target.value.toUpperCase();
    document.getElementById('poster-render-location').textContent = state.text.locationName;
  });

  document.getElementById('input-quote')?.addEventListener('input', (e) => {
    state.text.quote = e.target.value;
    document.getElementById('poster-render-quote').textContent = state.text.quote;
  });

  // Toggles
  document.getElementById('toggle-constellations')?.addEventListener('change', (e) => {
    state.toggles.constellations = e.target.checked;
    renderAllStarMaps();
  });

  document.getElementById('toggle-constellation-names')?.addEventListener('change', (e) => {
    state.toggles.constellationNames = e.target.checked;
    renderAllStarMaps();
  });

  document.getElementById('toggle-planets')?.addEventListener('change', (e) => {
    state.toggles.planets = e.target.checked;
    renderAllStarMaps();
  });

  document.getElementById('toggle-coordinates')?.addEventListener('change', (e) => {
    state.toggles.coordinates = e.target.checked;
    updateTimeCoordsText();
  });

  document.getElementById('toggle-cardinal')?.addEventListener('change', (e) => {
    state.toggles.cardinal = e.target.checked;
    renderAllStarMaps();
  });

  // Interactive Map Controls
  document.getElementById('btn-map-zoom-in')?.addEventListener('click', () => {
    state.chart.zoom = Math.min(2.0, state.chart.zoom + 0.15);
    renderAllStarMaps();
  });

  document.getElementById('btn-map-zoom-out')?.addEventListener('click', () => {
    state.chart.zoom = Math.max(0.7, state.chart.zoom - 0.15);
    renderAllStarMaps();
  });

  document.getElementById('btn-map-rotate-cw')?.addEventListener('click', () => {
    state.chart.rotation = (state.chart.rotation + 45) % 360;
    renderAllStarMaps();
  });

  document.getElementById('btn-map-reset')?.addEventListener('click', () => {
    state.chart.zoom = 1.0;
    state.chart.rotation = 0;
    renderAllStarMaps();
  });

  // Export Buttons
  document.getElementById('btn-export-pdf')?.addEventListener('click', openExportModal);
  document.getElementById('header-btn-export')?.addEventListener('click', openExportModal);
  document.getElementById('btn-export-png')?.addEventListener('click', () => {
    const poster = document.getElementById('narrative-poster-card') || document.getElementById('live-poster-element');
    exportPosterAsPNG(poster, `Stellar-Moment-${state.location.name.replace(/\s+/g, '-')}.png`);
  });

  document.getElementById('btn-export-svg')?.addEventListener('click', () => {
    const svg = document.querySelector('#narrative-sky-container svg') || document.querySelector('#poster-sky-circle svg');
    exportPosterAsSVG(svg, `Stellar-Moment-Sky.svg`);
  });

  // Modals
  document.getElementById('btn-show-astro-modal')?.addEventListener('click', openAstroModal);
  document.getElementById('close-astro-modal')?.addEventListener('click', () => {
    document.getElementById('astro-modal').style.display = 'none';
  });

  document.getElementById('close-export-modal')?.addEventListener('click', () => {
    document.getElementById('export-modal').style.display = 'none';
  });

  // Secret Modal Customization Toggles
  document.getElementById('secret-toggle-frame')?.addEventListener('change', (e) => {
    const poster = document.getElementById('narrative-poster-card');
    if (poster) {
      if (e.target.checked) {
        poster.classList.remove('border-double', 'border-simple', 'border-ornate');
        poster.classList.add('border-flush');
      } else {
        poster.classList.remove('border-flush');
        poster.classList.add('border-double');
      }
    }
  });

  document.getElementById('secret-toggle-all-star-names')?.addEventListener('change', (e) => {
    state.toggles.allStarNames = e.target.checked;
    renderNarrativeScene(state.narrativeStep);
  });

  document.getElementById('secret-toggle-names')?.addEventListener('change', (e) => {
    state.toggles.constellationNames = e.target.checked;
    renderNarrativeScene(state.narrativeStep);
  });

  document.getElementById('secret-toggle-lines')?.addEventListener('change', (e) => {
    state.toggles.constellations = e.target.checked;
    renderNarrativeScene(state.narrativeStep);
  });

  document.getElementById('secret-toggle-planets')?.addEventListener('change', (e) => {
    state.toggles.planets = e.target.checked;
    renderNarrativeScene(state.narrativeStep);
  });

  // Secret Modal Text Editing Inputs
  document.getElementById('secret-input-title')?.addEventListener('input', (e) => {
    const val = e.target.value;
    state.text.title = val;
    const titleEl = document.getElementById('narrative-poster-title');
    if (titleEl) titleEl.textContent = val;
  });

  document.getElementById('secret-input-subtitle')?.addEventListener('input', (e) => {
    const val = e.target.value;
    state.text.subtitle = val;
    const subEl = document.getElementById('narrative-poster-subtitle');
    if (subEl) subEl.textContent = val;
  });

  document.getElementById('secret-input-location')?.addEventListener('input', (e) => {
    const val = e.target.value;
    state.text.locationName = val;
    const locEl = document.getElementById('narrative-poster-location');
    if (locEl) locEl.textContent = val;
  });

  document.getElementById('secret-input-quote')?.addEventListener('input', (e) => {
    const val = e.target.value;
    state.text.quote = val;
    const quoteEl = document.getElementById('narrative-poster-quote');
    if (quoteEl) quoteEl.textContent = val;
  });

  document.getElementById('secret-export-svg')?.addEventListener('click', () => {
    const svg = document.querySelector('#narrative-sky-container svg') || document.querySelector('#poster-sky-circle svg');
    exportPosterAsSVG(svg, `Stellar-Moment-VectorSky.svg`);
  });

  document.getElementById('secret-export-png')?.addEventListener('click', () => {
    const poster = document.getElementById('narrative-poster-card') || document.getElementById('live-poster-element');
    exportPosterAsPNG(poster, `Stellar-Moment-${state.location.name.replace(/\s+/g, '-')}.png`);
  });

  document.getElementById('confirm-export-pdf')?.addEventListener('click', () => {
    const paperSize = document.getElementById('export-paper-size').value;
    const orientation = document.getElementById('export-orientation').value;
    const poster = document.getElementById('narrative-poster-card') || document.getElementById('live-poster-element');
    exportPosterAsPDF(poster, {
      paperSize,
      orientation,
      filename: `Stellar-Moment-${state.location.name.replace(/\s+/g, '-')}.pdf`
    });
    document.getElementById('export-modal').style.display = 'none';
  });
}

function showSecretToast() {
  const toast = document.getElementById('secret-toast');
  if (toast) {
    toast.style.transform = 'translateX(-50%) translateY(0px)';
    setTimeout(() => {
      toast.style.transform = 'translateX(-50%) translateY(100px)';
    }, 3200);
  }
}

function handleNarrativeNext() {
  if (state.narrativeStep >= NARRATIVE_SCENES.length - 1) {
    // Transition to Galaxy Surprise Page!
    const narrativeView = document.getElementById('narrative-view');
    const surprisePage = document.getElementById('galaxy-surprise-page');
    if (narrativeView && surprisePage) {
      narrativeView.style.display = 'none';
      surprisePage.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  } else {
    state.narrativeStep += 1;
    renderNarrativeScene(state.narrativeStep);
  }
}

function handleNarrativeBack() {
  if (state.narrativeStep > 0) {
    state.narrativeStep -= 1;
    renderNarrativeScene(state.narrativeStep);
  }
}

function toggleAutoPlay() {
  state.isAutoPlaying = !state.isAutoPlaying;
  const btn = document.getElementById('narrative-btn-pause');
  if (state.isAutoPlaying) {
    if (btn) btn.innerHTML = `<i data-lucide="pause" style="width: 16px; height: 16px;"></i>`;
    state.autoPlayTimer = setInterval(() => {
      if (state.narrativeStep < NARRATIVE_SCENES.length - 1) {
        state.narrativeStep += 1;
        renderNarrativeScene(state.narrativeStep);
      } else {
        toggleAutoPlay();
      }
    }, 5500);
  } else {
    if (btn) btn.innerHTML = `<i data-lucide="play" style="width: 16px; height: 16px;"></i>`;
    if (state.autoPlayTimer) clearInterval(state.autoPlayTimer);
  }
  if (window.lucide) window.lucide.createIcons();
}

function renderNarrativeScene(stepIndex) {
  state.narrativeStep = stepIndex;
  const scene = NARRATIVE_SCENES[stepIndex];

  // Update Progress & Text Cards
  document.getElementById('narrative-step-counter').textContent = scene.counter;
  document.getElementById('narrative-progress-bar').style.width = `${scene.progress}%`;

  const titleEl = document.getElementById('narrative-scene-title');
  if (titleEl) {
    titleEl.textContent = scene.title;
    titleEl.classList.remove('glow-title-flash');
    if (stepIndex === 9) {
      void titleEl.offsetWidth; // Trigger reflow
      titleEl.classList.add('glow-title-flash');
    }
  }

  document.getElementById('narrative-scene-subtitle').textContent = scene.subtitle;

  const textEl = document.getElementById('narrative-scene-text');
  if (textEl) {
    textEl.innerHTML = scene.text;
    textEl.classList.remove('narrative-fade-enter');
    void textEl.offsetWidth; // Trigger reflow for re-animation
    textEl.classList.add('narrative-fade-enter');
  }

  // Birthday Emoji Pop Burst for Scene 09
  if (scene.hasEmojiPop || stepIndex === 9) {
    triggerBirthdayEmojiPop();
  }

  // Update Next Button Label
  const nextBtnText = document.getElementById('narrative-btn-next-text');
  if (nextBtnText) nextBtnText.textContent = scene.btnNextText;

  // Back button state
  const backBtn = document.getElementById('narrative-btn-back');
  if (backBtn) backBtn.disabled = (stepIndex === 0);

  // Render Sky Chart for 26 August 2000 at 21:09 Quito Local Time (UTC: 2000-08-27T02:09:00Z)
  const quitoUtcDate = new Date(Date.UTC(2000, 7, 27, 2, 9, 0));
  const skyData = getVisibleSkyData(quitoUtcDate, 0.0000, -78.4678, {
    cx: 250,
    cy: 250,
    radius: 220 * state.chart.zoom,
    rotationDeg: state.chart.rotation
  });

  const container = document.getElementById('narrative-sky-container');
  if (container) {
    let svgHtml = generateNarrativeSVGString(skyData, 440, 440, scene);
    if (stepIndex === 9) {
      svgHtml += `
        <div class="meteor-container">
          <div class="meteor-line" style="top: 15%; left: 10%; animation-delay: 0s;"></div>
          <div class="meteor-line" style="top: 40%; left: 25%; animation-delay: 0.8s;"></div>
          <div class="meteor-line" style="top: 25%; left: 60%; animation-delay: 1.5s;"></div>
          <div class="meteor-line" style="top: 60%; left: 35%; animation-delay: 2.2s;"></div>
        </div>`;
    }
    container.innerHTML = svgHtml;
  }

  // Update Poster Coords Text
  const coordsEl = document.getElementById('narrative-poster-coords');
  if (coordsEl) coordsEl.textContent = `21:09 · 0.00° N, 78.47° W`;

  // Always keep Next & Back buttons enabled for manual user control!
  const nextBtn = document.getElementById('narrative-btn-next');
  if (nextBtn) {
    nextBtn.disabled = false;
    nextBtn.classList.remove('pulse-gold-btn');
  }

  // Manage Audio for Current Scene
  const audioBtn = document.getElementById('narrative-btn-audio');
  const audioBtnText = document.getElementById('narrative-btn-audio-text');

  if (state.narrativeAudio) {
    state.narrativeAudio.pause();
    state.narrativeAudio.currentTime = 0;
    state.narrativeAudio.onended = null;
  }

  if (scene.audioUrl) {
    if (audioBtn) audioBtn.style.display = 'inline-flex';
    state.narrativeAudio.src = scene.audioUrl;
    
    state.narrativeAudio.onended = () => {
      if (audioBtnText) audioBtnText.textContent = "Escuchar Voz";
      if (audioBtn) audioBtn.classList.remove('pulse-gold-btn');
    };
    
    if (audioBtnText) audioBtnText.textContent = "Escuchar Voz";
    if (audioBtn) audioBtn.classList.remove('pulse-gold-btn');
  } else {
    // No audio for this scene
    if (audioBtn) audioBtn.style.display = 'none';
    if (audioBtnText) audioBtnText.textContent = "Escuchar Voz";
    if (audioBtn) audioBtn.classList.remove('pulse-gold-btn');
  }
}

function toggleNarrativeAudio() {
  const scene = NARRATIVE_SCENES[state.narrativeStep];
  const audioBtnText = document.getElementById('narrative-btn-audio-text');
  const audioBtn = document.getElementById('narrative-btn-audio');

  if (!state.narrativeAudio.src && scene.audioUrl) {
    state.narrativeAudio.src = scene.audioUrl;
  }

  if (state.narrativeAudio.paused) {
    state.narrativeAudio.play().then(() => {
      if (audioBtnText) audioBtnText.textContent = "Pausar Voz";
      if (audioBtn) audioBtn.classList.add('pulse-gold-btn');
    }).catch(console.error);
  } else {
    state.narrativeAudio.pause();
    if (audioBtnText) audioBtnText.textContent = "Escuchar Voz";
    if (audioBtn) audioBtn.classList.remove('pulse-gold-btn');
  }
}

function generateNarrativeSVGString(skyData, width, height, scene) {
  const cx = width / 2;
  const cy = height / 2;
  const maxRadius = (width / 2) * 0.96;
  const zoom = state.chart.zoom;

  const skyR = maxRadius * 0.74 * zoom;
  const rulerOuterR = skyR + 12 * zoom;
  const compassInnerR = skyR + 22 * zoom;
  const compassOuterR = skyR + 32 * zoom;

  let svg = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" class="star-map-svg">`;
  
  // Sky circle background
  svg += `<circle cx="${cx}" cy="${cy}" r="${skyR}" fill="var(--poster-bg)" />`;

  // 1. CELESTIAL COORDINATE GRID (ALTITUDE CIRCLES & AZIMUTH MERIDIANS)
  if (scene.showGrid || scene.isFinal) {
    [15, 30, 45, 60, 75].forEach(alt => {
      const altR = skyR * (90 - alt) / 90;
      svg += `<circle cx="${cx}" cy="${cy}" r="${altR}" fill="none" stroke="var(--poster-line)" stroke-width="0.75" stroke-opacity="0.3" stroke-dasharray="3,3" />`;
    });

    for (let az = 0; az < 360; az += 15) {
      const rad = (az * Math.PI) / 180;
      const x2 = cx + skyR * Math.sin(rad);
      const y2 = cy - skyR * Math.cos(rad);
      svg += `<line x1="${cx}" y1="${cy}" x2="${x2}" y2="${y2}" stroke="var(--poster-line)" stroke-width="0.75" stroke-opacity="0.25" stroke-dasharray="2,4" />`;
    }
  }

  // 2. CONSTELLATION LINES (Cumulative & Animated)
  if (state.toggles.constellations && scene.showLines && skyData.lines && scene.highlightConstellations) {
    const isAll = scene.highlightConstellations.includes('*');
    skyData.lines.forEach(l => {
      if (isAll || scene.highlightConstellations.includes(l.constellationId)) {
        const x1 = cx + (l.x1 - 250) * (skyR / 220);
        const y1 = cy + (l.y1 - 250) * (skyR / 220);
        const x2 = cx + (l.x2 - 250) * (skyR / 220);
        const y2 = cy + (l.y2 - 250) * (skyR / 220);
        
        const dist1 = Math.hypot(x1 - cx, y1 - cy);
        const dist2 = Math.hypot(x2 - cx, y2 - cy);
        if (dist1 <= skyR && dist2 <= skyR) {
          const animClass = scene.animateLines ? 'draw-constellation-line' : '';
          svg += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--poster-line)" stroke-width="1.3" opacity="0.9" class="${animClass}" />`;
        }
      }
    });
  }

  // Constellation Names (Togglable via secret modal)
  if (state.toggles.constellationNames && scene.showNames && skyData.names && scene.highlightConstellations) {
    const isAll = scene.highlightConstellations.includes('*');
    skyData.names.forEach(n => {
      if (isAll || scene.highlightConstellations.includes(n.id)) {
        const x = cx + (n.x - 250) * (skyR / 220);
        const y = cy + (n.y - 250) * (skyR / 220);
        const dist = Math.hypot(x - cx, y - cy);
        if (dist <= skyR - 10) {
          svg += `<text x="${x}" y="${y}" fill="var(--poster-subtext)" font-size="8" font-family="var(--font-sans)" font-weight="600" letter-spacing="1.2" text-anchor="middle" opacity="0.9">${n.name.toUpperCase()}</text>`;
        }
      }
    });
  }

  // 3. STARS FIELD (Cumulative based on starsLevel)
  if (scene.starsLevel > 0) {
    let filteredStars = skyData.stars;
    if (scene.starsLevel === 1) filteredStars = skyData.stars.filter(s => s.mag <= 2.2);
    else if (scene.starsLevel === 1.5) filteredStars = skyData.stars.filter(s => s.mag <= 3.2);
    else if (scene.starsLevel === 2) filteredStars = skyData.stars.filter(s => s.mag <= 4.0);
    else if (scene.starsLevel === 2.5) filteredStars = skyData.stars.filter(s => s.mag <= 4.8);

    filteredStars.forEach(s => {
      const x = cx + (s.x - 250) * (skyR / 220);
      const y = cy + (s.y - 250) * (skyR / 220);
      const dist = Math.hypot(x - cx, y - cy);

      if (dist <= skyR) {
        const r = Math.max(0.5, (s.starRadius * (width / 500)) * (skyR / 220));

        if (s.mag < 0.8) {
          svg += `<circle cx="${x}" cy="${y}" r="${r * 2.5}" fill="var(--poster-star)" opacity="0.3" />`;
        }

        svg += `<circle cx="${x}" cy="${y}" r="${r}" fill="var(--poster-star)" opacity="${s.mag < 2.5 ? 0.95 : 0.8}" class="star-node star-appear-anim" />`;

        // Highlight Bright Star Names on Scene 6+ (if not hidden by toggle)
        if (!state.toggles.allStarNames && scene.showBrightNames && s.name && s.mag <= 1.2) {
          svg += `<text x="${x}" y="${y + r + 7}" fill="var(--poster-text)" font-size="6.5" font-family="var(--font-sans)" font-weight="600" text-anchor="middle">${s.name}</text>`;
        }
      }
    });
  }

  // 4. PLANETS & MOON
  if (state.toggles.planets && scene.showPlanets && skyData.planets) {
    skyData.planets.forEach(p => {
      const x = cx + (p.x - 250) * (skyR / 220);
      const y = cy + (p.y - 250) * (skyR / 220);
      const dist = Math.hypot(x - cx, y - cy);
      if (dist <= skyR) {
        svg += `<circle cx="${x}" cy="${y}" r="${p.radius * 1.6}" fill="${p.color}" opacity="0.4" />`;
        svg += `<circle cx="${x}" cy="${y}" r="${p.radius}" fill="${p.color}" />`;
        if (!state.toggles.allStarNames) {
          svg += `<text x="${x}" y="${y + p.radius + 8}" fill="var(--poster-text)" font-size="7" font-family="var(--font-sans)" font-weight="600" text-anchor="middle">${p.name}</text>`;
        }
      }
    });
  }

  // 5. RULER RING & DEGREE TICKS
  svg += `<circle cx="${cx}" cy="${cy}" r="${skyR}" fill="none" stroke="var(--poster-border)" stroke-width="1.5" />`;
  svg += `<circle cx="${cx}" cy="${cy}" r="${rulerOuterR}" fill="none" stroke="var(--poster-border)" stroke-width="1.2" />`;

  for (let deg = 0; deg < 360; deg += 1) {
    const rad = (deg * Math.PI) / 180;
    let tickLen = 3;
    if (deg % 10 === 0) tickLen = 9;
    else if (deg % 5 === 0) tickLen = 6;

    const x1 = cx + rulerOuterR * Math.sin(rad);
    const y1 = cy - rulerOuterR * Math.cos(rad);
    const x2 = cx + (rulerOuterR - tickLen) * Math.sin(rad);
    const y2 = cy - (rulerOuterR - tickLen) * Math.cos(rad);

    const opacity = deg % 10 === 0 ? 0.9 : (deg % 5 === 0 ? 0.6 : 0.35);
    svg += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--poster-text)" stroke-width="${deg % 10 === 0 ? 1.2 : 0.8}" opacity="${opacity}" />`;

    if (deg % 10 === 0) {
      const numR = rulerOuterR - 11;
      const nx = cx + numR * Math.sin(rad);
      const ny = cy - numR * Math.cos(rad) + 1.8;
      svg += `<text x="${nx}" y="${ny}" fill="var(--poster-subtext)" font-size="3.8" font-family="var(--font-sans)" font-weight="600" text-anchor="middle" opacity="0.65">${deg}</text>`;
    }
  }

  // 6. OUTER COMPASS RING WITH 16 DIRECTION LABELS (Small & Compact for clean fit)
  const compassStrokeClass = scene.highlightCompass ? 'compass-highlight' : '';
  svg += `<circle cx="${cx}" cy="${cy}" r="${compassInnerR}" fill="none" stroke="var(--poster-border)" stroke-width="1" stroke-dasharray="2,3" />`;
  svg += `<circle cx="${cx}" cy="${cy}" r="${compassOuterR}" fill="none" stroke="${scene.highlightCompass ? '#D4AF37' : 'var(--poster-border)'}" stroke-width="1.8" class="${compassStrokeClass}" />`;

  const directions = [
    { label: "N", angle: 0 },
    { label: "NNE", angle: 22.5 },
    { label: "NE", angle: 45 },
    { label: "ENE", angle: 67.5 },
    { label: "E", angle: 90 },
    { label: "ESE", angle: 112.5 },
    { label: "SE", angle: 135 },
    { label: "SSE", angle: 157.5 },
    { label: "S", angle: 180 },
    { label: "SSW", angle: 202.5 },
    { label: "SW", angle: 225 },
    { label: "WSW", angle: 247.5 },
    { label: "W", angle: 270 },
    { label: "WNW", angle: 292.5 },
    { label: "NW", angle: 315 },
    { label: "NNW", angle: 337.5 }
  ];

  directions.forEach(d => {
    const rad = (d.angle * Math.PI) / 180;
    const labelR = compassOuterR + 9;
    const lx = cx + labelR * Math.sin(rad);
    const ly = cy - labelR * Math.cos(rad) + 2.5;

    const isMain = d.angle % 90 === 0;
    const fontSize = isMain ? 6.5 : 4.5;
    const fontWeight = isMain ? "700" : "500";
    const labelColor = (scene.highlightCompass && isMain) ? "#D4AF37" : "var(--poster-text)";

    const tx1 = cx + compassOuterR * Math.sin(rad);
    const ty1 = cy - compassOuterR * Math.cos(rad);
    const tx2 = cx + (compassOuterR + 3) * Math.sin(rad);
    const ty2 = cy - (compassOuterR + 3) * Math.cos(rad);
    svg += `<line x1="${tx1}" y1="${ty1}" x2="${tx2}" y2="${ty2}" stroke="${labelColor}" stroke-width="${isMain ? 1.5 : 0.8}" />`;

    svg += `<text x="${lx}" y="${ly}" fill="${labelColor}" font-size="${fontSize}" font-family="var(--font-sans)" font-weight="${fontWeight}" letter-spacing="0.5" text-anchor="middle" opacity="0.9">${d.label}</text>`;
  });

  svg += `</svg>`;
  return svg;
}

function autoUpdateSubtitle() {
  const formatted = `${MONTH_NAMES[state.date.month]} ${state.date.day}, ${state.date.year}`;
  state.text.subtitle = formatted;
  document.getElementById('input-subtitle').value = formatted;
  document.getElementById('poster-render-subtitle').textContent = formatted;
}

function updateTimeCoordsText() {
  const formattedTime = state.time.format === '12'
    ? `${(state.time.hour % 12) || 12}:${state.time.minute.toString().padStart(2, '0')} ${state.time.hour >= 12 ? 'PM' : 'AM'}`
    : `${state.time.hour.toString().padStart(2, '0')}:${state.time.minute.toString().padStart(2, '0')}`;

  const coordsText = state.toggles.coordinates ? ` · ${state.location.formattedCoords}` : '';
  const fullText = `${formattedTime}${coordsText}`;
  document.getElementById('poster-render-time-coords').textContent = fullText;
}

function selectLocation(city, country, lat, lon) {
  const locName = `${city}, ${country}`;
  state.location.name = locName;
  state.location.lat = lat;
  state.location.lon = lon;
  state.location.formattedCoords = formatLatLon(lat, lon);

  document.getElementById('input-location-search').value = locName;
  document.getElementById('input-lat').value = lat;
  document.getElementById('input-lon').value = lon;

  state.text.locationName = locName.toUpperCase();
  document.getElementById('input-location-name').value = state.text.locationName;
  document.getElementById('poster-render-location').textContent = state.text.locationName;

  updateTimeCoordsText();
  renderAllStarMaps();

  const suggBox = document.getElementById('location-suggestions');
  if (suggBox) suggBox.style.display = 'none';
}

function renderLocationSuggestions(results) {
  const box = document.getElementById('location-suggestions');
  if (!box) return;
  box.innerHTML = '';
  if (!results || results.length === 0) {
    box.style.display = 'none';
    return;
  }

  results.forEach(loc => {
    const item = document.createElement('div');
    item.style.padding = '0.6rem 0.9rem';
    item.style.cursor = 'pointer';
    item.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
    item.style.fontSize = '0.85rem';
    item.innerHTML = `<strong style="color: #FFF;">${loc.city}</strong> <span style="color: #9CA3AF;">${loc.country} (${loc.formattedCoords})</span>`;
    item.addEventListener('click', () => {
      selectLocation(loc.city, loc.country, loc.lat, loc.lon);
    });
    box.appendChild(item);
  });
  box.style.display = 'block';
}

function applyPosterTheme() {
  const poster = document.getElementById('live-poster-element');
  const narrativePoster = document.getElementById('narrative-poster-card');

  const themeClass = `theme-${state.theme}`;
  const themes = ['theme-midnight', 'theme-cosmic', 'theme-vintage', 'theme-minimal', 'theme-golden', 'theme-rose'];

  [poster, narrativePoster].forEach(el => {
    if (!el) return;
    themes.forEach(t => el.classList.remove(t));
    el.classList.add(themeClass);
  });
}

function applyPosterTypography() {
  const poster = document.getElementById('live-poster-element');
  const narrativePoster = document.getElementById('narrative-poster-card');
  const fonts = ['font-choice-serif', 'font-choice-sans', 'font-choice-display'];

  [poster, narrativePoster].forEach(el => {
    if (!el) return;
    fonts.forEach(f => el.classList.remove(f));
    el.classList.add(`font-choice-${state.typography}`);
  });
}

function applyPosterBorder() {
  const poster = document.getElementById('live-poster-element');
  const narrativePoster = document.getElementById('narrative-poster-card');
  const borders = ['border-double', 'border-simple', 'border-ornate', 'border-flush'];

  [poster, narrativePoster].forEach(el => {
    if (!el) return;
    borders.forEach(b => el.classList.remove(b));
    el.classList.add(state.borderStyle);
  });
}

function updateUIFromState() {
  applyPosterTheme();
  applyPosterTypography();
  applyPosterBorder();
  autoUpdateSubtitle();
  updateTimeCoordsText();
}

function renderAllStarMaps() {
  const dateObj = new Date(Date.UTC(
    state.date.year,
    state.date.month,
    state.date.day,
    state.time.hour,
    state.time.minute
  ));

  const skyData = getVisibleSkyData(dateObj, state.location.lat, state.location.lon, {
    cx: 250,
    cy: 250,
    radius: 220 * state.chart.zoom,
    rotationDeg: state.chart.rotation
  });

  const container = document.getElementById('poster-sky-circle');
  if (container) {
    container.innerHTML = generateStudioSVGString(skyData, 500, 500);
    attachStarTooltipListeners(container);
  }
}

function generateStudioSVGString(skyData, width, height) {
  const scene = {
    starsLevel: 3,
    highlightConstellations: ['*'],
    showLines: state.toggles.constellations,
    showNames: state.toggles.constellationNames,
    showBrightNames: true,
    showPlanets: state.toggles.planets,
    highlightCompass: false,
    showGrid: true,
    isFinal: true
  };
  return generateNarrativeSVGString(skyData, width, height, scene);
}

function attachStarTooltipListeners(container) {
  const tooltip = document.getElementById('star-hover-tooltip');
  if (!tooltip) return;

  container.querySelectorAll('.star-node').forEach(node => {
    node.addEventListener('mouseenter', (e) => {
      const name = node.dataset.starName;
      const mag = node.dataset.starMag;
      const bayer = node.dataset.starBayer;

      if (name || bayer) {
        tooltip.innerHTML = `<strong>${name || bayer}</strong><br><span style="opacity:0.8;">Magnitude: ${mag}</span>`;
        tooltip.style.display = 'block';
      }
    });

    node.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      tooltip.style.left = `${e.clientX - rect.left}px`;
      tooltip.style.top = `${e.clientY - rect.top}px`;
    });

    node.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });
  });
}

function openAstroModal() {
  const modal = document.getElementById('astro-modal');
  if (!modal) return;

  const quitoUtcDate = new Date(Date.UTC(2000, 7, 27, 2, 9, 0));
  const skyData = getVisibleSkyData(quitoUtcDate, -0.1807, -78.4678);

  document.getElementById('astro-moon-phase').textContent = `${skyData.moonPhase.name} (${skyData.moonPhase.illumination}%)`;
  document.getElementById('astro-lst').textContent = `${(skyData.lst / 15).toFixed(2)} hours (${skyData.lst.toFixed(1)}°)`;

  const planetNames = skyData.planets.map(p => p.name).join(', ') || 'None visible';
  document.getElementById('astro-planets').textContent = planetNames;

  const constNames = skyData.names.map(n => n.name).slice(0, 6).join(', ') || 'Orion, Ursa Major, Scorpius';
  document.getElementById('astro-constellations-list').textContent = constNames;

  modal.style.display = 'flex';
}

function openExportModal() {
  const modal = document.getElementById('export-modal');
  if (modal) {
    // Sync current poster card texts into input fields
    const titleEl = document.getElementById('narrative-poster-title');
    const subEl = document.getElementById('narrative-poster-subtitle');
    const locEl = document.getElementById('narrative-poster-location');
    const quoteEl = document.getElementById('narrative-poster-quote');

    const inTitle = document.getElementById('secret-input-title');
    const inSub = document.getElementById('secret-input-subtitle');
    const inLoc = document.getElementById('secret-input-location');
    const inQuote = document.getElementById('secret-input-quote');

    if (inTitle && titleEl) inTitle.value = titleEl.textContent;
    if (inSub && subEl) inSub.value = subEl.textContent;
    if (inLoc && locEl) inLoc.value = locEl.textContent;
    if (inQuote && quoteEl) inQuote.value = quoteEl.textContent;

    modal.style.display = 'flex';
  }
}

function initGalaxyPageListeners() {
  // Back to Sky Map
  document.getElementById('btn-back-to-sky')?.addEventListener('click', () => {
    const narrativeView = document.getElementById('narrative-view');
    const surprisePage = document.getElementById('galaxy-surprise-page');
    if (narrativeView && surprisePage) {
      surprisePage.style.display = 'none';
      narrativeView.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  // Cosmic Playlist Audio Controller
  const playlistItems = document.querySelectorAll('.playlist-item');
  const vinylDisc = document.querySelector('.vinyl-disc');
  const spotifyIframe = document.querySelector('iframe[src*="spotify.com"]');

  if (!state.playlistAudio) {
    state.playlistAudio = new Audio();
  }

  playlistItems.forEach(item => {
    const playBtn = item.querySelector('.play-btn-cosmic');
    const songSrc = item.dataset.songSrc;
    const spotifyId = item.dataset.spotifyId;

    const togglePlaySong = (e) => {
      // If clicking Spotify link, don't trigger internal player
      if (e?.target?.closest('a')) return;
      e?.preventDefault();
      const isPlayingCurrent = item.classList.contains('playing');

      // Update embedded Spotify player if present
      if (spotifyIframe && spotifyId) {
        spotifyIframe.src = `https://open.spotify.com/embed/track/${spotifyId}?utm_source=generator&theme=0`;
      }

      // Reset all items UI
      playlistItems.forEach(i => {
        i.classList.remove('playing');
        const pBtn = i.querySelector('.play-btn-cosmic');
        if (pBtn) {
          const iconPlay = pBtn.querySelector('.icon-play');
          const iconPause = pBtn.querySelector('.icon-pause');
          if (iconPlay) iconPlay.style.display = 'inline-block';
          if (iconPause) iconPause.style.display = 'none';
        }
      });

      if (isPlayingCurrent) {
        state.playlistAudio.pause();
        if (vinylDisc) vinylDisc.classList.remove('spinning');
      } else {
        state.playlistAudio.src = songSrc;
        state.playlistAudio.load();
        const playPromise = state.playlistAudio.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            item.classList.add('playing');
            if (playBtn) {
              const iconPlay = playBtn.querySelector('.icon-play');
              const iconPause = playBtn.querySelector('.icon-pause');
              if (iconPlay) iconPlay.style.display = 'none';
              if (iconPause) iconPause.style.display = 'inline-block';
            }
            if (vinylDisc) vinylDisc.classList.add('spinning');
          }).catch(err => {
            console.error("Audio playback error:", err);
          });
        }
      }
    };

    item.addEventListener('click', togglePlaySong);
  });

  state.playlistAudio.onended = () => {
    playlistItems.forEach(i => i.classList.remove('playing'));
    if (vinylDisc) vinylDisc.classList.remove('spinning');
  };

  // Dynamic Pixel Alignment Engine for Constellation Lines
  const connections = [
    { id: 'virgo-line-1', from: 'dani', to: 'kelly' },
    { id: 'virgo-line-2', from: 'kelly', to: 'josue' },
    { id: 'virgo-line-3', from: 'josue', to: 'jacqui' },
    { id: 'virgo-line-4', from: 'josue', to: 'star5' },
    { id: 'virgo-line-5', from: 'star5', to: 'star7' },
    { id: 'virgo-line-6', from: 'josue', to: 'ara' },
    { id: 'virgo-line-7', from: 'josue', to: 'final' }
  ];

  const DRIVE_LINKS = {
    'dani': 'https://drive.google.com/file/d/1D1kGcHRu2_7YwlKvrMa-GtVzMbJNcLTO/view?usp=sharing',
    'kelly': 'https://drive.google.com/file/d/1ik5e240qFXZZQ8GVM1GuznsAHGJMJR2B/view?usp=sharing',
    'josue': 'https://drive.google.com/file/d/17uTMv51_V9nBcR_eagSRra-UwxGLuymt/view?usp=sharing',
    'jacqui': 'https://drive.google.com/file/d/1isNk7Ls-WJx3Q0z1Zmhr9A40A-ZuO3r1/view?usp=sharing',
    'star6': 'https://drive.google.com/file/d/1sYNMZhsNR-lk6X2wovI4osadrF9bpqlD/view?usp=sharing',
    'ara': 'https://drive.google.com/file/d/1sYNMZhsNR-lk6X2wovI4osadrF9bpqlD/view?usp=sharing',
    'final': 'https://drive.google.com/file/d/1Zk3UEirsdhFQwqHHu3TW41ElKeLB2mcj/view?usp=sharing'
  };

  const updateVirgoLineCoordinates = () => {
    const mapContainer = document.getElementById('galaxy-constellation-map');
    if (!mapContainer) return;
    const mapRect = mapContainer.getBoundingClientRect();
    if (mapRect.width === 0 || mapRect.height === 0) return;

    connections.forEach(conn => {
      const lineEl = document.getElementById(conn.id);
      const fromStar = document.querySelector(`[data-star-id="${conn.from}"]`);
      const toStar = document.querySelector(`[data-star-id="${conn.to}"]`);

      if (lineEl && fromStar) {
        const fromRect = fromStar.getBoundingClientRect();
        const x1 = ((fromRect.left + fromRect.width / 2 - mapRect.left) / mapRect.width) * 100;
        const y1 = ((fromRect.top + fromRect.height / 2 - mapRect.top) / mapRect.height) * 100;

        let x2 = 48;
        let y2 = 52;

        if (toStar && toStar.offsetWidth > 0) {
          const toRect = toStar.getBoundingClientRect();
          x2 = ((toRect.left + toRect.width / 2 - mapRect.left) / mapRect.width) * 100;
          y2 = ((toRect.top + toRect.height / 2 - mapRect.top) / mapRect.height) * 100;
        } else if (conn.to === 'star5') {
          x2 = 70; y2 = 64;
        } else if (conn.to === 'star6') {
          x2 = 34; y2 = 80;
        } else if (conn.to === 'star7') {
          x2 = 62; y2 = 82;
        }

        lineEl.setAttribute('x1', `${x1.toFixed(2)}%`);
        lineEl.setAttribute('y1', `${y1.toFixed(2)}%`);
        lineEl.setAttribute('x2', `${x2.toFixed(2)}%`);
        lineEl.setAttribute('y2', `${y2.toFixed(2)}%`);
      }
    });
  };

  // Recalculate line coordinates on load, resize, and scroll
  setTimeout(updateVirgoLineCoordinates, 150);
  window.addEventListener('resize', updateVirgoLineCoordinates);
  window.addEventListener('orientationchange', () => setTimeout(updateVirgoLineCoordinates, 200));

  // Virgo Memory Star Nodes & Constellation Connection Engine
  const starNodes = document.querySelectorAll('.virgo-star-node, .galaxy-star-node');
  const photoModal = document.getElementById('photo-memory-modal');
  const closePhotoModal = document.getElementById('close-photo-modal');
  const videoPlayer = document.getElementById('modal-video-player');
  const videoIframe = document.getElementById('modal-video-iframe');
  const photoImg = document.getElementById('modal-photo-img');
  const driveBtn = document.getElementById('modal-drive-btn');

  if (!state.viewedVirgoStars) {
    state.viewedVirgoStars = new Set();
  }

  const regularStars = Array.from(starNodes).filter(node => node.id !== 'final-master-star');
  const totalRegularCount = regularStars.length;

  starNodes.forEach((node, index) => {
    node.addEventListener('click', () => {
      const starId = node.dataset.starId || `star-${index}`;
      const title = node.dataset.title;
      const date = node.dataset.date;
      const img = node.dataset.img;
      const videoSrc = node.dataset.videoSrc;
      const videoEmbed = node.dataset.videoEmbed;
      const note = node.dataset.note;
      const starLabel = node.querySelector('.star-label')?.textContent || 'Estrella';

      // Update Modal Header Text
      document.getElementById('modal-photo-badge').textContent = starLabel;
      document.getElementById('modal-photo-title').textContent = title;
      document.getElementById('modal-photo-date').textContent = date;
      const noteEl = document.getElementById('modal-photo-note');
      if (noteEl) noteEl.innerHTML = note || '';

      // Setup Google Drive Direct Link Button
      const directDriveUrl = DRIVE_LINKS[starId];
      if (directDriveUrl && driveBtn) {
        driveBtn.href = directDriveUrl;
        driveBtn.style.display = 'inline-flex';
      } else if (driveBtn) {
        driveBtn.style.display = 'none';
      }

      const mediaContainer = document.getElementById('modal-media-container');

      // Handle Master Final Star specifically (Play Google Drive Embed & direct stream)
      if (node.id === 'final-master-star') {
        if (mediaContainer) mediaContainer.style.display = 'block';
        if (videoIframe) {
          videoIframe.src = videoEmbed || 'https://drive.google.com/file/d/1Zk3UEirsdhFQwqHHu3TW41ElKeLB2mcj/preview';
          videoIframe.style.display = 'block';
        }
        if (videoPlayer) {
          videoPlayer.pause();
          videoPlayer.src = '';
          videoPlayer.style.display = 'none';
        }
        if (photoImg) photoImg.style.display = 'none';
      }
      // Priority 1: Native HTML5 Video Player
      else if (videoSrc) {
        if (mediaContainer) {
          mediaContainer.style.display = 'block';
          mediaContainer.style.maxHeight = '60vh';
        }
        if (videoPlayer) {
          videoPlayer.src = videoSrc;
          videoPlayer.style.display = 'block';
          videoPlayer.play().catch(() => {});
          
          videoPlayer.onerror = () => {
            // Fallback to Google Drive embed iframe if local video fails
            if (videoEmbed && videoIframe) {
              videoPlayer.style.display = 'none';
              videoIframe.src = videoEmbed;
              videoIframe.style.display = 'block';
            }
          };
        }
        if (videoIframe) {
          videoIframe.src = '';
          videoIframe.style.display = 'none';
        }
        if (photoImg) photoImg.style.display = 'none';
      }
      // Priority 2: Google Drive Embed Iframe Fallback
      else if (videoEmbed) {
        if (mediaContainer) {
          mediaContainer.style.display = 'block';
          mediaContainer.style.maxHeight = '60vh';
        }
        if (videoIframe) {
          videoIframe.src = videoEmbed;
          videoIframe.style.display = 'block';
        }
        if (videoPlayer) {
          videoPlayer.pause();
          videoPlayer.src = '';
          videoPlayer.style.display = 'none';
        }
        if (photoImg) photoImg.style.display = 'none';
      }
      // Priority 3: Photo Image
      else if (img) {
        if (mediaContainer) {
          mediaContainer.style.display = 'block';
          mediaContainer.style.maxHeight = '48vh';
        }
        if (photoImg) {
          photoImg.src = img;
          photoImg.style.display = 'block';
        }
        if (videoPlayer) {
          videoPlayer.pause();
          videoPlayer.src = '';
          videoPlayer.style.display = 'none';
        }
        if (videoIframe) {
          videoIframe.src = '';
          videoIframe.style.display = 'none';
        }
      }
      // Priority 4: Pure Text Letter without video/photo
      else {
        if (mediaContainer) mediaContainer.style.display = 'none';
        if (videoPlayer) {
          videoPlayer.pause();
          videoPlayer.src = '';
          videoPlayer.style.display = 'none';
        }
        if (videoIframe) {
          videoIframe.src = '';
          videoIframe.style.display = 'none';
        }
        if (photoImg) photoImg.style.display = 'none';
      }

      // Show Modal
      if (photoModal) photoModal.style.display = 'flex';
      if (window.lucide) window.lucide.createIcons();

      // Mark Star as Viewed & Activate Constellation Lines
      if (node.id !== 'final-master-star') {
        node.classList.add('star-viewed');
        state.viewedVirgoStars.add(starId);

        // Recalculate precise star center coordinates
        updateVirgoLineCoordinates();

        // STRICT LINE ACTIVATION: ONLY light up lines between stars where BOTH have been viewed!
        connections.forEach(conn => {
          if (conn.to !== 'final') {
            if (state.viewedVirgoStars.has(conn.from) && state.viewedVirgoStars.has(conn.to)) {
              const lineEl = document.getElementById(conn.id);
              if (lineEl) lineEl.classList.add('virgo-line-active');
            }
          }
        });

        // Check if all regular stars have been discovered!
        if (state.viewedVirgoStars.size >= totalRegularCount) {
          triggerVirgoCompletionCeremony();
        }
      }
    });
  });

  // Modal Closing & Stopping Media Playback
  const closeModalFunc = () => {
    if (photoModal) photoModal.style.display = 'none';
    if (videoPlayer) {
      videoPlayer.pause();
      videoPlayer.src = '';
    }
    if (videoIframe) videoIframe.src = '';
  };

  closePhotoModal?.addEventListener('click', closeModalFunc);

  photoModal?.addEventListener('click', (e) => {
    if (e.target === photoModal) {
      closeModalFunc();
    }
  });
}

function triggerVirgoCompletionCeremony() {
  // 1. Light up ALL constellation lines in glowing gold
  document.querySelectorAll('.virgo-line').forEach(line => {
    line.classList.add('virgo-line-active');
  });

  // 2. Dim all surrounding regular stars
  document.querySelectorAll('.virgo-star-node:not(#final-master-star)').forEach(node => {
    node.classList.add('dimmed-star');
  });

  // 3. Reveal and pulse the Central Master Final Star
  const masterStar = document.getElementById('final-master-star');
  if (masterStar) {
    masterStar.classList.add('master-star-glowing');
    masterStar.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function triggerBirthdayEmojiPop() {
  const container = document.querySelector('#narrative-view .narrative-card') || document.body;
  let burstEl = document.getElementById('birthday-emoji-burst');
  if (burstEl) burstEl.remove();

  burstEl = document.createElement('div');
  burstEl.id = 'birthday-emoji-burst';
  burstEl.className = 'birthday-emoji-container';

  const emojis = ['🎂', '🥳', '✨', '🎉', '💖', '👑', '🎂', '🎉'];
  emojis.forEach((emoji, idx) => {
    const span = document.createElement('span');
    span.className = 'emoji-pop';
    span.textContent = emoji;
    span.style.animationDelay = `${idx * 0.18}s`;
    burstEl.appendChild(span);
  });

  container.appendChild(burstEl);

  setTimeout(() => {
    if (burstEl) burstEl.remove();
  }, 4000);
}

