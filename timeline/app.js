var $ = jQuery.noConflict();
window.onload = () => {
  if ($('.company-timeline-year').length) {
    $('.timeline-date .date').html(function (i, html) {
      var chars = $.trim(html).split('');
      return '<span>' + chars.join('</span><span>') + '</span>';
    });
  }
};

window.onscroll = (e) => {
  $('.company-timeline-block').each(function (event) {
    var $this = $(this);
    var tar_off =
      $('.company-timeline-list').height() +
      parseInt($('.company-timeline-list').css('top')) -
      $('.company-timeline-year').height();
    var this_off = $(this).offset().top - tar_off;
    var win_scroll = $(window).scrollTop();
    if (
      win_scroll > this_off &&
      win_scroll < this_off + $('.company-timeline-year').height()
    ) {
      $this.addClass('active');
      var curr_index = $this.index();
      $('.timeline-date')
        .eq(curr_index)
        .addClass('animate')
        .siblings()
        .removeClass('animate');
    }
  });
};
