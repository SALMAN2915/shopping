// function openAuthModal() {
//     document.getElementById('auth-modal').style.display = 'block';
// }

// function closeAuthModal() {
//     document.getElementById('auth-modal').style.display = 'none';
// }

// login/signup
function openAuthModal() {
    document.getElementById('auth-modal').style.display = 'block';
    showLogin();
}

function closeAuthModal() {
    document.getElementById('auth-modal').style.display = 'none';
}

function showLogin() {
    document.getElementById('login').style.display = 'block';
    document.getElementById('signup').style.display = 'none';
}

function showSignup() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('signup').style.display = 'block';
}

window.onclick = function (event) {
    if (event.target == document.getElementById('auth-modal')) {
        closeAuthModal();
    }
}
// login/signup end

// message login first

// Function to show login message when a button is clicked
    function showLoginMessage() {
        alert("Please login first");
    }