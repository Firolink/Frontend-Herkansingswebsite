console.log('hallo werkt het nog?');



// met hulp van deze site, alleen deze code ging over een image dus heb het zelf omgezet naar body.style.backgourndImage http://techfunda.com/howto/444/changing-of-images//

var lazerbutton = document.querySelector('button');


lazerbutton.addEventListener('click', background);


function background() {


    if (document.body.style.backgroundImage.match('images/Background2.jpg')) {
        document.body.style.backgroundImage = "url('images/Background.jpg')";

    } else {
        document.body.style.backgroundImage = "url('images/Background2.jpg')";
    }

}




var fakeHome = document.getElementById('fakeLogo');


fakeLome.addEventListener('click', logoChange);


function logoChange() {


      if (image.src.match("images/Logo2.png")) {
                image.src = "images/Logo.png";
            }
            else {
                image.src = "images/Logo2.png";
            }
        }










let last_known_scroll_position = 1;
let ticking = false;

function doSomething(scroll_pos) {

}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
