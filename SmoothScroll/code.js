// Doesn't override ancher default link!

function smoothScroll(targetElementJqobject) {
    let topHeight = targetElementJqobject.offset().top;
    $("html, body").animate({scrollTop: topHeight}, 1000, "swing"); // Don't select window, it gives error while animating
}
// Format
$("button").click(() => {smoothScroll($("#box"))});