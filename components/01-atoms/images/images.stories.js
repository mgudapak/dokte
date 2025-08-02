import imageTwig from './image/responsive-image.twig';
import imageData from './image/image.yml';
// import figureTwig from './image/figure.twig';
// import figureData from './image/figure.yml';
// import iconTwig from './icons/icons.twig';

/**
 * Image (both static and moving) is a vital element that helps internal and
 * external audiences connect to our mission—inviting people to see the world
 * as it is and as it can be.
 *
 * Our images reflect how we approach our work and the qualities we find
 * in the people we serve: bright, open, collaborative.
 * Showing resilient patients, clinicians and families, strong partnerships,
 * and empowered communities gives clarity and meaning to our work.
 */
export default {
  title: 'Atoms/Images',
  // args: { theme: 'dark' },
  parameters: {
    layout: 'fullscreen',
  },
};

export const fullBleed = () => imageTwig(imageData.images.full_bleed);

export const maxContentWidth = () =>
  imageTwig(imageData.images.max_content_width);

export const articleHero = {
  decorators: [
    (story) =>
      `<div style="display: flex; justify-content: center;">${story()}</div>`,
  ],
  render: () => imageTwig(imageData.images.article_hero),
};

export const inline = {
  decorators: [
    (story) =>
      `<div style="display: flex; justify-content: center; margin-top: 1em;">${story()}</div>`,
  ],
  render: () => imageTwig(imageData.images.inline_captioned),
};
