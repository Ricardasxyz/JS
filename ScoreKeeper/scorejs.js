var buttonone = document.getElementById("1");
var buttontwo = document.getElementById("2");
var buttonthree = document.getElementById("3");
var winning = 0;
var gameover = false;
var inputselect = document.querySelector("input");
var maxnum = document.getElementById("max");

var p1score = 0;
var p1 = document.getElementById("p1display");

var p2score = 0;
var p2 = document.getElementById("p2display");

buttonone.addEventListener("click", function(){
    if(!gameover){
         p1score++;
        if(p1score === winning){
              gameover = true;
              p1.classList.add("win");
        }
        p1.textContent = p1score;
    }
});
buttontwo.addEventListener("click", function(){
     if(!gameover){
         p2score++;
        if(p2score === winning){
             p2.classList.add("win");
              gameover = true;
        }
        p2.textContent = p2score;
    }
});
buttonthree.addEventListener("click", function(){
  reset();
});

function reset(){
    p1score = 0;
    p2score = 0;
    p1.textContent = 0;
    p2.textContent = 0;
    p1.classList.remove("win");
    p2.classList.remove("win");
    gameover = false;
}

inputselect.addEventListener("change",function(){
    maxnum.textContent = inputselect.value;
    winning = Number(inputselect.value);
    reset();
    
});