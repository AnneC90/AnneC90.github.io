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
    createSawBlade(400, 325);
    createSawBlade(700, 200);
    createSawBlade(700, 370);
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
        enemy.onProjectileCollision = function onProjectileCollision() {
          game.increaseScore(100);
          enemy.fadeOut(); 
        }; 
    };
  };
    createEnemy(400, groundY - 10);
    createEnemy(800, groundY - 100);
    createEnemy(1500, groundY - 50);
function createReward (x, y){
   var Reward = game.createGameItem("Reward", 25);
      var blueSquare = draw.rect(50, 50, "blue");
      blueSquare.x = -25;
      blueSquare.y = -25;
      Reward.addChild(blueSquare);
      Reward.x = x;
      Reward.y = y;
      game.addGameItem(Reward);
      Reward.velocityX = -1;
      Reward.rotationalVelocity = 50000;
      Reward.onPlayerCollision = function () {
        game.changeIntegrity(50);
      }
}
  createReward(600, groundY - 70)

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
