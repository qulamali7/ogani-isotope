
const btn = document.querySelector(".accordion-title");
const text = document.querySelector(".text");

btn.addEventListener("click", function () {
    text.classList.toggle("active")
})

// init Isotope
var $grid = $('.product-cards').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
// btn.forEach((element, i) => {
//     element.addEventListener("click", function () {
//       text[i].classList.toggle("active");
//     });
//   });