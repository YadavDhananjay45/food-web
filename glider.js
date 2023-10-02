new Glider(document.querySelector(".glider"), {
  // Mobile-first defaults
  slidesToShow: 1,
  slidesToScroll: 1,
  scrollLock: true,
  draggable: true,
  dragVelocity: 1.2,
  dots: ".dots",
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 768,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 3,
        slidesToScroll: 1,
        scrollLock: true,
        draggable: true,
        dragVelocity: 1.5,
      },
    },
    {
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        scrollLock: true,
        draggable: true,
        dragVelocity: 1.5,
      },
    },
  ],
});
