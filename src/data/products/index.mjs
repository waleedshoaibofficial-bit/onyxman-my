import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataRoot = path.resolve(__dirname, '..');

function readJson(relPath) {
  const fullPath = path.resolve(dataRoot, relPath);
  return JSON.parse(fs.readFileSync(fullPath, 'utf8'));
}

export const brandData = readJson('brand.json');
export const imageManifest = readJson('image-manifest.json');
export const comparisonsData = readJson('comparisons.json');
export const botanicalsData = readJson('botanicals.json');
export const malaysiaStatesData = readJson('malaysia-states.json');
export const guidesData = readJson('guides.json');

export const horsemenProduct = readJson('products/horsemen.json');
export const hammerOfThorProduct = readJson('products/hammer-of-thor.json');
export const growXlProduct = readJson('products/grow-xl.json');
export const magnumPumpXrProduct = readJson('products/magnum-pump-xr.json');

export const allProducts = [
  horsemenProduct,
  hammerOfThorProduct,
  growXlProduct,
  magnumPumpXrProduct,
];

export const productsById = {
  'horsemen': horsemenProduct,
  'hammer-of-thor': hammerOfThorProduct,
  'grow-xl': growXlProduct,
  'magnum-pump-xr': magnumPumpXrProduct,
};

export function getProductBySlug(slug) {
  const normalized = String(slug || '').replace(/-malaysia$/, '').trim();
  return productsById[normalized] || allProducts.find((p) => p.id === normalized || p.slug === slug) || null;
}

export function loadAllVaults() {
  return {
    brand: brandData,
    imageManifest,
    products: allProducts,
    productsById,
    comparisons: comparisonsData,
    botanicals: botanicalsData,
    states: malaysiaStatesData,
    guides: guidesData,
  };
}

export default loadAllVaults;
