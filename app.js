const displayScreen = document.getElementById("displayScreen");

//special functions
const ac = document.getElementById("ac");
const percent = document.getElementById("percent");
const equalTo = document.getElementById("equalTo");
const plus = document.getElementById("plus");
const divide = document.getElementById("divide");
const squareRoot = document.getElementById("squareroot");
const minus = document.getElementById("minus");


const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");

seven.addEventListener("click", function(){
    let currValue = displayScreen.value; 
    displayScreen.value += 7;
});

eight.addEventListener("click", function(){
    let currValue = displayScreen.value; 
    displayScreen.value += 8;
});

nine.addEventListener("click", function(){
    let currValue = displayScreen.value; 
    displayScreen.value += 9;
});
four.addEventListener("click", function(){
    let currValue = displayScreen.value; 
    displayScreen.value += 4;
});

five.addEventListener("click", function(){
    let currValue = displayScreen.value; 
    displayScreen.value += 5;
});

six.addEventListener("click", function(){
    let currValue = displayScreen.value; 
    displayScreen.value += 6;
});

one.addEventListener("click", function(){
    let currValue = displayScreen.value; 
    displayScreen.value += 1;
});

two.addEventListener("click", function(){
    let currValue = displayScreen.value; 
    displayScreen.value += 2;
});

three.addEventListener("click", function(){
    let currValue = displayScreen.value; 
    displayScreen.value += 3;
});

plus.addEventListener("click", function(){
    let currValue = displayScreen.value; 
    displayScreen.value += "+";
});

minus.addEventListener("click", function(){
    let currValue = displayScreen.value; 
    displayScreen.value -= "-";
});



equalTo.addEventListener("click", function(){
    const result = eval(displayScreen.value);
    let currValue = displayScreen.value;
    displayScreen.value += "="+result;
    //console.log(result);
});