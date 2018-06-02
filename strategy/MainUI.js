// Creates and shows a message dependent on entity.messageStategy
MainUI.prototype.showMessage = function(entity) {
  var messager = new Messager(entity.messageStrategy);
  var message = messager.getMessage(entity.enemyPrefix);
  renderMessage(message);
};
