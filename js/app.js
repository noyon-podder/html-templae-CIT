
$('.testimonial-active').slick({
    infinite: true,
    speed: 1000,
    centerMode: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 4,
    autoplaySpeed: 4000,  
    responsive: [
      {
        breakpoint: 1100,
        settings: {
            centerMode: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


// scroll to top button 

document.addEventListener("DOMContentLoaded", function() {

    let scrollTOTopBtn = document.querySelector('.scroll-top')
  
    window.addEventListener("scroll", function() {
      // Show or hide the button based on the scroll position
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTOTopBtn.classList.add("open");
      } else {
        scrollTOTopBtn.classList.remove("open");
      }
    });
  
    scrollToTopBtn.addEventListener("click", function() {
      // Scroll to the top with smooth animation
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  });
  