console.log('hallo werkt het nog?');



// met hulp van deze site, alleen deze code ging over een image dus heb het zelf omgezet naar body.style.backgourndImage http://techfunda.com/howto/444/changing-of-images//

var lazerbutton = document.querySelector('button');
var fakeHome = document.getElementById('fakeLogo');





//dit is de function van mijn lazer button. hij switcht de image heen en weer//

lazerbutton.addEventListener('click', background);


function background() {


    if (document.body.style.backgroundImage.match('images/Background2.jpg')) {
        document.body.style.backgroundImage = "url('images/Background.jpg')";

    } else {
        document.body.style.backgroundImage = "url('images/Background2.jpg')";
    }

}





//Dit is de code voor de logo change//

fakeLogo.addEventListener('click', logoChange);


function logoChange() {

      var image = document.getElementById('fakeLogo');
      if (image.src.match("images/Logo2.png")) {
                image.src = "images/Logo.png";
            }
            else {
                image.src = "images/Logo2.png";
            }
        }






