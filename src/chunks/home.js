if (!window.$) {
  window.$ = window.jQuery = require('jquery');
}

require('flexslider');

$(function() {
  $(".home-slider").flexslider({
    animation: "slide",
  });
});
