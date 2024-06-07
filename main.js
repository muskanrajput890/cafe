$(document).ready(function(){
  // Initialize the carousel
  $("#blog-carousel").carousel();

  // Toggle the navbar collapse
  $(".navbar-toggler").click(function(){
    $("#navbarNav").collapse("toggle");
  });
});



 //  carousel
  $(document).ready(function(){
   $(".owl-carousel").owlCarousel({
      loop: true,
    autoplay: true,
     autoplayTimeout: 3000,
     autoplayHoverPause: true,
     responsive:{
      0:{
         items:1
      },
       600:{
        items:2
      },
       1000:{
         items:3
       }
     }
   });
 });

 

