import headingTwig from './headings/_heading.twig';
import headingData from './headings/headings.yml';

import paragraphTwig from './text/paragraph.twig';
import paragraphData from './text/paragraph.yml';

import blockquoteTwig from './text/blockquote.twig';
import blockquoteData from './text/blockquote.yml';

// import miscTwig from './miscellaneous/_miscellaneous.twig';
// import miscData from './miscellaneous/miscellaneous.yml';

/**
 * StoryBook Definition
 */
export default { title: 'Atoms/Text' };

/**
 * All pages must have a logical, descending heading structure that doesn't skip levels.
 * Each page should have a <code>&lt;h1&gt;</code> as the main page title. It should describe what the page is about.
 * <ul>
 *  <li>Use only one <code>&lt;h1&gt;</code> per page.</li>
 *  <li>Use <code>&lt;h2&gt;</code> for sections of content and for modal headings.</li>
 *  <li>Use <code>&lt;h3&gt;</code> for subsections.</li>
 *  <li>Don't skip heading levels.</li>
 * </ul>
 */
export const headings = {
  name: 'Headings',
  // decorators: [(story) => `<div class="a-decorator">${story()}</div>`],
  render: (args) => headingTwig(args),
  args: {
    headings: headingData.headings,
  },
};

/**
 * StoryBook Definition
 */
// export const misc = {
//   name: 'Miscellaneous',
//   // decorators: [(story) => `<div class="a-decorator">${story()}</div>`],
//   render: (args) => miscTwig(args),
//   args: {
//     items: miscData.miscellaneous,
//   },
// };

/**
 * Paragraphs are to be used for regular body text.
 *
 */
export const paragraphs = () => paragraphTwig(paragraphData);

/**
 * Use blockquotes to draw attention to a particular piece of text, e.g. -
 * <ul>
 *  <li>Use only one <code>&lt;h1&gt;</code> per page.</li>
 *  <li>Use <code>&lt;h2&gt;</code> for sections of content and for modal headings.</li>
 *  <li>Use <code>&lt;h3&gt;</code> for subsections.</li>
 *  <li>Don't skip heading levels.</li>
 * </ul>
 *    when you quote someone -or-
 *    wish to highlight an important peice of text from a longer body of text
 */
export const quotesCallout = {
  name: 'Quotes (Callout)',
  // decorators: [(story) => `<div class="a-decorator">${story()}</div>`],
  render: (args) => blockquoteTwig(args),
  // args: { ...blockquoteData.quotes.callout },
  args: {
    quote: blockquoteData.quotes.callout,
  },
  argTypes: {
    align: {
      // name: 'Custom Name', // use this to have a custom name for it
      options: ['left', 'center'],
      control: { type: 'select' },
      default: 'left',
    },
    kind: {
      // control: false,
      table: {
        disable: true,
      },
    },
    color: {
      // control: false,
      // control: {
      //   type: {},
      // },
      table: {
        disable: true,
      },
    },
  },
};

export const quotesInline = {
  name: 'Quotes (Inline)',
  // decorators: [(story) => `<div class="a-decorator">${story()}</div>`],
  render: (args) => blockquoteTwig(args),
  // args: { ...blockquoteData.quotes.inline },
  args: {
    quote: blockquoteData.quotes.inline,
  },
  argTypes: {
    align: {
      table: {
        disable: true,
      },
    },
    kind: {
      // control: false,
      table: {
        disable: true,
      },
    },
    color: {
      options: ['orange', 'blue', 'teal'],
      control: { type: 'select' },
      default: 'orange',
    },
  },
};

export const quotesPull = {
  name: 'Quotes (Pull Quote)',
  // decorators: [(story) => `<div class="a-decorator">${story()}</div>`],
  render: (args) => blockquoteTwig(args),
  // args: { ...blockquoteData.quotes.pull },
  args: {
    quote: blockquoteData.quotes.pullquote,
  },
  argTypes: {
    align: {
      // control: false,
      table: {
        disable: true,
      },
    },
    kind: {
      // control: false,
      table: {
        disable: true,
      },
    },
    color: {
      // control: false,
      // control: {
      //   type: {},
      // },
      table: {
        disable: true,
      },
    },
    cite: {
      // control: false,
      table: {
        disable: true,
      },
    },
  },
};
