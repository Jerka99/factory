$(function () {

  let leftArrow = $("#left-arrow");
  let rightArrow = $("#right-arrow");

  const obj = {
    El1: "#first-row",
    El2: "#second-row",
  };

  const turnOffButtons = () => {
    leftArrow.off("click", left);
    rightArrow.off("click", right);
    setTimeout(() => {
      leftArrow.on("click", left);
      rightArrow.on("click", right);
    }, 250);
  };

  const rightScroll = (x) => {
    $(`${obj[x]} .images`).removeClass("left");
    const El = $(`${obj[x]} .images img`).last();

    El.clone().prependTo(`${obj[x]} .images`);

    $(`${obj[x]} .images`).animate(
      { right: -El.width() - 10 },
      240,
      function () {
        El.remove();
        $(this).attr("style", "right: 0px");
      }
    );
  };

  const leftScroll = (x) => {
    $(`${obj[x]} .images`).addClass("left");
    const El = $($(`${obj[x]} .images img`)).first();
    El.clone().appendTo($(`${obj[x]} .images`));
    $(`${obj[x]} .images`).animate(
      { right: El.width() + 10 },
      240,
      function () {
        El.remove();
        $(this).attr("style", "right: 0px");
      }
    );
  };

  const right = () => {
    turnOffButtons();
    rightScroll("El1");
    rightScroll("El2");
  };

  const left = () => {
    turnOffButtons();
    leftScroll("El1");
    leftScroll("El2");
  };

  rightArrow.on("click", right);
  leftArrow.on("click", left);
});
