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


  //Close popup by click
   $('.b-model__close-btn').click(function () {
       closePopup();
   });

   //Close popup by press Escape
  document.onkeydown = function(evt) {
      evt = evt || window.event;
      var isEscape = false;
      if ("key" in evt) {
          isEscape = (evt.key == "Escape" || evt.key == "Esc");
      } else {
          isEscape = (evt.keyCode == 27);
      }
      if (isEscape) {
          console.log("ESC");
          closePopup();
      }
  };

    //Close popup by clicking in non-popup area
    $('.b-modal').click(function () {
        closePopup();
    }).children().click(function (e) {
        return false;
    });

  function closePopup() {
      console.log("close");

      $('.b-model__close-btn')
          .parents('.b-modal')
          .removeClass('active');

      document.location.hash = '';
  }
})();