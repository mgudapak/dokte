import buttonTwig from './button.twig';
// import { Title } from '@storybook/addon-docs';

/**
 * Buttons and controls help users to interact with our interfaces.
 * They provide a tangible way to submit forms, move between pages,
 * display calls-to-action, and trigger various functionalities.
 *
 * Because buttons can be used for many purposes, it's important to use the right tag.
 * <ul>
 *  <li>Use the &lt;a&gt; tag if the button is a link to another page, or a link to an anchor within a page. Generally anchors don't require JavaScript to work.</li>
 *  <li>Use the &lt;button&gt; tag if the button performs an action that changes something on the current page. &lt;button&gt; elements almost always require JavaScript to function.</li>
 * </ul>
 */
// Required - default export
export default {
    title: 'Atoms/Buttons',
    component: 'button',
    decorators: [(story) => `<div style="margin: 2em;">${story()}</div>`],
    argTypes: {
        label: {
            name: 'Label',
            control: 'text',
            default: 'Click Me',
        },
        color: {
            name: 'Color',
            options: ['default', 'orange', 'blue', 'teal'],
            control: { type: 'select' },
            default: 'default',
        },
        // size: {
        //   name: 'Size',
        //   control: { type: 'radio' },
        //   options: ['small', 'medium', 'large'],
        //   default: 'medium',
        // },
    },
    // these are default settings for all Stories
    args: {
        // primary: true,
        label: 'Click Here',
        // size: 'medium',
        color: 'default',
    },
    // tags: [ '!autodocs' ], // disable autodocs at Story level
    // parameters: {
    //     docs: {
    //         page: () => <>
    //             <Title></Title>
    //         </>
    //     },
    // },
};

// Stories - one or more named export(s)
export const Button = (args) => buttonTwig({ ...args });
