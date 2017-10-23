"use strict";

(function () {
  $('.rest pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });

  $('.rest-nav__item').click(function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });

  function turnMenuItemById(id) {
    $('.rest-nav__link[href$="' + id + '"]')
      .parent()
      .addClass('active')
      .siblings()
      .removeClass('active');
  }

  $(window).bind('hashchange', function() {
    var hash = document.location.hash;
    var element = $(hash);
    var parents = element.parents(":hidden");  

    turnMenuItemById(hash);  

    $.each(parents, function(index, parent) {
      var id = $(parent).attr('id');

      if (id) {
        turnMenuItemById(id);
      }
    });

    parents
      .addClass('active')
      .siblings()
      .removeClass('active');

    element
      .siblings()
      .removeClass('active');

    element.addClass('active');
  });

  $(window).trigger('hashchange');


  $('.b-model__close-btn').click(function() {
    $(this)
      .parents('.b-modal')
      .removeClass('active');

    document.location.hash = '';
  });
})();