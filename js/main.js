var game = new game();
var max = 14;
var logos_lgi = ["chellomedia",
"Horizon",
"kabeldg",
"kbw",
"liberty-global-blume-3",
"telenet",
"unitymediakbw",
"upc",
"upc1",
"upc2",
"upccablecom",
"virgin",
"vtr",
"ziggo"
];

var logos_others = [
"vodafone",
"emobile",
"entel",
"hetan",
"telenor",
"movistar",
"o2",
"orange",
"sky",
"swisscomm",
"tele2",
"telekom",
"kpn",
"telekomaustria"
];



for (var index = 0;index < max; index++ ) {
  game.addImage('img/' + logos_lgi[index] + '.jpg',logos_lgi[index], Math.round(Math.random() * 400) ,0, -1);
  game.addImage('img/' + logos_others[index] + '.jpg',logos_others[index], Math.round(Math.random() * 400) ,0, 1);
}

function AddCustomShape() {
    game.addCustomShape();
    return false;    
}

function AddStar() {
    game.addStar();
    return false;    
}

function AddRegularPolygon() {
    game.addRegularPolygon();
    return false;    
}

function AddImage() {
    game.addImage();
    return false;    
}

function AddText() {

	var textAreaEl = document.getElementById('text');
	var text = textAreaEl.value;
	textAreaEl.value = '';
	
    game.addText(text);
    return false;    
}

function ScaleUp() {

    game.scaleUp();
    return false;    
}

function ScaleDown() {

    game.scaleDown();
    return false;    
}

function RotateLeft() {

    game.rotate(-45);
    return false;    
}

function RotateRight() {

    game.rotate(45);
    return false;    
}

function Clone() {

    game.clone();
    return false;    
}

function Remove() {

    game.remove();
    return false;    
}

function Filter() {

    game.filter();
    return false;    
}

function AnimateDigger() {

    game.animateDigger();
    return false;    
}

function Save() {

    game.save();
    return false;    
}