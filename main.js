canvas = new fabric.Canvas('myCanvas');

block_img_height = 140;
block_img_width = 150;

player_X = 10;
player_Y = 10;

player_img = "";
block_img = "";

function player_update() {

    fabric.Image.fromURL("player.webp" , function(Img){
  
      player_img = Img;
      player_img.scaleToWidth(150);
      player_img.scaleToHeight(140);
  
      player_img.set( {
  
        top:player_Y ,
        left:player_X 
  
      });
  
      canvas.add(player_img);
  
    });
  
  }

  function new_image(get_image) {

    fabric.Image.fromURL(get_image , function(Img){
  
      block_img = Img;
      block_img.scaleToWidth(block_img_width);
      block_img.scaleToHeight(block_img_height);
  
      block_img.set( {
        
        top:player_Y ,
        left:player_X     
  
      });
  
      canvas.add(block_img);
  
    });
  
  } 
  