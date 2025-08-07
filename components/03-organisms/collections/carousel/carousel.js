/* eslint-disable no-console */
/* eslint-disable no-param-reassign */

((Drupal, $) => {
  Drupal.behaviors.carousel = {
    attach: () => {
      const removeCarouselAtWidth = '1200';

      // carousel settings
      const settings = {
        dots: true,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        responsive: [
          {
            breakpoint: removeCarouselAtWidth,
            settings: 'unslick',
          },
        ],
      };

      // Initialize the (mobile-only) carousel
      $('#stat-carousel').slick(settings);

      /**
       * The 'mobileFirst' and 'responsive' settings are responsible for
       * 1) only showing the carousel below 1024px
       * 2) destroying the carousel at 1024px or above
       *
       * However, once the carousel has been either destroyed or
       * not initialized at all, slick will NOT reinitialize it
       * even if the browser is resized to below 1024px.
       * So, we need to manually do it using a resize handler.
       */
      $(window).on('resize', () => {
        if (
          $(window).width() < removeCarouselAtWidth &&
          // Using .not('slick-initialized') to ensure
          // we don't initialize the carousel twice
          !$('#stat-carousel').hasClass('slick-initialized')
        ) {
          $('#stat-carousel').slick(settings);
        }
      });
    },
  };
})(Drupal, window.jQuery);
