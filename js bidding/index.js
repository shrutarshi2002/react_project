var audio = new Audio('music1.mp3');
function bid(){
  const butt = document.querySelector(".box");
  butt.classList.remove("visible");

}



const form = document.querySelector(".sigform");
const val = document.querySelector(".val1");
var a = 3000;
form.addEventListener('submit',function(e){
  e.preventDefault();
  const currentvalue =document.querySelector(".result");

  var addvalue = Number(val.value);
  if(val.value >= 0){
    a += addvalue;
    document.querySelector(".result").innerHTML= a;
    audio.play();


    // var num = document.querySelector(".result").innerHTML= b += a;


  }else{
    alert("enet")
  }
  const butt = document.querySelector(".box");
  butt.classList.add("visible");




})
