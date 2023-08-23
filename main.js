var canvas = new fabric.Canvas('myCanvas');

ball_y=0;
ball_x=0;
hole_y=600;
hole_x=1000;

block_image_width = 5;
block_image_height = 5;

function loadImg(){
	fabric.Image.fromURL("", function(img) {
        hole_obj = img;
        hole_obj.scaleToWidth(50);
        hole_obj.scaleToHeight(50);
        hole_obj.set({
            top:hole_y,
            left:hole_x
        });
        canvas.add(hole_obj);     
        });
	    new_image();
}

function new_image()
{
	fabric.Image.fromURL("car2.png", function(img) {
        ball_obj = img;
        ball_obj.scaleToWidth(100);
        ball_obj.scaleToHeight(125);
        ball_obj.set({
        top:ball_y,
        left:ball_x
        });
        canvas.add(ball_obj);     
    });
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    if((ball_x==hole_x)&&(ball_y==hole_y)){
        canvas.remove(ball_obj);

		document.getElementById("hd3").innerHTML="Você atingiu o objeivo";
		docimeny.getElementById("myCanvas").style.borderColor="Red";
    }
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y >=0)
		{
			ball_y = ball_y - block_image_height;
		   canvas.remove(ball_obj);
		   new_image();
		}
	}

	function down()
	{
		 if(ball_y <=500)
		 {
			ball_y = ball_y + block_image_height;
			canvas.remove(ball_obj);
			new_image();
		 }
	}

	function left()
	{
		if(ball_x >0)
		{
			ball_x = ball_x - block_image_width;
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=850)
		{
			ball_x = ball_x + block_image_height;
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
}