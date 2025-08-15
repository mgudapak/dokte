import sectionPlaceholderTwig from './placeholder-section.twig';

/**
 * Storybook Definition.
 */
export default { title: 'Templates/Placeholders' };

export const section = {
  name: 'Section',
  // decorators: [(story) => `<div class='a-decorator'>${story()}</div>`],
  render: () => sectionPlaceholderTwig(),
};
