var screen = document.getElementById('screen');
var upScreen = document.getElementById('upper-screen');
let opScreen = document.getElementById('operator-screen')


function normalButton(params) {

    screen.innerText = screen.innerText + params;
    screenValue = screen.innerText;
    // console.log(screenValue)
}
function acButton() {
    screen.innerText = 0;
    screen.innerText = screen.innerText.slice(0, -1);
    upScreen.innerText = 0;
    upScreen.innerText = upScreen.innerText.slice(0, -1);
    console.log(screen.innerText);
    console.log(upScreen.innerText)
}
function operatorButton(sign) {

    if (sign == 'plus') {
        upScreen.innerText = screen.innerText;
        screen.innerText = '';
        opScreen.innerText = '+'
    } else if (sign == 'minus') {
        upScreen.innerText = screen.innerText;
        screen.innerText = '';
        opScreen.innerText = '-'
    }
    else if (sign == 'into') {
        debugger
        upScreen.innerText = screen.innerText;
        screen.innerText = '';
        opScreen.innerText = '*'
    } else if (sign == 'dev') {
        upScreen.innerText = screen.innerText;
        screen.innerText = '';
        opScreen.innerText = '/'
    }

}

document.getElementById('answer').addEventListener('click', function () {
    if (opScreen.innerText == '+') {
        screen.innerText = parseFloat(upScreen.innerText) + parseFloat(screen.innerText);
        upScreen.innerText = 0;
        opScreen.innerText = ''
    } else if (opScreen.innerText == '-') {
        screen.innerText = parseFloat(upScreen.innerText) - parseFloat(screen.innerText);
        upScreen.innerText = 0;
        opScreen.innerText = ''
    } else if (opScreen.innerText == '*') {

        screen.innerText = parseFloat(upScreen.innerText) * parseFloat(screen.innerText);
        upScreen.innerText = 1;
        opScreen.innerText = ''
    } else if (opScreen.innerText == '/') {
        screen.innerText = parseFloat(upScreen.innerText) / parseFloat(screen.innerText);
        upScreen.innerText = 1;
        opScreen.innerText = ''
    }

})