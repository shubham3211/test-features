let text = $("h1").text();

function typeText(jqObjectTextTag) {
    let text = jqObjectTextTag.text();
    jqObjectTextTag.text("");
    let typingDelay = 0;
    for (let i = 0; i < text.length; i++) {
        typingDelay += generateRandomNumber(50, 500);
        setTimeout(() => {
            jqObjectTextTag.append(text.charAt(i));
        }, typingDelay)
    }
    setTimeout(() => {
        deleteText(jqObjectTextTag);
    }, typingDelay + 2500)
}

function deleteText(jqObjectTextTag) {
    let text = jqObjectTextTag.text();
    let deleteDelay = 0;
    for (let i = text.length - 1; i >= 0; i--) {
        deleteDelay += 50;
        setTimeout(() => {
            jqObjectTextTag.text(text.substring(0, i));
        }, deleteDelay);
    }

}

function generateRandomNumber(min,max) {
    return Math.floor(Math.random() *( max - min + 1) + min);
}

typeText($("h1"));