var slideIndex1 = 1;
var slideIndex2 = 1;
var slideIndex3 = 1;
showSlides1(slideIndex1);
showSlides2(slideIndex2);
showSlides3(slideIndex3);


// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}
function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
  }
  function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
  }



// Thumbnail image controls
function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
  }

  function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
  }

function showSlides1(n) {
  var i1;
  var slides1 = document.getElementsByClassName("mySlides");
  var dots1 = document.getElementsByClassName("dot");
  if (n > slides1.length) {
    slideIndex1 = 1
}
  if (n < 1) {
    slideIndex1 = slides1.length
}
  for (i1 = 0; i1 < slides1.length; i1++) {
      slides1[i1].style.display = "none";
  }
  for (i1 = 0; i1 < dots1.length; i1++) {
      dots1[i1].className = dots1[i1].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "block";
  dots1[slideIndex1-1].className += " active";
}

function showSlides2(n) {
      var i2;
      var slides2 = document.getElementsByClassName("mySlides2");
      var dots2 = document.getElementsByClassName("dot2");
    if (n > slides2.length) {
        slideIndex2 = 1
    }
      if (n < 1) {
        slideIndex2 = slides2.length
    }
      for (i2 = 0; i2 < slides2.length; i2++) {
        slides2[i2].style.display = "none";
    }
      for (i2 = 0; i2 < dots2.length; i2++) {
        dots2[i2].className = dots2[i2].className.replace(" active", "");
    }
      slides2[slideIndex2-1].style.display = "block";
      dots2[slideIndex2-1].className += " active";
    }

    function showSlides3(n) {
          var i3;
          var slides3 = document.getElementsByClassName("mySlides3");
          var dots3 = document.getElementsByClassName("dot3");
          
        if (n > slides3.length) {
            slideIndex3 = 1
        }
          if (n < 1) {
            slideIndex3 = slides3.length
        }
        
        for (i3 = 0; i3 < slides3.length; i3++) {
            slides3[i3].style.display = "none";
        }
        
        for (i3 = 0; i3 < dots3.length; i3++) {
            dots3[i3].className = dots3[i3].className.replace(" active", "");
        }
        
          slides3[slideIndex3-1].style.display = "block";
          dots3[slideIndex3-1].className += " active";
        }

