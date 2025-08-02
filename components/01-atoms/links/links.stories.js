import linkExampleTwig from './link-example.twig';
import linkData from './link.yml';

/**
 * Links are used as navigational elements. They navigate users to another location, such as a different site, resource, or section within the same page.
 */
export default { title: 'Atoms/Links' };

export const linkExample = () => linkExampleTwig(linkData);
// export const linkExample = () => linkTwig(linkData.links.link);
// export const linkWithIcon = () => link(linkData.links.linkWithIcon);
