$(function() {
  $(document).foundation();

  $('.slick-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    accessibility: true,
    autoplay: true,
    arrows: true,
    pauseOnHover: true
  });
});
