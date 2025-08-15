import ourApproachTwig from './our-approach.twig';
import ourApproachData from './our-approach-data.yml';

/**
 * Storybook definition
 */
export default { title: 'Pages/Our Approach' };

export const article = () => ourApproachTwig(ourApproachData);
