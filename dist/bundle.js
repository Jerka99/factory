/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
$(function () {
  var leftArrow = $("#left-arrow");
  var rightArrow = $("#right-arrow");
  var obj = {
    El1: "#first-row",
    El2: "#second-row"
  };
  var turnOffButtons = function turnOffButtons() {
    leftArrow.off("click", left);
    rightArrow.off("click", right);
    setTimeout(function () {
      leftArrow.on("click", left);
      rightArrow.on("click", right);
    }, 250);
  };
  var rightScroll = function rightScroll(x) {
    $("".concat(obj[x], " .images")).removeClass("left");
    var lastImg = $("".concat(obj[x], " .images img")).last();
    lastImg.clone().prependTo("".concat(obj[x], " .images"));
    $("".concat(obj[x], " .images")).animate({
      right: -lastImg.width() - 10
    }, 240, function () {
      lastImg.remove();
      $(this).attr("style", "right: 0px");
    });
  };
  var leftScroll = function leftScroll(x) {
    $("".concat(obj[x], " .images")).addClass("left");
    var firstImg = $($("".concat(obj[x], " .images img"))).first();
    firstImg.clone().appendTo($("".concat(obj[x], " .images")));
    $("".concat(obj[x], " .images")).animate({
      right: firstImg.width() + 10
    }, 240, function () {
      firstImg.remove();
      $(this).attr("style", "right: 0px");
    });
  };
  var right = function right() {
    turnOffButtons();
    rightScroll("El1");
    rightScroll("El2");
  };
  var left = function left() {
    turnOffButtons();
    leftScroll("El1");
    leftScroll("El2");
  };
  rightArrow.on("click", right);
  leftArrow.on("click", left);
});
/******/ })()
;