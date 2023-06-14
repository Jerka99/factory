import './style.css'
const images = import.meta.glob("./assets/*.jpg")


 
$(function() {
  console.log( "ready!" );
  let leftArrow = $("#second-row #buttons button:first");
  let rightArrow = $("#second-row #buttons button:last");
  let firstRow = [];
  let secondRow = [];
  let temp = null;

  function handler(x){
    const color = $(this).children().attr("src").substring(15,19);
    const arrow = $(this).children().attr("src").substring(20,21);

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

  const sumFun = (x) =>{
    const nodelistToArray = Array.prototype.slice.call($(`${x} #images-holder img`));
    let sum = 0;
    nodelistToArray.forEach((el)=>{
     sum += el.width + 10;
   })
    return sum
  }

const fun = (x) =>{

  console.log(temp, x)

  if(temp != x){
  firstRow = [];
  secondRow = [];

  Object.keys(images).forEach((el, index)=>{ 
    if(index > x ?? -1){
      firstRow.push(`<img src=${el} alt="">`)
          }
       else {
        secondRow.push(`<img src=${el} alt="">`)
      }
    })     
      $("#first-row #images-holder #images").html(firstRow.join(""))
      $("#second-row #images-holder #images").html(secondRow.join(""))


    setTimeout(() => {
        if(x==3){
        $("#first-row #images-holder").css("width",`${sumFun("#first-row")}px`)
        $("#second-row #images-holder").css("width",`${sumFun("#second-row")}px`)
      }
      else{
        $("#first-row #images-holder").css("width",`${sumFun("#first-row")}px`)
      }
      }, 200);
   temp = x;   
  }
  }

      $( window ).on( "resize load", function() {     
                
        if($(window).width() < 1600){
          fun(3)
        }
        else{
          fun(-1)
        }
      } );

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

