new Glider(document.querySelector(".glider"), {
  slidesToShow: 1,
  slidesToScroll: 1,
  scrollLock: true,
  draggable: true,
  dragVelocity: 1.2,
  rewind: true,
  dots: ".dots",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        scrollLock: true,
        draggable: true,
        dragVelocity: 1.5,
        rewind: true,
        itemWidth: 200,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        scrollLock: true,
        draggable: true,
        dragVelocity: 1.5,
        rewind: true,
      },
    },
  ],
});
