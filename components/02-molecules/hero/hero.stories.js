import heroTwig from './hero.twig';
import heroData from './hero.yml';
import imageData from '../../01-atoms/images/image/image.yml';

// import the JS library
// refer to https://www.emulsify.info/blog/adding-a-js-library-to-an-emulsify-component-in-drupal
// for more info/explanation
import './hero';

export default {
  title: 'Molecules/Hero',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    hero__headline: {
        name: 'Headline',
    },
    hero__attributes: {
        table: {
            disable: true,
        },
    },
    hero__subheadline: {
        name: 'Subhead',
    },
    hero__button1_text: {
        name: 'Primary Button Label',
        default: 'Donate Now',
    },
    hero__button2_text: {
        name: 'Secondary Button Label',
    },
    hero__button1_url: {
        table: {
            disable: true,
        },
    },
    hero__button2_url: {
        table: {
            disable: true,
        },
    },
    image_srcset: {
        table: {
            disable: true,
        },
    },
    image_sizes: {
        table: {
            disable: true,
        },
    },
    image_src: {
        table: {
            disable: true,
        },
    },
    image_alt: {
        table: {
            disable: true,
        },
    },
    image_title: {
        table: {
            disable: true,
        },
    },
    output_image_tag: {
        table: {
            disable: true,
        },
    },
    image_subject_position: {
        table: {
            disable: true,
        },
    },
    image_href: {
        table: {
            disable: true,
        },
    },

  },
  args: {
    ...heroData.hero_subject_centered,
    ...imageData.images.hero_subject_centered,
  },
};

export const heroSubjectCentered = (args) =>
//   heroTwig({
//     hero_data: heroData.hero_subject_centered,
//     hero_media: imageData.images.hero_subject_centered,
//   });
    heroTwig({
        ...args,
    });

export const heroSubjectRight = (args) =>
//   heroTwig({
//     hero_data: heroData.hero_subject_to_right,
//     hero_media: imageData.images.hero_subject_to_right,
//   });
    heroTwig({
        ...args,
    });
heroSubjectRight.args = {
    ...heroData.hero_subject_to_right,
    ...imageData.images.hero_subject_to_right,
};

export const heroSubjectLeft = (args) =>
  heroTwig({
    ...args,
  });
heroSubjectLeft.args = {
    ...heroData.hero_subject_to_left,
    ...imageData.images.hero_subject_to_left,
};
