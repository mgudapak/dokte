import badgeTwig from './badge.twig';
import badgeData from './badge.yml';

/**
 * Badges are elements used to label different items, create categorization, filter data, select or deselect options using keywords that describe them.
 */
export default {
  title: 'Molecules/Badge',
  argTypes: {
    content: {
      table: {
        disable: true,
      },
    },
    badges: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export const single = {
  name: 'Badge',
  decorators: [
    (story) =>
      `<div style="margin-left: auto; margin-right: auto; display: flex; align-items: center; flex-wrap: wrap; gap: 8px;">${story()}</div>`,
  ],
  render: (args) => badgeTwig(args),
  args: {
    badges: badgeData.badges,
  },
};
