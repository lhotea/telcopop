var game = (function () {
    
    // private variables and functions
    var width = 800;
    var height = 600;
	var score = 0;
    var containerId = 'myGame';
    var stage = null;
    var mainLayer = null;
    var infoLayer = null;
    var inRotatingState = false;
    var selectedItem = null;


    // constructor
    var module = function () {
        
        stage = new Kinetic.Stage({
            container: containerId,
            width: width,
            height: height
        });

        mainLayer = new Kinetic.Layer();
        infoLayer = new Kinetic.Layer();

        stage.add(mainLayer);
        stage.add(infoLayer);

    };

    var writeMessage = function(messageLayer, message) {
        var context = messageLayer.getContext();
        messageLayer.clear();
        context.font = '14pt Calibri';
        context.fillStyle = 'black';
        context.fillText(message, 10, 25);
    };

 
    var addImage = function(src, name, x,y, points) {

        var img = new Image();        
		
        img.onload = function(){

            var kineticImg = new Kinetic.Image({
                x: x,
                y: y + 25,
                width: 94,
                height: 104,
                image: img,
                name: name,
                draggable: false,
                startScale: 1,
                initialRotateAngle: 0,
                initialPinchAngle: 0
            });
            
			kineticImg.on('click tap', function () {
			 score = score + points;
             writeMessage(infoLayer, points + ' score = ' + score);
			 if ( points > 0 ) {
			  kineticImg.remove();
			  mainLayer.draw();
			 }
			});
             mainLayer.add(kineticImg);
			 mainLayer.draw();
			 animateLogo(name);

			}
        img.src = src;

    };

    var addText = function(text) {

        var kineticText = new Kinetic.Text({
            x: 40,
            y: 60,
            stroke: '#555',
            strokeWidth: 2,
            fill: '#ddd',
            text: text,
            fontSize: 14,
            fontFamily: 'Calibri',
            textFill: '#555',
            width: 380,
            padding: 20,
            align: 'center',
            fontStyle: 'normal',
            shadow: {
                color: 'black',
                blur: 5,
                offset: [5, 5],
                opacity: 0.2
            },
            cornerRadius: 3,
            draggable: true,
            name: 'text',
            dragBoundFunc: function(pos) {
                var newY = pos.y;
                var newX = pos.x;

                if (pos.y < 50) {
                    newY = 50;
                } else if (pos.y > 500) {
                    newY = 500;
                }

                if (pos.x < 30) {
                    newX = 30;
                } else if (pos.x > 390) {
                    newX = 390;
                }

                return {
                    x: newX,
                    y: newY
                };
            }
        });

        mainLayer.add(kineticText);
        mainLayer.draw();
        
        writeMessage(infoLayer, 'Adding text...');

    };



	    var animateLogo = function(name) {
        var logo = mainLayer.get('.' + name)[0];

        var incrementX = Math.random() + .5;
        var incrementY = Math.random() + .5;


        var anim = new Kinetic.Animation(function(frame) {
		    var x = logo.getX();
			var y = logo.getY();
			
			if ((( x + logo.getWidth() ) > width + 10 ) || ( x < - 10 ) ) {
			 incrementX = -1 * incrementX;
			}

			if ((( y + logo.getHeight() ) > height + 10 ) ||  ( y < 25 ) ) {
			 incrementY = -1 * incrementY;
			}
			
            logo.setX(logo.getX() + incrementX);
            logo.setY(logo.getY() + incrementY);
        }, mainLayer);

        anim.start();        
    };


    // prototype
    module.prototype = {
        constructor: module,
        init: function () {},
        addImage: addImage,
        addText: addText,
        animateLogo: animateLogo
    };

    // return module
    return module;
})();
