"use strict";

let sub = document.getElementById("sub");
let count = document.getElementById("count");
let add = document.getElementById("add");
let restart = document.getElementById("restart");
let numberCount = 0

restart.addEventListener("click", function reset() {
  count.innerText = numberCount = 0;
});

add.addEventListener("click", function plus() {
  count.innerText = ++numberCount;
  if (numberCount > 0) {
     count.style.color =  'green'
  }else if (numberCount < 0){
    count.style.color = 'red'
  }else {
    count.style.color = '#122e4e'
  }
});

sub.addEventListener("click", function minus() {
  count.innerText = --numberCount;
  if (numberCount > 0) {
    count.style.color =  'green'
 }else if (numberCount < 0){
   count.style.color = 'red'
 }else {
   count.style.color = '#122e4e'
 }
});


