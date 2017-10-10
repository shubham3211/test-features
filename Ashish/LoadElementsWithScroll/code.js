// Hardcoded sliding to 100px for simplicity (should look good enough)
// Make a jquery object of the element to be loaded
// Pass that object as an argument of function preparePositionForLoading and loadElement
// Code needs little optimisation

let $box = $("#box");
preparePositionForLoading($box);
window.onscroll = function () {
    loadElement($box);
};

function loadElement(jqObject) {
    if ($(window).scrollTop() >= jqObject.offset().top - window.innerHeight + 100 && jqObject.css("opacity") == 0) {
        jqObject.animate({
            top: "-=100px",
            opacity: "1"
        }, 500, "swing");
    }
    if ($(window).scrollTop() <= jqObject.offset().top - window.innerHeight + parseInt(jqObject.css("height")) && jqObject.css("opacity") == 1) {
        jqObject.animate({
            top: "+=100px",
            opacity: "0"
        }, 250, "swing");
    }
}

function preparePositionForLoading(jqObject) {
    let currTop = parseInt(jqObject.css("top"));
    jqObject.css("top", (jqObject + 100) + "px");
    jqObject.css("opacity", "0");
}