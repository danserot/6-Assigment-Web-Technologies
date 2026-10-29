$(document).ready(function () {
  // Task 5: build one safe text node, then place it at the chosen end.
  var nextItem = 1;
  function makeItem() {
    var item = $('<li>');
    item.text('New item ' + nextItem);
    nextItem += 1;
    return item;
  }

  $('#append-item').on('click', function () { $('#item-list').append(makeItem()); });
  $('#prepend-item').on('click', function () { $('#item-list').prepend(makeItem()); });
  $('#remove-item').on('click', function () { $('#item-list li').last().remove(); });

  // Task 6: .attr() reads the current source and writes the replacement.
  $('#change-image').on('click', function () {
    var image = $('#switch-image');
    var isMountain = image.attr('src') === 'assets/mountain.svg';
    image.attr('src', isMountain ? 'assets/coast.svg' : 'assets/mountain.svg');
    image.attr('alt', isMountain ? 'Illustrated coastline' : 'Illustrated mountain landscape');
  });

  $('#change-link').on('click', function () {
    var link = $('#switch-link');
    var isApi = link.attr('href') === 'https://api.jquery.com/';
    link.attr('href', isApi ? 'https://releases.jquery.com/' : 'https://api.jquery.com/');
    link.text(isApi ? 'Visit the jQuery CDN' : 'Read the jQuery API');
  });

  // Task 7: read both inputs on every edit. .text() keeps user input as text.
  $('#live-form').on('submit', function (event) { event.preventDefault(); });
  $('#name-input, #email-input').on('input', function () {
    $('#name-output').text($('#name-input').val() || '—');
    $('#email-output').text($('#email-input').val() || '—');
  });
});
