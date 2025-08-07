import cardTwig from './card.twig';
import cardData from './card.yml';

/**
 * Cards present content with calls to action in a concise yet engaging style. They help us organize information to facilitate user comprehension and engagement with PIH’s story and work.
 *
 *
 */
export default {
  title: 'Molecules/Card',
  parameters: {
    layout: 'centered',
  },
};

export const Generic = () =>
  cardTwig({
    card__data: cardData.card.generic,
  });

export const FullBleed = () =>
  cardTwig({
    card__data: cardData.card.fullbleed,
  });

export const Statistic = () =>
  cardTwig({
    card__data: cardData.card.statistic,
  });

export const ArticleTeaser = () =>
  cardTwig({
    card__data: {},
    card__variant: 'article_teaser',
    article__data: cardData.article['related-articles']['related-1'],
  });
