/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
$(function () {
  console.log("ready!");
  var leftArrow = $("#second-row #buttons button:first");
  var rightArrow = $("#second-row #buttons button:last");
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
    $("".concat(obj[x], " #images")).removeClass("left");
    var El = $("".concat(obj[x], " #images img")).last();
    El.clone().prependTo("".concat(obj[x], " #images"));
    $("".concat(obj[x], " #images")).animate({
      right: -El.width() - 10
    }, 240, function () {
      El.remove();
      $(this).attr('style', 'right: 0px');
    });
  };
  var leftScroll = function leftScroll(x) {
    $("".concat(obj[x], " #images")).addClass("left");
    var El = $("".concat(obj[x], " #images img")).first();
    El.clone().appendTo("".concat(obj[x], " #images"));
    $("".concat(obj[x], " #images")).animate({
      right: El.width() + 10
    }, 240, function () {
      El.remove();
      $(this).attr('style', 'right: 0px');
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