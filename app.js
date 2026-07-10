import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "./firebase.js";


// ---------- REGISTER ----------

const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {

    registerBtn.addEventListener("click", async () => {

        const email = document.getElementById("email").value;

        const password = document.getElementById("password").value;

        try {

            await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            alert("Account created successfully.");

            window.location = "login.html";

        }

        catch (error) {

            alert(error.message);

        }

    });

}



// ---------- LOGIN ----------

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

    loginBtn.addEventListener("click", async () => {

        const email = document.getElementById("email").value;

        const password = document.getElementById("password").value;

        try {

            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            alert("Welcome!");

            window.location = "Index.html";

        }

        catch (error) {

            alert(error.message);

        }

    });

}