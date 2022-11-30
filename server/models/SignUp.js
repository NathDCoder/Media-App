const signUpTemplate = async function(event) {
    event.preventDefault();
    
    const fullNameEl = document.querySelector('#fullName-input-signup');
    const usernameEl = document.querySelector('#username-input-signup');
    const emailEl = document.querySelector('#email-input-signup');
    const passwordEl = document.querySelector('#password-input-signup');

    const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({
            fullName: fullNameEl.value,
            username: usernameEl.value,
            email: emailEl.value,
            password: passwordEl.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {
        document.location.replace('../Pages/Home.js');
    } else {
        alert('Failure to register');
    }
};

module.exports = signUpTemplate;