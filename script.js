document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const themeSwitch = document.getElementById("themeSwitch");
    const modeText = document.getElementById("modeText");

    // Fade-in animation for the login box
    setTimeout(() => {
        container.style.opacity = 1;
        container.style.transform = "translateY(0)";
    }, 300);

    // Dynamic button color change on hover
    const btn = document.querySelector(".btn");
    btn.addEventListener("mouseover", () => {
        btn.style.backgroundColor = "#FFA500";
    });
    btn.addEventListener("mouseout", () => {
        btn.style.backgroundColor = "#FFD700";
    });

    // Form submission animation for login
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            btn.textContent = "Logging in...";
            setTimeout(() => {
                btn.textContent = "Login";
                alert("Logged in successfully!");
                loginForm.reset();
            }, 2000);
        });
    }

    // Form submission animation for signup
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            btn.textContent = "Signing up...";
            setTimeout(() => {
                btn.textContent = "Sign Up";
                alert("Signed up successfully!");
                signupForm.reset();
            }, 2000);
        });
    }

    // Theme switcher
    themeSwitch.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode");
        modeText.textContent = document.body.classList.contains("dark-mode") ? "Dark Mode" : "Light Mode";
    });
});
