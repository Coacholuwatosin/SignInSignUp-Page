const signIn = () => {
    let allUser = JSON.parse(localStorage.getItem('userDetails'));
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let username = document.getElementById('username');
    let userFound = false;

    if (allUser) {
        for (let index = 0; index < allUser.length; index++) {
            if (email.value == allUser[index].email || username.value == allUser[index].username && password.value == allUser[index].password) {
                localStorage.setItem('localIndex', index);
                userFound = true;
                break;
            }
        }

        if (userFound) {
            alert('Welcome');
            window.location.href ='/Result/result.html';
        } else {
            alert('User Not Found');
        }
    } else {
        alert('No users signed up yet');
    }
};
