/**
 * Curated list of popular global cities for instant lookup
 */

export const POPULAR_LOCATIONS = [
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

export function formatLatLon(lat, lon) {
  const latDir = lat >= 0 ? 'N' : 'S';
  const lonDir = lon >= 0 ? 'E' : 'W';
  const absLat = Math.abs(lat).toFixed(2);
  const absLon = Math.abs(lon).toFixed(2);
  return `${absLat}° ${latDir}, ${absLon}° ${lonDir}`;
}
