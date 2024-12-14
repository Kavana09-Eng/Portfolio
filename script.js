// Sign-up form validation and handling
const signupForm = document.getElementById('signup-form');
const usernameField = document.getElementById('username');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirm-password');

const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');

// Login form validation and handling
const loginForm = document.getElementById('login-form');
const loginEmailField = document.getElementById('login-email');
const loginPasswordField = document.getElementById('login-password');
const loginEmailError = document.getElementById('login-email-error');
const loginPasswordError = document.getElementById('login-password-error');

// Add event listener for Sign-Up form submission
signupForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous errors
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    let valid = true;

    // Validate Username
    if (usernameField.value.trim() === '') {
        usernameError.textContent = 'Username is required.';
        valid = false;
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailField.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        valid = false;
    } else if (!emailPattern.test(emailField.value.trim())) {
        emailError.textContent = 'Please enter a valid email.';
        valid = false;
    }

    // Validate Password
    if (passwordField.value.trim() === '') {
        passwordError.textContent = 'Password is required.';
        valid = false;
    }

    // Validate Confirm Password
    if (confirmPasswordField.value.trim() === '') {
        confirmPasswordError.textContent = 'Confirm Password is required.';
        valid = false;
    } else if (confirmPasswordField.value !== passwordField.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        valid = false;
    }

    // If valid, save user data in localStorage
    if (valid) {
        const userData = {
            username: usernameField.value,
            email: emailField.value,
            password: passwordField.value
        };

        // Store the user data (username and password) in localStorage
        localStorage.setItem('userData', JSON.stringify(userData));

        alert('Sign-Up successful! You can now log in.');
        window.location.href = 'login.html'; // Redirect to login page
    }
});

// Add event listener for Login form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous errors
    loginEmailError.textContent = '';
    loginPasswordError.textContent = '';

    let valid = true;

    // Validate Email
    if (loginEmailField.value.trim() === '') {
        loginEmailError.textContent = 'Email is required.';
        valid = false;
    }

    // Validate Password
    if (loginPasswordField.value.trim() === '') {
        loginPasswordError.textContent = 'Password is required.';
        valid = false;
    }

    // If valid, check if the user data matches stored credentials
    if (valid) {
        const storedUserData = JSON.parse(localStorage.getItem('userData'));

        if (storedUserData) {
            // Check if email and password match
            if (loginEmailField.value === storedUserData.email && loginPasswordField.value === storedUserData.password) {
                alert('Login successful!');
                window.location.href = 'index.html'; // Redirect to homepage after login
            } else {
                loginPasswordError.textContent = 'Invalid email or password.';
            }
        } else {
            loginEmailError.textContent = 'No user data found. Please sign up first.';
        }
    }
});
// Modal and form elements
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const closeLogin = document.getElementById('close-login');
const closeSignup = document.getElementById('close-signup');

// Login form elements
const loginForm = document.getElementById('login-form');
const loginEmailField = document.getElementById('login-email');
const loginPasswordField = document.getElementById('login-password');

// Sign-Up form elements
const signupForm = document.getElementById('signup-form');
const signupUsernameField = document.getElementById('signup-username');
const signupEmailField = document.getElementById('signup-email');
const signupPasswordField = document.getElementById('signup-password');
const signupConfirmPasswordField = document.getElementById('signup-confirm-password');

// Open Login Modal
loginBtn.addEventListener('click', function() {
    loginModal.style.display = 'block';
});

// Open Sign-Up Modal
signupBtn.addEventListener('click', function() {
    signupModal.style.display = 'block';
});

// Close Login Modal
closeLogin.addEventListener('click', function() {
    loginModal.style.display = 'none';
});

// Close Sign-Up Modal
closeSignup.addEventListener('click', function() {
    signupModal.style.display = 'none';
});

// Click outside of the modal to close it
window.addEventListener('click', function(event) {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target === signupModal) {
        signupModal.style.display = 'none';
    }
});

// Sign-Up Form Submission
signupForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Simple validation
    if (signupPasswordField.value !== signupConfirmPasswordField.value) {
        alert('Passwords do not match!');
        return;
    }

    // Store user data in localStorage (for simplicity)
    const userData = {
        username: signupUsernameField.value,
        email: signupEmailField.value,
        password: signupPasswordField.value
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Sign Up successful!');
    signupModal.style.display = 'none';
});

// Login Form Submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get stored user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData) {
        // Validate login credentials
        if (loginEmailField.value === storedUserData.email && loginPasswordField.value === storedUserData.password) {
            alert('Login successful!');
            loginModal.style.display = 'none';
        } else {
            alert('Invalid email or password!');
        }
    } else {
        alert('No user found. Please sign up first.');
    }
});
// Modal Elements
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const closeLogin = document.getElementById('close-login');
const closeSignup = document.getElementById('close-signup');

// Function to show modal
function showModal() {
    // Show the login modal on page load (you can change to signupModal if you want to show the signup form instead)
    loginModal.style.display = 'block';

    // Optionally, you can show the signup modal instead
    // signupModal.style.display = 'block';  // Uncomment this to show signup modal instead of login

    // You can set a timeout to automatically close the modal after a few seconds
    setTimeout(function() {
        loginModal.style.display = 'none';  // Close login modal after 5 seconds
        // signupModal.style.display = 'none'; // If you used the signup modal, close it
    }, 5000); // 5000 milliseconds = 5 seconds
}

// Show the modal when the page loads
window.onload = showModal;

// Close the login modal when the close button is clicked
closeLogin.addEventListener('click', function() {
    loginModal.style.display = 'none';
});

// Close the sign-up modal when the close button is clicked
closeSignup.addEventListener('click', function() {
    signupModal.style.display = 'none';
});

// Close modal when the user clicks outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target === signupModal) {
        signupModal.style.display = 'none';
    }
});
