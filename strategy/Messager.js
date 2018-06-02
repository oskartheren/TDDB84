Messager = function(strategy) {
  this.strategy = strategy;
};
Messager.prototype.getMessage = function() {
  return this.strategy.getMessage();
};
var humanStrategy = function() {
  this.getMessage = function(enemyPrefix) {
    var message;
    if (Math.random() < 0.5)
      message += "Hello";
    else
      message += "Hi";
    return message;
  };
};
var zombieStrategy = function() {
  this.getMessage = function(enemyPrefix) {
    var message = enemyPrefix;
    var rand = Math.random();
    if (rand < 0.33)
      message += "Brains";
    else if (rand < 0.67)
      message += "Uuuuh";
    else
      message += "Wouoo";
    return message;
  };
};
var monsterStrategy = function() {
  this.getMessage = function(enemyPrefix) {
    return enemyPrefix + "Grrr";
  };
};
var dogStrategy = function() {
  this.getMessage = function(enemyPrefix) {
    return enemyPrefix + "Woof";
  };
};
var catStrategy = function() {
  this.getMessage = function(enemyPrefix) {
    var message;
    if (Math.random() < 0.5)
      message = "Meow";
    else
      message = "Hiss";
    return message;
  };
};
var cowStrategy = function() {
  this.getMessage = function(enemyPrefix) {
    return "Muuu";
  };
};
var carStrategy = function() {
  this.getMessage = function(enemyPrefix) {
    return "Wroom";
  };
};
var vampireStrategy = function() {
  this.getMessage = function(enemyPrefix) {
    return enemyPrefix + "I want your blood";
  };
};
var goatStrategy = function() {
  this.getMessage = function(enemyPrefix) {
    return "Baah";
  };
};
