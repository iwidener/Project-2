$(document).ready(function() {
  var interestForm = $(".interestForm");
  interestForm.on("submit", function(event) {
    var interests = $(this).serializeArray();
    event.preventDefault();
    $.post("/api/userinterests", {
      id: interests[0].name
    }).then(function() {
      window.location.replace("/members");
    });
  });

  $.get("/api/user_data").then(function(user) {
    console.log(user);
    return $.get("/api/authors/" + user.id).then(function(userWithInterests) {
      userData = userWithInterests;
      console.log("current user is: ", userWithInterests);
    });
  });
});
