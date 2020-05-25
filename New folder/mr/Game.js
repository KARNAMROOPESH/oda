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
      form = new Form()
      form.display();
    }

    runner = createSprite(50,180,20,50);
  runner2 = createSprite(50,380,20,50);
  
  runner.addAnimation("running", runner_running);
  runner.scale = 0.050;
  
  runner2.addAnimation("running2", runner_running2);
  runner2.scale = 0.050;
  

  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -(6 + 3*score/100);

  ground2 = createSprite(200,380,400,20);
  ground2.addImage("ground",groundImage2);
  ground2.x = ground2.width /2;
  ground2.velocityX = -(6 + 3*score1/100);
  
  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
  gameOver.scale = 0.5;
  restart.scale = 0.5;

  gameOver.visible = false;
  restart.visible = false;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;

  invisibleGround2 = createSprite(200,390,400,10);
  invisibleGround2.visible = false;
  
  cloudsGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;
  }

  play(){
    form.hide();
    player.getScore();
    
    if(keyIsDown(UP_ARROW) && runner.y < 160) {
      runner.y= 50;
    }
    if(keyIsDown(UP_ARROW) && runner2.y < 360) {
      runner2.y= 250;
    }
    runner.velocityY = runner.velocityY + 0.8
    runner2.velocityY = runner2.velocityY + 0.8
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if (ground2.x < 0){
      ground2.x = ground2.width/2;
    }
  
    runner.collide(invisibleGround);
    runner2.collide(invisibleGround2);
    spawnClouds();
    spawnObstacles();
    spawnClouds1();
    spawnObstacles1();
  
    if(obstaclesGroup.isTouching(runner)){
        gameState = END;
    }
    if(obstaclesGroup.isTouching(runner2)){
      gameState = END;
  }
  }

    drawSprites();
  }

  end();{
    console.log("Game Ended");

    gameOver.visible = true;
    restart.visible = true;
    ground.velocityX = 0;
    runner.velocityY = 0;
    ground2.velocityX = 0;
    runner2.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0);
    cloudsGroup.setVelocityXEach(0);
    obstaclesGroup.setLifetimeEach(-1);
    cloudsGroup.setLifetimeEach(-1);
    
    if(mousePressedOver(restart)) {
      reset();
    }
  }


  function spawnClouds() {
    //write code here to spawn the clouds
    if (frameCount % 60 === 0) {
      var cloud = createSprite(600,120,40,10);
      cloud.y = Math.round(random(80,120));
      cloud.addImage(cloudImage);
      cloud.scale = 0.5;
      cloud.velocityX = -3;
      
       //assign lifetime to the variable
      cloud.lifetime = 200;
      
      //adjust the depth
      cloud.depth = runner.depth;
      runner.depth = runner.depth + 1;
      
      //add each cloud to the group
      cloudsGroup.add(cloud);
    }
    
  }
  
  function spawnObstacles() {
    if(frameCount % 60 === 0) {
      var obstacle = createSprite(600,165,10,40);
      //obstacle.debug = true;
      obstacle.velocityX = -(6 + 3*score/100);
      
      //generate random obstacles
      var rand = Math.round(random(1,6));
      switch(rand) {
        case 1: obstacle.addImage(obstacle1);
                break;
        case 2: obstacle.addImage(obstacle2);
                break;
        case 3: obstacle.addImage(obstacle3);
                break;
        case 4: obstacle.addImage(obstacle4);
                break;
        case 5: obstacle.addImage(obstacle5);
                break;
        case 6: obstacle.addImage(obstacle6);
                break;
        default: break;
      }
      
      //assign scale and lifetime to the obstacle           
      obstacle.scale = 0.1;
      obstacle.lifetime = 300;
      //add each obstacle to the group
      obstaclesGroup.add(obstacle);
    }
  }
  
  function spawnClouds1() {
    //write code here to spawn the clouds
    if (frameCount % 60 === 0) {
      var cloud = createSprite(600,320,40,10);
      cloud.y = Math.round(random(280,320));
      cloud.addImage(cloudImage);
      cloud.scale = 0.5;
      cloud.velocityX = -3;
      
       //assign lifetime to the variable
      cloud.lifetime = 200;
      
      //adjust the depth
      cloud.depth = runner.depth;
      runner.depth = runner.depth + 1;
      
      //add each cloud to the group
      cloudsGroup.add(cloud);
    }
    
  }
  
  function spawnObstacles1() {
    if(frameCount % 60 === 0) {
      var obstacle = createSprite(600,365,10,40);
      //obstacle.debug = true;
      obstacle.velocityX = -(6 + 3*score1/100);
      
      //generate random obstacles
      var rand = Math.round(random(1,6));
      switch(rand) {
        case 1: obstacle.addImage(obstacle1);
                break;
        case 2: obstacle.addImage(obstacle2);
                break;
        case 3: obstacle.addImage(obstacle3);
                break;
        case 4: obstacle.addImage(obstacle4);
                break;
        case 5: obstacle.addImage(obstacle5);
                break;
        case 6: obstacle.addImage(obstacle6);
                break;
        default: break;
      }
      
      //assign scale and lifetime to the obstacle           
      obstacle.scale = 0.1;
      obstacle.lifetime = 300;
      //add each obstacle to the group
      obstaclesGroup.add(obstacle);
    }
  }
  
  function reset(){
    gameState = PLAY;
    gameOver.visible = false;
    restart.visible = false;
    
    obstaclesGroup.destroyEach();
    cloudsGroup.destroyEach();
    
    if(localStorage["HighestScore"]<score){
      localStorage["HighestScore"] = score;
    }
    console.log(localStorage["HighestScore"]);
    
    score = 0;
    score1 = 0;
  }
