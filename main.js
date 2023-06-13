import './style.css'
const images = import.meta.glob("./assets/*.jpg")


 
$(document).ready(function() {
  console.log( "ready!" );
  let leftArrow = $("#second-row #buttons button:first");
  let rightArrow = $("#second-row #buttons button:last");

  const obj = {
    El1:"#first-row",
    El2:"#second-row"
  }

  Object.keys(images).forEach((el, index)=>{ 
    if(index < 5){
            return $("#first-row #images-holder #images").append(`<img src=${el} alt="">`)
          }
        else {
          return $("#second-row #images-holder #images").append(`<img src=${el} alt="">`)
      }})

const turnOffButtons = () =>{
  leftArrow.off();
  rightArrow.off();
    setTimeout(() => {
      leftArrow.on("click",left);
      rightArrow.on("click", right)
    }, 300); 
}


 const rightScroll = (x) =>{

  $(`${obj[x]} #images`).removeClass("left")
  const El = $(`${obj[x]} #images img`).last();

   El.clone().prependTo(`${obj[x]} #images`);

    $(`${obj[x]} #images`).animate({right: -El.width() - 10},250, function() {
      El.remove();
      $(this).attr('style','right: 0px');
    });
  }

  const leftScroll = (x) =>{
    $(`${obj[x]} #images`).addClass("left")
    const El = $(`${obj[x]} #images img`).first();

    El.clone().appendTo(`${obj[x]} #images`);

    $(`${obj[x]} #images`).animate({right: El.width() + 10},250, function() {
      El.remove();
      $(this).attr('style','right: 0px');
    });
  }

  const right = () =>{
    turnOffButtons();
    rightScroll("El1");
    rightScroll("El2")
  }

  const left = () =>{
    turnOffButtons();
    leftScroll("El1");
    leftScroll("El2")
  }

  rightArrow.on("click",right)
  leftArrow.on("click",left)
 
});

