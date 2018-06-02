// Creates and shows a message dependent on entity.messageType
MainUI.prototype.showMessage = function(entity) {
  var message;
  switch (entity.messageType) {
    case "HumanMessage":
      if (Math.random() < 0.5)
        message += "Hello";
      else
        message += "Hi";
      break;
    case "ZombieMessage":
      message = entity.enemyPrefix;
      var rand = Math.random();
      if (rand < 0.33)
        message += "Brains";
      else if (rand < 0.67)
        message += "Uuuuh";
      else
        message += "Wouoo";
      break;
    case "MonsterMessage":
      message = entity.enemyPrefix + "Grrr";
      break;
    case "DogMessage":
      message = entity.enemyPrefix + "Woof";
      break;
    case "CatMessage":
      if (Math.random() < 0.5)
        message = "Meow";
      else
        message = "Hiss";
      break;
    case "CowMessage":
      message = "Muuu";
      break;
    case "CarMessage":
      message = "Wroom";
      break;
    case "VampireMessage":
      message = entity.enemyPrefix + "I want your blood";
      break;
    case "GoatMessage":
      message = "Baah"
      break;
  }
  renderMessage(message);
};
