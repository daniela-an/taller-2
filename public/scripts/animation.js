var item1 = document.querySelectorAll("#item1");
var item2 = document.querySelectorAll("#item2");
var item3 = document.querySelectorAll("#item3");
var item4 = document.querySelectorAll("#item4");

var item1S = document.querySelector("#item1a");
var item2S = document.querySelector("#item2a");
var item3S = document.querySelector("#item3a");
var item4S = document.querySelector("#item4a");

    TweenMax.from(item1, 1, {opacity:0, x:1000});
    TweenMax.from(item2, 1.2, {opacity:0, x:1000});
    TweenMax.from(item3, 1.3, {opacity:0, x:1000});
    TweenMax.from(item4, 1.4, {opacity:0, x:1000});

    TweenMax.from(item1S, 1.2, {opacity:0, x:-350});
    TweenMax.from(item2S, 1.2, {opacity:0, x:-400});
    TweenMax.from(item3S, 1.2, {opacity:0, x:-450});
    TweenMax.from(item4S, 1.2, {opacity:0, x:-500});

    




