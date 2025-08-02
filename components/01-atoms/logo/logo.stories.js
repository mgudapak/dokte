import logoTwig from './logo.twig';
// import logoData from './logo.yml';

/**
 * The PIH Logo can be rendered in 3 different variations -
 *
 * <ul>
 *  <li>The mark by itself</li>
 *  <li>The mark with the name of our organization</li>
 *  <li>The mark with the name of our organization and our tagline</li>
 * </ul>
 *
 * Use case scenarios for these variations will be shortly added to this component.
 */
export default {
  title: 'Atoms/Logo',
};

export const Mark = () =>
  logoTwig({
    logo__modifiers: 'only-mark',
  });

export const Logo = () => logoTwig();

export const LogoWithTagline = () =>
  logoTwig({
    logo__modifiers: 'with-tagline',
    logo__tagline: 'Injustice has a cure',
  });
