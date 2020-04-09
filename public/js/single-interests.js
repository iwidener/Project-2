$(document).ready(function() {
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });

  var emails = $("a#email");
  var emailArray = [];

  for (var i = 0; i < emails.length; i++) {
    emailArray.push(emails[i].text);
  }
  console.log(emailArray);
});
