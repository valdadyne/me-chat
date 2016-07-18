function sendMsg(){
  var chatroom = document.getElementById ('room').value;
  var message = document.getElementById ('msg').value;
  var AddMsg=(chatroom+";"+message)
  var ListBox= document.getElementById ('history');

  document.getElementById ('history').options=('AddMsg');

}
