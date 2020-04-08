$(document).ready(function() {
  var numberInput = document.getElementById("number");
  var textInput = document.getElementById("msg");
  var button = document.getElementById("button");
  var response = document.querySelector(".response");

  button.addEventListener("click", send, false);

  var socket = io("http://localhost:8080");
  socket.on("smsStatus", function(data) {
    response.innerHTML =
      "<h5>Text message sent to " +
      data.number +
      "</h5>" +
      "<h4>" +
      data.message +
      "</h4>";
  });

  function send() {
    var number = numberInput.value.replace(/\D/g, " ");
    var text = textInput.value;

    fetch("/", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ number: number, text: text })
    })
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        console.log(data);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});
