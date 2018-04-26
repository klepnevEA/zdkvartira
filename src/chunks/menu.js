if (!window.$) {
    window.$ = window.jQuery = require('jquery');
}
$('.hamburger').on('click', function () {
$('.navbar-nav').slideToggle();
})
