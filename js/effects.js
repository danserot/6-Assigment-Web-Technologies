$(document).ready(function () {
  // Task 2: these methods change visibility immediately.
  $('#hide-text').on('click', function () { $('#visibility-text').hide(); });
  $('#show-text').on('click', function () { $('#visibility-text').show(); });
  $('#toggle-text').on('click', function () { $('#visibility-text').toggle(); });

  // Task 3: stop the current effect so rapid clicks remain predictable.
  $('#fade-in').on('click', function () { $('#fade-image').stop(true, true).fadeIn(400); });
  $('#fade-out').on('click', function () { $('#fade-image').stop(true, true).fadeOut(400); });
  $('#fade-toggle').on('click', function () { $('#fade-image').stop(true, true).fadeToggle(400); });

  // Task 4: the same idea with vertical sliding.
  $('#slide-up').on('click', function () { $('#slide-panel').stop(true, true).slideUp(400); });
  $('#slide-down').on('click', function () { $('#slide-panel').stop(true, true).slideDown(400); });
  $('#slide-toggle').on('click', function () { $('#slide-panel').stop(true, true).slideToggle(400); });
});
