$(document).ready(function () {
  function resetSquare(selector) {
    $(selector).stop(true, true).css({ left: 0, top: 0, width: 65, height: 65, opacity: 1 });
  }

  // Task 8: one animation changes size and horizontal position.
  $('#run-basic').on('click', function () {
    resetSquare('#basic-square');
    $('#basic-square').animate({ left: 150, width: 95, height: 95 }, 650);
  });
  $('#reset-basic').on('click', function () { resetSquare('#basic-square'); });

  // Task 9: jQuery queues these calls in the order they are written.
  $('#run-sequence').on('click', function () {
    resetSquare('#sequence-square');
    $('#sequence-square')
      .animate({ left: 150 }, 350)
      .animate({ top: 80 }, 350)
      .animate({ width: 40, height: 40 }, 350)
      .animate({ left: 0, top: 0, width: 65, height: 65 }, 450);
  });
  $('#reset-sequence').on('click', function () { resetSquare('#sequence-square'); });

  // Task 10: several properties change at the same time in one call.
  $('#run-combined').on('click', function () {
    resetSquare('#combined-square');
    $('#combined-square').animate({ left: 150, top: 65, width: 100, height: 100, opacity: 0.4 }, 750);
  });
  $('#reset-combined').on('click', function () { resetSquare('#combined-square'); });
});
