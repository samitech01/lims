const signupBtn = document.getElementById('signupBtn');
        const signupEmail = document.getElementById('signupEmail');
        const signupPassword = document.getElementById('signupPassword');
        const confirmPassword = document.getElementById('confirmPassword');
        const showSignupPassword = document.getElementById('showSignupPassword');
        const loginEmail = document.getElementById('loginEmail');
        const loginPassword = document.getElementById('loginPassword');
        const loginBtn = document.getElementById('loginBtn');
        const showLoginPassword = document.getElementById('showLoginPassword');
        const check = document.getElementById('check');

        showLoginPassword.addEventListener('click', function() {
            loginPassword.type = loginPassword.type === "password" ? "text" : "password";
        });

        showSignupPassword.addEventListener('click', function() {
            const type = signupPassword.type === "password" ? "text" : "password";
            signupPassword.type = type;
            confirmPassword.type = type;
        });

        signupBtn.addEventListener('click', function() {
            if (signupPassword.value !== confirmPassword.value) {
                alert("Passwords do not match!");
                return;
            }
            loginEmail.value = signupEmail.value;
            loginPassword.value = signupPassword.value;
            check.checked = false;
        });

        loginBtn.addEventListener('click', function() {
            const email = loginEmail.value;
            const password = loginPassword.value;

            if (email === "test" && password === "123") {
                window.location.href = "welcom.html"; 
            } else {
                alert("Invalid login credentials. Please try again.");
            }
        });