import mainMenuTwig from './main-menu/main-menu.twig';
import footerMenuTwig from './main-menu/fmain-menu.twig';
import menuData from './menus.yml';

// Import component JS
import './main-menu/main-menu';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Menu',
  parameters: {
    // layout: 'padded',
    layout: 'fullscreen',
  },
};

// Primary/Site Navigation Menu
export const HeaderNav = {
  title: 'Molecules/Menu/Header Nav',
  // decorators: [(story) => `<div style="margin: 2em 0;">${story()}</div>`],
  render: (args) => mainMenuTwig(args),
  args: {
    menu: menuData.header,
  },
};

export const FooterNav = {
  title: 'Molecules/Menu/Footer Nav',
  decorators: [(story) => `<div style="margin: 2em 0;">${story()}</div>`],
  render: (args) => footerMenuTwig(args),
  args: {
    menu: menuData.footer,
  },
};
