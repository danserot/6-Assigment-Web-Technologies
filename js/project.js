$(document).ready(function () {
  // Task 11: keep one accordion panel open and update its button state.
  $('.accordion-trigger').on('click', function () {
    var button = $(this);
    var panel = $('#' + button.attr('aria-controls'));
    var wasOpen = button.attr('aria-expanded') === 'true';

    $('.accordion-trigger').not(button).attr('aria-expanded', 'false').find('span').text('+');
    $('.accordion-panel').not(panel).stop(true, true).slideUp(250);

    button.attr('aria-expanded', String(!wasOpen));
    button.find('span').text(wasOpen ? '+' : '−');
    panel.stop(true, true).slideToggle(250);
  });
});
