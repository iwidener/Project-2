$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var ageInput = $("input#age-input");
  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      age: ageInput.val().trim()
    };
    if (!userData.email || !userData.password || !userData.age) {
      return;
    } else if (userData.age < 18) {
      alert("You must be 18 years or older to sign up for friendly.");
      return;
    }
    // If we have an email and password, run the signUpUser function
    else {
      signUpUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
      ageInput.val("");
    }
  });
  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    $.post("/api/signup", {
      email: email,
      password: password
    })
      .then(function() {
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }
  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
