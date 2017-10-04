
var sound = new Audio ('sound/switch-1.wav');
var text = document.querySelector('.status')
var body = document.querySelector('body.light')
body.style.backgroundColor = 'yellow'

var button = document.querySelector('button')
button.addEventListener('click', function(){
 if (button.className === 'switch on')
 {button.className = 'switch off'
  body.style.backgroundColor = 'black'
  text.innerHTML = "It's too dark in here"
  sound.play()
}

  else if (button.className === 'switch off') {
    button.className = 'switch on'
    body.style.backgroundColor = 'yellow'
    text.innerHTML = "It's too bright in here"
    sound.play()

  }
});

var body = document.querySelector('body.light')
