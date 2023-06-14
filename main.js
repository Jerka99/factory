import './style.css'
const images = import.meta.glob("./assets/*.jpg")


 
$(function() {
  console.log( "ready!" );
  let leftArrow = $("#second-row #buttons button:first");
  let rightArrow = $("#second-row #buttons button:last");


  function handler(x){
    const color = $(this).children().attr("src").substring(15,19);
    const arrow = $(this).children().attr("src").substring(20,21);
    console.log($(this).css("border", "solid 1px darkgray"))    
    if(arrow == "l"){
    $(this).css("border", `solid 1px ${color == "blue" ? "darkgray" : "#134880"}`);
    $(this).children().attr("src",`./assets/arrow-${color == "blue" ? "gray" : "blue"}-left.png`);
  }
    else{
    $(this).css("border", `solid 1px ${color == "blue" ? "darkgray" : "#134880"}`);
    $(this).children().attr("src",`./assets/arrow-${color == "blue" ? "gray" : "blue"}-right.png`)
    }

  }

  leftArrow.on( "mouseenter", handler ).on( "mouseleave", handler );
  rightArrow.on( "mouseenter", handler ).on( "mouseleave", handler );


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
  leftArrow.off("click",left);
  rightArrow.off("click", right);
    setTimeout(() => {
      leftArrow.on("click",left);
      rightArrow.on("click", right)
    }, 250); 
}


 const rightScroll = (x) =>{
  $(`${obj[x]} #images`).removeClass("left")
  const El = $(`${obj[x]} #images img`).last();

   El.clone().prependTo(`${obj[x]} #images`);

    $(`${obj[x]} #images`).animate({right: -El.width() - 10},240, function() {
      El.remove();
      $(this).attr('style','right: 0px');
    });
  }

  const leftScroll = (x) =>{
    $(`${obj[x]} #images`).addClass("left")
    const El = $(`${obj[x]} #images img`).first();

    El.clone().appendTo(`${obj[x]} #images`);

    $(`${obj[x]} #images`).animate({right: El.width() + 10},240, function() {
      El.remove();
      $(this).attr('style','right: 0px');
    });
  }

  const right = () =>{
    turnOffButtons();
    rightScroll("El1");
    rightScroll("El2");
  }

  const left = () =>{
    turnOffButtons();
    leftScroll("El1");
    leftScroll("El2");
  }

  rightArrow.on("click",right)
  leftArrow.on("click",left)
 
});

