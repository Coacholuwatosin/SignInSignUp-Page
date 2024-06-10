document.addEventListener("DOMContentLoaded", function() {
    // Retrieve user information from localStorage
    let userDetails = JSON.parse(localStorage.getItem('userDetails'));

    // Get the userInfo element to display user information
    let userInfoElement = document.getElementById('userInfo');

    // Check if user details exist in localStorage
    if (userDetails && userDetails.length > 0) {

        // Assume displaying username here, you can modify it as needed
        userInfoElement.textContent = `Welcome ${userDetails[0].username}, Your address is ${userDetails[0].email}!`;
    } else {
        userInfoElement.textContent = "No user information found.";
    }
});
