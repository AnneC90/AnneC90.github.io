var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
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
    function createSawBlade(x, y) {
      var hitZoneSize = 25; //gray circle
      var damageFromObstacle = 10;
      var sawBladeHitZone = game.createObstacle(
        hitZoneSize,
        damageFromObstacle
      );
      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone);
      var obstacleImage = draw.bitmap("img/sawblade.png");
      sawBladeHitZone.addChild(obstacleImage);
      obstacleImage.y = -25;
      obstacleImage.x = -25;
    }
    createSawBlade(900, 170);
    createSawBlade(800, 200);
    createSawBlade(300, 1370);
    function createEnemy(x, y) {
      var enemy = game.createGameItem("enemy", 25);
      var redSquare = draw.rect(50, 50, "red");
      redSquare.x = -25;
      redSquare.y = -25;
      enemy.addChild(redSquare);
      enemy.x = x;
      enemy.y = y;
      game.addGameItem(enemy);
      enemy.velocityX = -1;
      enemy.rotationalVelocity = 50000;
      enemy.onPlayerCollision = function () {
        game.changeIntegrity(-10);
      }
        enemy.onProjectileCollision = function onProjectileCollision() {
          game.increaseScore(100);
          enemy.fadeOut();
        };
      };
    
  
    createEnemy(400, groundY - 50);
    createEnemy(800, groundY - 100);
    createEnemy(1000, groundY - 50);
    function createReward(x, y) {
      var reward = game.createGameItem("reward", 25);
      var blueSquare = draw.rect(50, 50, "blue");
      blueSquare.x = -25;
      blueSquare.y = -25;
      reward.addChild(blueSquare);
      reward.x = x;
      reward.y = y;
      game.addGameItem(reward);
      reward.velocityX = -1;
      reward.rotationalVelocity = 50000;
      reward.onPlayerCollision = function () {
        game.changeIntegrity(50);
      };
      function createMarker(x, y) {
   var Marker = game.createGameItem("Marker", 25);
    var graySquare = draw.rect(50, 50, "gray");
      graySquare.x = -25;
      graySquare.y = -25;
      Marker.addChild(graySquare);
      Marker.x = x;
      Marker.y = y;
      game.addGameItem(Marker);
      Marker.velocityX = -1;
      Marker.rotationalVelocity = 50000;
   Marker.onProjectileCollision = startLevel();
   Marker.onProjectileCollision = function () {
     startLevel();
   };
    }

createMarker(1700, groundY - 50)

}
    createReward(600, groundY - 70);

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
