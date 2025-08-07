import crumbTwig from './breadcrumb.twig';
import crumbData from './breadcrumb.yml';

/**
 * A breadcrumb, or breadcrumb trail, is a navigational aid displaying either a hierarchy of the current page in relation to the site' s structure, from top level to current page, or a list of the links the user followed to get to the current page, in the order visited. (Source: <a href="" target="_blank">MDN Web Docs</a>)
 *
 */
export default {
  title: 'Molecules/Breadcrumb',
  // parameters: {
  //   layout: 'centered',
  // },
};

export const Crumb = () =>
  crumbTwig({
    crumb__data: crumbData.breadcrumbs.example1,
  });
