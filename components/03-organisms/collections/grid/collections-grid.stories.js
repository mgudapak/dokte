import gridCollectionTwig from './collections-grid.twig';
import gridData from '../../../02-molecules/card/card.yml';

// import listCollectionTwig from './list-collection.twig';

/**
 * Multiple cards or statistics can be grouped together into "collections".
 * These collections can then be displayed in a "Grid" or a "Carousel".
 */
export default {
  title: 'Organisms/Collections/Grid',
  parameters: {
    layout: 'centered',
  },
};

/**
 * A collection of cards or statistics can be displayed in a layout that
 * resembles a "grid". The distinuguising aspects of a grid are that
 *
 * - "all" of its contained elements are displayed at the same time
 * - no single item is of importance when compared to the others
 * - the elements in the grid are arranged horizontally on large screens
 *   and stacked vertically on small screens
 * - they should be a minimum of 2 elements/instances
 * - while we have no restriction on the maximum - it does get crowded beyond 6
 * - always aim to have a multiple of 2 elements in the collection.
 */

export const gridCollection = {
  name: 'Collections - Grid',
  // decorators: [(story) => `<div class="a-decorator">${story()}</div>`],
  render: (args) => gridCollectionTwig(args),
  args: { cards: gridData.cards },
  argTypes: {
    cards: {
      table: {
        disable: true,
      },
    },
  },
};
