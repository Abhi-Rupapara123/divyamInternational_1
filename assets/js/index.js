var btn = document.querySelector(".toggle");
      var btnst = true;

      // Toggle button functionality
      btn.onclick = function () {
        if (btnst === true) {
          // Open the modal and disable scrolling on the rest of the page
          document.querySelector(".toggle span").classList.add("toggle");
          document.getElementById("sidebar").classList.add("sidebarshow");
          document.body.classList.add("body-overlay"); // Add overlay effect
          btnst = false;
        } else if (btnst === false) {
          // Close the modal and re-enable scrolling on the rest of the page
          document.querySelector(".toggle span").classList.remove("toggle");
          document.getElementById("sidebar").classList.remove("sidebarshow");
          document.body.classList.remove("body-overlay"); // Remove overlay effect
          btnst = true;
        }
      };

      // Close button functionality
      var closeBtn = document.querySelector(".modal-header .close");
      closeBtn.onclick = function () {
        // Close the modal and re-enable scrolling on the rest of the page
        document.getElementById("sidebar").classList.remove("sidebarshow");
        document.body.classList.remove("body-overlay"); // Remove overlay effect
        btnst = true;
      };

      // Close modal if clicked outside of it
      window.onclick = function (event) {
        var modal = document.getElementById("sidebar");
        if (event.target === modal) {
          modal.classList.remove("sidebarshow");
          document.body.classList.remove("body-overlay");
          btnst = true;
        }
      };


      const wrapper = document.querySelector(".wrapper");
      const carousel = document.querySelector(".carousel");
      const firstCardWidth = carousel.querySelector(".card").offsetWidth;
      const arrowBtns = document.querySelectorAll(".wrapper i");
      const carouselChildrens = [...carousel.children];

      let isDragging = false,
        isAutoPlay = true,
        startX,
        startScrollLeft,
        timeoutId;

      // Get the number of cards that can fit in the carousel at once
      let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

      // Insert copies of the last few cards to beginning of carousel for infinite scrolling
      carouselChildrens
        .slice(-cardPerView)
        .reverse()
        .forEach((card) => {
          carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
        });

      // Insert copies of the first few cards to end of carousel for infinite scrolling
      carouselChildrens.slice(0, cardPerView).forEach((card) => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
      });

      // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.offsetWidth;
      carousel.classList.remove("no-transition");

      // Add event listeners for the arrow buttons to scroll the carousel left and right
      arrowBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          carousel.scrollLeft +=
            btn.id == "left" ? -firstCardWidth : firstCardWidth;
        });
      });

      const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        // Records the initial cursor and scroll position of the carousel
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
      };

      const dragging = (e) => {
        if (!isDragging) return; // if isDragging is false return from here
        // Updates the scroll position of the carousel based on the cursor movement
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
      };

      const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
      };

      const infiniteScroll = () => {
        // If the carousel is at the beginning, scroll to the end
        if (carousel.scrollLeft === 0) {
          carousel.classList.add("no-transition");
          carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
          carousel.classList.remove("no-transition");
        }
        // If the carousel is at the end, scroll to the beginning
        else if (
          Math.ceil(carousel.scrollLeft) ===
          carousel.scrollWidth - carousel.offsetWidth
        ) {
          carousel.classList.add("no-transition");
          carousel.scrollLeft = carousel.offsetWidth;
          carousel.classList.remove("no-transition");
        }

        // Clear existing timeout & start autoplay if mouse is not hovering over carousel
        clearTimeout(timeoutId);
        if (!wrapper.matches(":hover")) autoPlay();
      };

      const autoPlay = () => {
        if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
        // Autoplay the carousel after every 2500 ms
        timeoutId = setTimeout(
          () => (carousel.scrollLeft += firstCardWidth),
          2500
        );
      };
      autoPlay();

      carousel.addEventListener("mousedown", dragStart);
      carousel.addEventListener("mousemove", dragging);
      document.addEventListener("mouseup", dragStop);
      carousel.addEventListener("scroll", infiniteScroll);
      wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
      wrapper.addEventListener("mouseleave", autoPlay);


      $(document).ready(function () {
        // Tab changing functionality
        $(".tab-item").on("click", function () {
          // Remove active class from all tab items and content
          $(".tab-item").removeClass("active");
          $(".content-inner").hide();

          // Add active class to the clicked tab item
          $(this).addClass("active");

          // Get the index of the clicked tab
          var index = $(this).index();

          // Show the corresponding content
          $(".content-inner").eq(index).show();
        });

        // Initialize Owl Carousel
        $(".owl-carousel").owlCarousel({
          items: 1, // Number of items to display
          loop: true, // Loop the items
          nav: true, // Show next/prev buttons
          dots: false, // Hide dots
          autoplay: true, // Enable autoplay
          autoplayTimeout: 3000, // Autoplay timeout in milliseconds
          autoplayHoverPause: true, // Pause on hover
        });
      });


      jQuery.noConflict();
      jQuery(document).ready(function($) {
        $('.circle-slider').slick({
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          centerMode: true,
          variableWidth: true
        });
      });
