import tilesTwig from './tiles.twig';
import tilesImageData from '../../../01-atoms/images/image/image.yml';

/**
 * Storybook definition
 */
export default {
  title: 'Organisms/Collections/Tiles',
  argTypes: {
    images: {
      table: {
        disable: true,
      },
    },
  },
};

export const single = {
  name: 'Single Tile',
  decorators: [
    (story) =>
      `<div style="display: flex; justify-content: center; flex-wrap: wrap;">${story()}</div>`,
  ],
  render: (args) => tilesTwig(args),
  args: {
    images: tilesImageData.images.tiles.single,
  },
};

export const double = {
  name: 'Double Tiles',
  decorators: [
    (story) =>
      `<div style="display: flex; justify-content: center; flex-wrap: wrap;">${story()}</div>`,
  ],
  render: (args) => tilesTwig(args),
  args: {
    images: tilesImageData.images.tiles.double,
  },
};

export const triple = {
  name: 'Triple Tiles',
  decorators: [
    (story) =>
      `<div style="display: flex; justify-content: center; flex-wrap: wrap;">${story()}</div>`,
  ],
  render: (args) => tilesTwig(args),
  args: {
    images: tilesImageData.images.tiles.triple,
  },
};

export const quadruple = {
  name: 'Quadruple Tiles',
  decorators: [
    (story) =>
      `<div style="display: flex; justify-content: center; flex-wrap: wrap;">${story()}</div>`,
  ],
  render: (args) => tilesTwig(args),
  args: {
    images: tilesImageData.images.tiles.quadruple,
  },
};
