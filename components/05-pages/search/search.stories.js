import searchPageTwig from './search-page.twig';
import searchData from './search-data.yml';
import imageData from '../../01-atoms/images/image/image.yml';

/**
 * Storybook definition
 */
export default {
  title: 'Pages/Search Results',
  parameters: {
    layout: 'fullscreen',
  },
};

export const searchExample = {
  name: 'Search Results',
  // decorators: [(story) => `<div class="a-decorator">${story()}</div>`],
  render: (args) => searchPageTwig(args),
  args: {
    results: searchData.results,
    // hero = articleImageData.images.article.hero
    images: imageData.images.search_results,
  },
};
