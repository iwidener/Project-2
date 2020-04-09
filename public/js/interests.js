$(document).ready(function() {
  var interestForm = $(".interestForm");
  interestForm.on("submit", function(event) {
    var interests = $(this).serializeArray();
    event.preventDefault();
    for (var i = 0; i < interests.length; i++) {
      $.post("/api/userinterests", {
        id: interests[i].name,
        name: interests[i].value
      }).then(function() {
        window.location.replace("/userinterests");
        console.log("these interests: " + JSON.stringify(interests));
      });
    }
  });
});
