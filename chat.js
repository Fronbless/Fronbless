
document.body.insertAdjacentHTML('beforeend', '<div id="chatbox" style="position:fixed;bottom:0;right:0;width:300px;height:400px;border:1px solid #000;background:#f1f1f1;"><h4 style="margin:0;padding:10px;background:#333;color:#fff;">Chat Fronbless</h4><div id="chatlogs" style="height:300px;overflow-y:scroll;padding:5px;"></div><input type="text" id="chatinput" placeholder="Escribe aquí..." style="width:80%;" onkeydown="if(event.key===\'Enter\')sendMsg()"><button onclick="sendMsg()">Enviar</button></div>');

function sendMsg() {
  var input = document.getElementById('chatinput');
  var msg = input.value;
  if(msg.trim() !== '') {
    var chatlogs = document.getElementById('chatlogs');
    chatlogs.innerHTML += '<div>' + msg + '</div>';
    input.value = '';
  }
}
