/* accordion */
$(document).ready(function () {
  const $accordion = $('.main__information');

  $accordion.on('click', function (event) {
    event.preventDefault();
    $accordion.toggleClass('main__information--active');
  });
});
