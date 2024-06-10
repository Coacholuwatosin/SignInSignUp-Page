let allUser = [];

const signUp = () => {
    let user = {
        username: username.value,
        email: emailAddress.value,
        password: password.value
    };
    if (username.value == '' || emailAddress.value == '' || password.value == '') {
        alert('Kindly fill the required space and sign up');
    } else {
        allUser.push(user);
        alert('Registration Successful');
    }
    localStorage.setItem('userDetails', JSON.stringify(allUser));
    window.location.href = '../SignIn/signin.html';
    username.value = '';     
    emailAddress.value = '';
    password.value = '';
};