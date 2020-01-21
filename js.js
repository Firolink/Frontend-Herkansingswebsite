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
