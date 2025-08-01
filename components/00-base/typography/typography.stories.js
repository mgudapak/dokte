// Import the Twig file.
import typeTwig from './typography.twig';

// Import the data file.
import typeData from './typography.yml';

/**
  A typeface tells a story beyond the words on the screen. How it’s used plays
  a vital role in how our users experience our content, brand, and overall
  digital presence.
*/
export default {
  title: 'Base/Typography',
  // component: typography,
  // decorators: [],
  // parameters: {},
};

export const TypeExample = () => typeTwig(typeData);
