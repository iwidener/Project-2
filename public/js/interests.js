$(document).ready(function() {
  var interestForm = $(".interestForm");
  interestForm.on("submit", function(event) {
    var interests = $(this).serializeArray();
    event.preventDefault();
    $.post("/api/userinterests", {
      id: interests[0].name,
      name: interests[0].value
    }).then(function() {
      window.location.replace("/userinterests");
      console.log("these interests: " + JSON.stringify(interests));

      console.log("hi");
    });
   });
  });