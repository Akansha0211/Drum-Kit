// document.querySelector("button").addEventListener("click",function(){
//     alert("I got clicked");
// });

// long way :naive approach
// document.querySelectorAll("button")[0].addEventListener("click",function(){
//     alert("I got clicked");
// });

// document.querySelectorAll("button")[1].addEventListener("click",function(){
//     alert("I got clicked");
// });

for( var i = 0; i< document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    });
}