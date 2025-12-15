var runLevels = function (window) {
 window.opspark = window.opspark || {};


 var draw = window.opspark.draw;
 var js = window.createjs;
 let currentLevel = 0;


 window.opspark.runLevelInGame = function (game) {
   // some useful constants
   var groundY = game.groundY;


   // this data will allow us to define all of the
   // behavior of our game
   var levelData = window.opspark.levelData;


   // set this to true or false depending on if you want to see hitzones
   game.setDebugMode(true);


   // TODOs 5 through 11 go here
   // BEGIN EDITING YOUR CODE HERE
  function createSawBlade (x,y){
   var hitZoneSize = 25; //gray circle
   var damageFromObstacle = 10;
   var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
   sawBladeHitZone.x = x;
   sawBladeHitZone.y = y;
   game.addGameItem(sawBladeHitZone);
   var obstacleImage = draw.bitmap("img/sawblade.png");
   sawBladeHitZone.addChild(obstacleImage);
   obstacleImage.y  = -25
   obstacleImage.x  = -25
  }
   createSawBlade(400, 450)
  createSawBlade(700, 200)
     createSawBlade(700, 370)
 var enemy = game.createGameItem("enemy", 25);
 var redSquare = draw.rect(50, 50, "red");
   redSquare.x = -25;
   redSquare.y = -25;
   enemy.addChild(redSquare);
   enemy.x = 400;
   enemy.y = groundY - 80;
  game.addGameItem(enemy);
  enemy.velocityX = -1
  enemy.rotationalVelocity = 50000
  enemy.onPlayerCollision = function () {game.changeIntegrity(-10)


  };






   function startLevel() {
     // TODO 13 goes below here






     //////////////////////////////////////////////
     // DO NOT EDIT CODE BELOW HERE
     //////////////////////////////////////////////
     if (++currentLevel === levelData.length) {
       startLevel = () => {
         console.log("Congratulations!");
       };
     }
   }
   startLevel();
 };
};


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
 typeof process !== "undefined" &&
 typeof process.versions.node !== "undefined"
) {
 // here, export any references you need for tests //
 module.exports = runLevels;
}





