let player = document.getElementById("music");

let audioCtx = new AudioContext();
let source = audioCtx.createMediaElementSource(player);
let analyser = audioCtx.createAnalyser();
let speaker = audioCtx.destination;

source.connect(analyser);
analyser.connect(speaker);

analyser.fftSize = 512;

let $hammerElements = $(".hammer-elements");

function animateHammer() {
    let data = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(data);
    let frequency = data[100];
    let rgbColor = frequency;
    let strokeWidth = ((frequency / 255) * 15);

    if (rgbColor >= 0 && rgbColor <= 255) {
        $hammerElements.css({
            "fill": "rgb(" + rgbColor + ", " + rgbColor + ", " + rgbColor + ")",
            "stroke-width": strokeWidth
        });
    }
    requestAnimationFrame(animateHammer);
}

requestAnimationFrame(animateHammer);