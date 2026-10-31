import brandData from '../brand.json';
import imageManifest from '../image-manifest.json';
import comparisonsData from '../comparisons.json';
import botanicalsData from '../botanicals.json';
import malaysiaStatesData from '../malaysia-states.json';
import guidesData from '../guides.json';
import horsemenProduct from './horsemen.json';
import hammerOfThorProduct from './hammer-of-thor.json';
import growXlProduct from './grow-xl.json';
import magnumPumpXrProduct from './magnum-pump-xr.json';

export const allProducts = [
  horsemenProduct,
  hammerOfThorProduct,
  growXlProduct,
  magnumPumpXrProduct,
] as const;

export const productsById: Record<string, typeof horsemenProduct> = {
  'horsemen': horsemenProduct,
  'hammer-of-thor': hammerOfThorProduct,
  'grow-xl': growXlProduct,
  'magnum-pump-xr': magnumPumpXrProduct,
};

export {
  brandData,
  imageManifest,
  comparisonsData,
  botanicalsData,
  malaysiaStatesData,
  guidesData,
  horsemenProduct,
  hammerOfThorProduct,
  growXlProduct,
  magnumPumpXrProduct,
};
