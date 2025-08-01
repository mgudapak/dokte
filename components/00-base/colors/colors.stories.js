import colorsTwig from './colors.twig';
import colorsData from './colors.yml';
import './colors'; // JS

/**
 * Color is the most powerful tool in creating or expressing a mood or feeling.
 * Color is what brings our brand to life. Our color palette is inspired by the
 * communities we serve, and sampled from artwork, textiles, and local
 * environments. It is bold and bright and inspires hope.
 */
export default {
  title: 'Base/Color',
};

export const ColorPalettes = () => colorsTwig(colorsData);
