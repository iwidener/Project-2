// $(document).ready(function() {
//     var interestForm = $(".interestForm");
//     interestForm.on("submit", function(event) {
//       event.preventDefault();
//       $.post("/api/userinterest", {
//         UserId: "1",
//         InterestId: "1"
//       }).then(function() {
//         window.location.replace("/members");
//       });
//     });
//   });

$(document).ready(function() {
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
    console.log(data.id);
  });
  var interestForm = $(".interestForm");
  var interestName = $("input.interest");

  interestForm.on("submit", function(event) {
    event.preventDefault();
    var userInterest = {
      name: interestName.val().trim()
    };

    showInterest(userInterest.name);
  });

  function showInterest(name) {
    $.post("/api/userinterests", {
      interestName: name
    }).then(function() {
      window.location.replace("/members");
    });
  }
});
