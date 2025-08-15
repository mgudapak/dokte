import articleTwig from './article-page.twig';
import articleData from './article-data.yml';
import articleImageData from '../../01-atoms/images/image/image.yml';
import navMenuData from '../../03-organisms/navigation/navs.yml';
import quotesData from '../../01-atoms/text/text/blockquote.yml';

/**
 * Storybook definition
 */
export default {
  title: 'Pages/Article',
  parameters: {
    layout: 'fullscreen',
  },
};

export const article = {
  name: 'Article/Blog Post',
  // decorators: [(story) => `<div class="a-decorator">${story()}</div>`],
  render: (args) => articleTwig(args),
  args: {
    content: articleData.article,
    images: {
      hero: articleImageData.images.article.hero,
      embeds: {
        single: articleImageData.images.tiles.single,
        double: articleImageData.images.tiles.double,
        triple: articleImageData.images.tiles.triple,
        quadruple: articleImageData.images.tiles.quadruple,
      },
    },
    quote_inline: {
      quote: quotesData.quotes.inline,
    },
    quote_pullquote: {
      quote: quotesData.quotes.pullquote,
    },
    // temporarily disabled below menus by renaming (added leading _)
    // to the object props (header_menu and footer_menu)
    // @TODO: we should improve this piece of code + logic
    _header_menu: navMenuData.header,
    _footer_menu: navMenuData.footer,
  },
  argTypes: {
    content: {
      // control: false,
      table: {
        disable: true,
      },
    },
    images: {
      // control: false,
      table: {
        disable: true,
      },
    },
    _header_menu: {
      // control: false,
      table: {
        disable: true,
      },
    },
    _footer_menu: {
      // control: false,
      table: {
        disable: true,
      },
    },
    quote_inline: {
      // control: false,
      table: {
        disable: true,
      },
    },
    quote_pullquote: {
      // control: false,
      table: {
        disable: true,
      },
    },
  },
};
