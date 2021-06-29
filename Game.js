class Game {
  constructor(){
  
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }
  }

  play(){
    form.hide();
    background(gamePageBg);
    fill("yellow");
    rect(220,230,300,220);
    fill("violet");
    textSize(45);
    text("Game Start", 250, 270)
    
    Player.getPlayerInfo();

    

    if(allPlayers !== undefined){
      var display_position = 330;
      for(var plr in allPlayers){
        if (plr === "player" + player.index){
          fill("blue");
          playerIndicate="player";
        }else{
          fill("red");
          playerIndicate="opponent";
        }
        display_position+=20;
        textSize(15);
        text(playerIndicate+":"+allPlayers[plr].name ,270,display_position)
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();

     
    }
  }
  
}
