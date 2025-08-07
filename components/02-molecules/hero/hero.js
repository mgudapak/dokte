/* eslint-disable no-console */
Drupal.behaviors.hero = {
  attach(context) {
    console.log('In hero.js - Attached Context....');

    function positionTextOverlay() {
      // the element we wish to reposition
      const textOverlay = document.querySelector(
        '.hero-text-overlay.subject-left',
      );
      const viewportWidth = window.visualViewport.width;

      // do this only when the LARGE (1024px) breakpoint is hit
      if (viewportWidth >= 1024) {
        // textOverlay starts off at the middle (1024/2) when viewport is LARGE
        const initialX = '512';

        // the furthest the textOverlay can be from the right edge
        const maxRightMargin = 150;

        // 'subHeadline' is the widest of the hero text overlay elements
        const subHeadline = context.querySelector('.hero-sub-headline');
        const subHeadlineWidth = parseInt(
          window.getComputedStyle(subHeadline).width,
          10,
        );

        if (viewportWidth / 2 > subHeadlineWidth + maxRightMargin) {
          textOverlay.style.left = `${
            viewportWidth - (subHeadlineWidth + maxRightMargin)
          }px`;
        } else {
          // stay put
          textOverlay.style.left = `${initialX}px`;
        }
      } else {
        textOverlay.style.left = '0';
      }
    }

    window.addEventListener('load', function onWindowLoad() {
      console.log('In hero.js - Document Loaded....');

      // add resize listener only if we have a left-aligned image subject
      if (document.querySelector('.hero-text-overlay.subject-left')) {
        const viewportWidth = window.visualViewport.width;

        // execute every time we resize
        window.addEventListener('resize', positionTextOverlay);

        // just once, execute after initial load incase of large breakpoint
        if (viewportWidth >= 1024) {
          positionTextOverlay();
        }
      }
    });
  },
};
