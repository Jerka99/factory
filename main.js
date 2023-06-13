import './style.css'
const images = import.meta.glob("./assets/*.jpg")


 
$(document).ready(function() {
  console.log( "ready!" );
  let leftArrow = $("#second-row #buttons button:first");
  let rightArrow = $("#second-row #buttons button:last");


  Object.keys(images).forEach((el, index)=>{ if(index < 5){
                                         return $("#first-row #images-holder #images").append(`<img src=${el} alt="">`)
                                        }
                                      else {
                                        return $("#second-row #images-holder #images").append(`<img src=${el} alt="">`)
                                    }})

const turnOffButtons = () =>{
  leftArrow.off();
  rightArrow.off();
    setTimeout(() => {
      leftArrow.on("click",leftScroll);
      rightArrow.on("click", rightScroll)
    }, 370); 
}

 const rightScroll = () =>{
  $("#second-row #images, #first-row #images ").removeClass("left")
  
    const lastEl1 = $("#first-row #images img").last();
    const lastEl2 = $("#second-row #images img").last();

    turnOffButtons();
    lastEl1.clone().prependTo("#first-row #images");
    lastEl2.clone().prependTo("#second-row #images");

    $("#first-row #images ").animate({right:-lastEl1.width()-10},300, function() {
      lastEl1.remove();
      $(this).attr('style','right: 0px');
    });

    $("#second-row #images ").animate({right:-lastEl2.width()-10},300, function() {
      lastEl2.remove();
      $(this).attr('style','right: 0px');
    });
  }

  const leftScroll = () =>{
    $("#second-row #images, #first-row #images ").addClass("left")
    const firstEl1 = $("#first-row #images img").first();
    const firstEl2 = $("#second-row #images img").first();

    turnOffButtons();
    firstEl1.clone().appendTo("#first-row #images");
    firstEl2.clone().appendTo("#second-row #images");

    $("#first-row #images ").animate({right: firstEl1.width() + 10},300, function() {
      firstEl1.remove();
      $(this).attr('style','right: 0px');
    });

    $("#second-row #images ").animate({right: firstEl2.width() + 10},300, function() {
      firstEl2.remove();
      $(this).attr('style','right: 0px');
    });
  }

  rightArrow.on("click", rightScroll)
  leftArrow.on("click", leftScroll)
 



});

