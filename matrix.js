var canvas = document.body.appendChild(document.createElement('canvas')),
    context = canvas.getContext('2d');

context.globalCompositeOperation = 'lighter';
canvas.width = 1880;
canvas.height = 2000;

var textStrip = ['J', 'A', 'S', 'W', 'A', 'N', 'T', 'H'];

var stripCount = 60, stripX = [], stripY = [], dY = [], stripFontSize = [];

for (var i = 0; i < stripCount; i++) {
    stripX[i] = Math.floor(Math.random() * canvas.width);
    stripY[i] = -100;
    dY[i] = Math.floor(Math.random() * 7) + 3;
    stripFontSize[i] = Math.floor(Math.random() * 16) + 8;
}

// Grey shades for the falling text
var theColors = ['#9a9d9b15', '#9a8d9b15', '#9a8d9b15', '#9a8d9b15', '#9a8d9b15', '#9a8d9b15'];

function drawStrip(x, y) {
    for (var k = 0; k <= 20; k++) {
        var randChar = textStrip[Math.floor(Math.random() * textStrip.length)];
        if (context.fillText) {
            context.fillStyle = theColors[Math.min(k, theColors.length - 1)];
            context.fillText(randChar, x, y);
        }
        y -= stripFontSize[k];
    }
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.shadowBlur = 8;
    context.shadowColor = '#9a9d9b15'; // Grey glow effect

    for (var j = 0; j < stripCount; j++) {
        context.font = stripFontSize[j] + 'px Arial';
        context.textBaseline = 'top';
        context.textAlign = 'center';

        if (stripY[j] > canvas.height) {
            stripX[j] = Math.floor(Math.random() * canvas.width);
            stripY[j] = -100;
            dY[j] = Math.floor(Math.random() * 7) + 3;
            stripFontSize[j] = Math.floor(Math.random() * 16) + 8;
        }

        drawStrip(stripX[j], stripY[j]);
        stripY[j] += dY[j];
    }

    setTimeout(draw, 70);
}

draw();




