function toggleDark() {
  document.body.classList.toggle("dark-mode");
}

function loginUser() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if(user === "admin" && pass === "1234"){
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
}

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if(name === "" || email === "") {
    alert("Please fill all fields");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}