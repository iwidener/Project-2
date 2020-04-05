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
  var interestForm = $(".interestForm");
  var interestName = $("input.interest");
  $(document).ready(function() {
    var form = $(".interestForm").serialize();
    console.log(form);

    // $("#submit").on("click", function(interest) {
  });

  interestForm.on("submit", function(event) {
    event.preventDefault();
    // var InterestId = interestName.match(/(\d+)/);
    // console.log(InterestId);
    var userInterest = {
      name: interestName.val().trim()
    };

    logInterest(userInterest.name);
  });

  function logInterest(name) {
    $.post("/api/userinterests", {
      interestName: name
    }).then(function() {
      window.location.replace("/members");
    });
  }
});
