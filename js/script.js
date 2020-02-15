$(window).on("load", function() {
  $(".loader .inner").fadeOut(450, function() {
    //primeiro desaparece o gif e depois o background
    $(".loader").fadeOut(600);
  });
});

$(document).ready(function() {
  //FUNCAO DO CAROUSEL DAS TECHNICAL SKILLS

  $(".owl-carousel").owlCarousel({
    loop: true,
    //margin:10,
    nav: true,
    items: 4,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      960: {
        items: 4
      }
    }
  });

  //var da FUNCAO QUE CONTROLA QUANDO A ANIMAÇAO DAS TECHNICAL SKILLS INICIA E O QUE FAZ

  var skillsTopOffset = $(".skillsSection").offset().top;
  //serve para ver em que posicao esta --> console.log(skillsTopOffset);

  //para o disparo nao chegar oa fim e ficar zero
  var countUpFinished = false;

  $(window).scroll(function() {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      //o 200 é para nao iniciar mal se entre na "skillsSection mas sim um pouco mais abaixo"

      $(".chart").easyPieChart({
        easing: "easeInOut",
        barColor: "#54fad4", //cor do circulo
        trackColor: false, //cor para o resto do circulo
        scaleColor: false, // sao os pontos de 10 em 10
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
          $(this.el)
            .find(".percent")
            .text(Math.round(percent));
        }
      });
    }
  });

  $("[data-fancybox]").fancybox();

  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false
    }
  });

  $("#filters a").click(function() {
    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");

    $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: "linear",
        queue: false
      }
    });

    return false; //para a funcao nao fazer mais nada
  });
});
