/**
 * Author: Tim Vervoort - info@timvervoort.com
 * Licence: Free for commercial use
 * Last update: 2nd May 2018 - v1.2.3
 */
$('document').ready(function() {

  // Make gallery objects clickable
  $('.fs-gal').click(function() {
    fsGal_DisplayImage($(this));
  });

  // Display gallery
  function fsGal_DisplayImage(obj) {

    // Clear navigation buttons
    $('.fs-gal-view > .fs-gal-prev').fadeOut();
    $('.fs-gal-view > .fs-gal-next').fadeOut();

    // Set current image
    var title = obj.attr('alt');
    if (!title || title == '') { title = obj.attr('title'); }
    $('.fs-gal-view > h1').text(title);
    if (!title || title == '') { $('.fs-gal-view > h1').fadeOut(); }
    else { $('.fs-gal-view > h1').fadeIn(); }
    var img = obj.attr('data-url');
    $('.fs-gal-view').css('background-image', 'url('+img+')');

    // Create buttons
    var current = $('.fs-gal').index(obj);
    var prev = current - 1;
    var next = current + 1;
    if (prev >= 0) {
      $('.fs-gal-view > .fs-gal-prev').attr('data-img-index', prev);
      $('.fs-gal-view > .fs-gal-prev').fadeIn();
    }
    if (next < $('.fs-gal').length) {
      $('.fs-gal-view > .fs-gal-next').attr('data-img-index', next);
      $('.fs-gal-view > .fs-gal-next').fadeIn();
    }
    $('.fs-gal-view').fadeIn(); // Display gallery
    if (current == $('.fs-gal').length - 1)  { // Last image
        $('.fs-gal-view > .fs-gal-next').attr('data-img-index', 0);
        $('.fs-gal-view > .fs-gal-next').fadeIn();
    }
    else if (current == 0)  { // Last image
        $('.fs-gal-view > .fs-gal-prev').attr('data-img-index', $('.fs-gal').length - 1);
        $('.fs-gal-view > .fs-gal-next').fadeIn();
    }
  }

  // Gallery navigation
  $('.fs-gal-view .fs-gal-nav').click(function() {
    var index = $(this).attr('data-img-index');
    var img = $($('.fs-gal').get(index));
    fsGal_DisplayImage(img);
  });

  // Close gallery
  $('.fs-gal-view .fs-gal-close').click(function() {
    $('.fs-gal-view').fadeOut();
  });

  // Keyboard navigation
  $('body').keydown(function(e) {
    if (e.keyCode == 37) {
      $('.fs-gal-view .fs-gal-prev').click(); // Left arrow
    }
    else if(e.keyCode == 39) { // right
      $('.fs-gal-view .fs-gal-next').click(); // Right arrow
    }
    else if(e.keyCode == 27) { // right
      $('.fs-gal-view .fs-gal-close').click(); // ESC
    }
  });

  $('.fs-gal-view').on('swipeleft', function() {
    $('.fs-gal-view .fs-gal-next').click(); // Next img
  });
  $('.fs-gal-view').on('swiperight', function() {
    $('.fs-gal-view .fs-gal-prev').click(); // Previous img
  });
  $('.fs-gal-view').on('swipedown', function() {
    $('.fs-gal-view .fs-gal-close').click(); // Close gallery
  });
  $('.fs-gal-view').on('swipeup', function() {
    $('.fs-gal-view .fs-gal-close').click(); // Close gallery
  });

  ///TODO
  ///Preload images

});