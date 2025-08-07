// @TODO: eventually we should load SlickJS in this component NOT globally
import slick from 'slick-carousel';
import carouselTwig from './carousel.twig';
import carouselData from '../../../02-molecules/card/card.yml';
import './carousel';

/**
 * Multiple cards or statistics can be grouped together into "Collections".
 * These collections can then be displayed in a "Grid" or a "Carousel".
 */
export default {
  title: 'Organisms/Collections/Carousel',
  parameters: {
    layout: 'centered',
  },
};

export const carouselCollection = {
  name: 'Collections - Carousel',
  // decorators: [(story) => `<div class="a-decorator">${story()}</div>`],
  render: (args) => carouselTwig(args, slick),
  args: { stats: carouselData.statistics },
  argTypes: {
    stats: {
      table: {
        disable: true,
      },
    },
  },
};
