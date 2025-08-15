// twig template files for different layouts
import fullWidthLayoutTwig from './template-full-width.twig';

/**
 * Storybook definition
 */
export default {
  title: 'Templates/Layouts',
  parameters: {
    layout: 'fullscreen',
  },
};

export const fullWidthTemplate = {
  name: 'Full Width',
  // decorators: [(story) => `<div class='a-decorator'>${story()}</div>`],
  render: (args) => fullWidthLayoutTwig(args),
  args: {},
};
