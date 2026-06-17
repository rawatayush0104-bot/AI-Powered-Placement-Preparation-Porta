// Register User
function register() {

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!username || !email || !password || !confirmPassword) {
        alert("Please fill all fields");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    const user = {
        username,
        email,
        password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful!");
    window.location.href = "login.html";
}
// Login User

function login() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("No user found. Please register first.");
        return;
    }

    if (email === user.email && password === user.password) {

        localStorage.setItem("isLoggedIn", "true");

        localStorage.setItem("username", user.username);

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid Email or Password");

    }
}
// Logout User

function logout() {

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");

    alert("Logged Out Successfully!");

    window.location.href = "index.html";
}

// Protect Dashboard Pages


function checkLogin() {

    if (localStorage.getItem("isLoggedIn") !== "true") {

        alert("Please login first");

        window.location.href = "login.html";

    }

}