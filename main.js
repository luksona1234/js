console.log(window.document);


let container = document.querySelector('.box');

function func(){
    container.style.width = '800px' 
    container.style.height = '1200px'
    container.style.margin0 = 'auto'
    container.style.border = '5px solid red'
    container.style.textAlign = 'center'
    return container
}
console.log(func());

let h1 = document.querySelector('#title');
let p = document.querySelector('.text');


h1.textContent = '„ვენეცია“'
p.textContent = '„ვენეცია ვენეტოს რეგიონის დედაქალია. სახელი მომდინარეობს აქ მაცხოვრებელი ანტიკური პერიოდის ხალხისგან, რომლებსაც ვენეტები ეწოდებოდათ.“'
function i(){
    h1.style.color = 'black'
    h1.style.fontSize = '40px'
    h1.style.textAlign = 'center'
    return h1
}
console.log(i());

function g(){
    p.style.fontSize = '25px'
    p.style.color = 'brown'
    return p
}
console.log(g());


let boxer = document.querySelector('.circle')

function circle(){
    boxer.style.width = '400px'
    boxer.style.height = '400px'
    boxer.style.borderRadius = '50%'
    boxer.style.backgroundColor = 'yellow'
    boxer.style.marginTop = '50px'
    boxer.style.marginLeft = '25%'
    return boxer
}
console.log(circle());

boxer.addEventListener('mouseover', function() {
        boxer.style.backgroundColor = 'blue'
})

let box1 = document.querySelector('.box-1');
let btn = document.querySelector('#btn');



function btnm(){
    btn.style.width = '200px'
    btn.style.height = '50px'
    btn.style.backgroundColor = 'red'
    btn.style.marginTop = '50px'
    return btn
}
console.log(btnm());

let p5 = document.querySelector('.p5');
function p50(){
    p5.style.color = 'white'
    return p5
}
console.log(p50());

function remove(){
    container.remove();
    return btn
}
console.log(p50());

let btn1 = document.querySelector('#btn1')
let ppp = document.querySelector('.ptag')
btn1.addEventListener('click', function (){
    let orngBox = document.querySelector('.orangeBox');
    orngBox.classList.toggle('box-orange');
})

let prplbx = document.querySelector('.purpleBox');

function prplbx1(){
    prplbx.style.width = '70%'
    prplbx.style.height = '300px'
    prplbx.style.backgroundColor = 'purple'
    prplbx.style.marginLeft = '15%'
    prplbx.style.marginTop = '10px'
    prplbx.style.borderRadius = '2%'
    prplbx.style.textAlign = 'center'
    return prplbx
}
console.log(prplbx1());



let p10 = document.querySelector('.p10');

function P10(){
    p10.style.fontSize = '40px'
    p10.style.color = 'white'
    return p10
}
console.log(P10());

let input = document.querySelector('.input');


function inpput(){
    input.style.width = '350px'
    input.style.height = '20px'
    input.style.marginLeft = '-100px'
    return input
}

console.log(inpput());

let box50 = document.querySelector('.box-50');

function boX50(){
    box50.style.width = '85px'
    box50.style.height = '25px'
    box50.style.marginTop = '-229px'
    box50.style.marginLeft = '529px'
    box50.style.backgroundColor = 'red'
    box50.style.textAlign = 'center'
    return box50
}
console.log(boX50());









