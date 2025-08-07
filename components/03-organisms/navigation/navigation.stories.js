import headerTwig from './header-nav.twig';
import footerTwig from './footer-nav.twig';
import navData from './navs.yml';

/**
 * Storybook definition
 */
export default { title: 'Organisms/Navigation' };

export const headerNav = {
  name: 'Header Nav',
  // decorators: [(story) => `<div class='a-decorator'>${story()}</div>`],
  render: (args) => headerTwig(args),
  args: {
    header_menu: navData.header,
  },
};

export const footerNav = {
  name: 'Footer Nav',
  // decorators: [(story) => `<div class='a-decorator'>${story()}</div>`],
  render: (args) => footerTwig(args),
  args: {
    footer_menu: navData.footer,
  },
};
