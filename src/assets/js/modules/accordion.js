/* accordion */
$(document).ready(function () {
  const $accordion = $('.main__information');

  $accordion.on('click', function (event) {
    event.preventDefault();

    $accordion.each(function (i, elem) {
      $(elem).removeClass('main__information--active');
    });

    $(event.target).toggleClass('main__information--active');
  });
});
