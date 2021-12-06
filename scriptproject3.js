
const input = document.getElementById("field");

function cButton(event) {
    console.log("I'm cButton");
   input.value = "";
   
    event.preventDefault();
}

let cButtonButton = document.getElementById("c");
cButtonButton.addEventListener("click", cButton);

function dot(event) {
    console.log("I'm dot");
    input.value = input.value + ".";

    event.preventDefault();
}

let dotButton = document.getElementById("dot");
dotButton.addEventListener("click", dot);

function zero(event) {
    console.log("I'm number zero");
    input.value = input.value + "" + 0;

    event.preventDefault();
}

let zeroButton = document.getElementById("zero");
zeroButton.addEventListener("click", zero);

function three(event) {
    console.log("I'm number three");
    input.value = input.value + "" + 3;

    event.preventDefault();
}

let threeButton = document.getElementById("three");
threeButton.addEventListener("click", three);

function two(event) {
    console.log("I'm number two");
    input.value = input.value + "" + 2;

    event.preventDefault();
}

let twoButton = document.getElementById("two");
twoButton.addEventListener("click", two);

function one(event) {
    console.log("I'm number one");
    input.value = input.value + "" + 1;

    event.preventDefault();
}

let oneButton = document.getElementById("one");
oneButton.addEventListener("click", one);

function six(event) {
    console.log("I'm number six");
    input.value = input.value + "" + 6;

    event.preventDefault();
}

let sixButton = document.getElementById("six");
sixButton.addEventListener("click", six);

function five(event) {
    console.log("I'm number five");
    input.value = input.value + "" + 5;

    event.preventDefault();
}

let fiveButton = document.getElementById("five");
fiveButton.addEventListener("click", five);

function four(event) {
    console.log("I'm number four");
    input.value = input.value + "" + 4;

    event.preventDefault();
}

let fourButton = document.getElementById("four");
fourButton.addEventListener("click", four);

function nine(event) {
    console.log("I'm number nine");
    input.value = input.value + "" + 9;

    event.preventDefault();
}

let nineButton = document.getElementById("nine");
nineButton.addEventListener("click", nine);

function eight(event) {
    console.log("I'm number eight");
    input.value = input.value + "" + 8;

    event.preventDefault();
}

let eightButton = document.getElementById("eight");
eightButton.addEventListener("click", eight);

function seven(event) {
    console.log("I'm number seven");
    input.value = input.value + "" + 7;

    event.preventDefault();
}

let sevenButton = document.getElementById("seven");
sevenButton.addEventListener("click", seven);

function plusSign(event) {
    console.log("I'm plus sign");
    input.value = input.value + "" + "+";

    event.preventDefault();
}

let plusSignButton = document.getElementById("plus");
plusSignButton.addEventListener("click", plusSign);

function minusSign(event) {
    console.log("I'm minus sign");
    input.value = input.value + "-";

    event.preventDefault();
}

let minusSignButton = document.getElementById("minus");
minusSignButton.addEventListener("click", minusSign);

function multiSign(event) {
    console.log("I'm multi sign");
    input.value = input.value + "*";

    event.preventDefault();
}

let multiSignButton = document.getElementById("multi");
multiSignButton.addEventListener("click", multiSign);


function divSign(event) {
    console.log("I'm div sign");
    input.value = input.value + "/";

    event.preventDefault();
}

let divSignButton = document.getElementById("div");
divSignButton.addEventListener("click", divSign);

function equal(event) {
    console.log("I'm equal sign");
    input.value = eval(input.value);

    event.preventDefault();
}

let equalButton = document.getElementById("equal");
equalButton.addEventListener("click", equal);
