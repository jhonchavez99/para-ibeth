/**
 * PDF, PNG, and SVG Export Service
 * Generates high-resolution print ready posters.
 */

export async function exportPosterAsPDF(posterElement, options = {}) {
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

export async function exportPosterAsPNG(posterElement, filename = 'Stellar-Moment-StarMap.png') {
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

export function exportPosterAsSVG(svgElement, filename = 'Stellar-Moment-StarMap.svg') {
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
