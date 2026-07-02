function checkPassword() {
            var password = document.getElementById("passwordInput").value;
            // Setting the password
            if (password === "RebeccaWuIsAnUnc6767") {
                showMessageScreen(); // The hidden page
            } else {
                alert("Incorrect password! Try again.");
            }
        }

function showMessageScreen() {
    document.getElementById("passwordScreen").classList.add("hidden");
    document.getElementById("messageScreen").classList.remove("hidden");
}
