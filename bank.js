document.getElementById("login-submit").addEventListener("click", () => {
  // get user email
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  //get user password
  const passwordField = document.getElementById("user-password");
  const userPassword = passwordField.value;
  //check email & password
  if (userEmail === "soton@gmail.com" && userPassword === "123456789") {
    window.location.href = "banking.html";
  }
  //   console.log(userEmail, userPassword);
});
