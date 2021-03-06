function sendMsg(){

  //assign form elements variables

  var myusername = document.querySelector('#username').value;
  var myroom = document.querySelector('#room').value;
  var mymessage = document.querySelector('#msg').value;

  //check that the username has a value
  if (myusername != null) {
    var dbRef = new Firebase('https://me-chat.firebaseio.com/');
    var chatsRef = dbRef.child('chats');

    chatsRef.push().set({
          chatroom:myroom,
          username:myusername,
          message: mymessage,
      });
  }
  else{alert("I am an alert box!");}

    chatsRef.on('child_added', function (snapshot) {
    var data = snapshot.val();
    displayChatMessage(data.username, data.chatroom,data.message);
  })
}

function displayChatMessage(username,chatroom, message) {
  $('<div/>').text(message).prepend($('<em/>').text(chatroom+'/'+username + ': ')).appendTo($('#history'));
  $('#history')[0].scrollTop = $('#history')[0].scrollHeight;
};
