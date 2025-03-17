/* Menu Open Function S */
function openNav() {
    document.getElementById("menu").style.left = "0";
    document.getElementById("menu__open").style.display = "none";
    document.getElementById("menu__close").style.display = "inline-block";
    $("body").addClass('menu_overlap');
  }
  /* Menu Open Function E */
  
  /* Menu Close Function S */
  function closeNav() {
    document.getElementById("menu").style.left = "-250px";
    document.getElementById("menu__open").style.display = "inline-block";
    document.getElementById("menu__close").style.display = "none";
    $("body").removeClass('menu_overlap');
    $(".menu .is-open").removeClass("is-close");
  }
  /* Menu Close Function E */
  
  /* Responsive Class Add S */
  $( document ).ready(function() {
    $(".menu ul li").find("ul").before('<span class="is-open"></span>');
    $(".menu ul li").find("ul").parent("li").addClass("is-open-a");
    $(".menu .is-open").click(function(event) {
        event.preventDefault();
        $(this).toggleClass("is-close");
    });
  });
  /* Responsive Class Add E */

  /* Hide Header on on scroll down S */    
  $(document).scroll(function (e){
    var scroll = $(window).scrollTop();
      if (scroll > $('header').height()) {
       $('header').addClass('mobile-stick');
      }else {
       $('header').removeClass('mobile-stick');
      }
      if (scroll > 100) {
           $('header').addClass('fadeInDown');
          }
          else {    
           $('header').removeClass('fadeInDown');
      }
  });
/* Hide Header on on scroll down E */

// count number start
let a = 0;
$(window).scroll(function () {
  let oTop = $("#counter").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".counter").each(function () {
      let $this = $(this);
      jQuery({ Counter: -1 }).animate(
        { Counter: $this.text() },
        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.ceil(this.Counter));
          },
        }
      );
    });
    a = 1;
  }
});
// count number end

// faq js start
let question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if(active && active !== question ) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if(question.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})
// faq js end

// aos singel time js start 
$(window).on("load",function(){
  AOS.init({
      duration: 900,
      disable: 'mobile',
      offset: 50,
      startEvent: 'DOMContentLoaded',
      delay: 0,
      once: true,        
  });
  $(window).on('load', function () {
      AOS.refresh();
  });

  $(window).on("blur", function () {
      AOS.refresh();
  });
});
// aos singel time js end