import {
    auth,
    db,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "./firebase.js";


import {
    doc,
    setDoc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";
// ---------- REGISTER ----------

const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {

    registerBtn.addEventListener("click", async () => {

        const email = document.getElementById("email").value;

        const password = document.getElementById("password").value;

        try {
const userCredential =
await createUserWithEmailAndPassword(
    auth,
    email,
    password
);


const user = userCredential.user;


let role = "student";

const adminDoc = await getDoc(
    doc(db, "settings", "admin")
);

if (adminDoc.exists()) {

    if (email === adminDoc.data().email) {
        role = "admin";
    }

}


await setDoc(
    doc(db, "users", user.uid),
    {
        name: document.getElementById("name").value,
        email: email,
        role: role,
        createdAt: new Date()
    }
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

            const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
);

const user = userCredential.user;


const userDoc = await getDoc(
    doc(db, "users", user.uid)
);


if(userDoc.exists()){

    const role = userDoc.data().role;


    if(role === "admin"){

        window.location = "admin.html";

    } else {

        window.location = "dashboard.html";

    }

}

        }

        catch (error) {

            alert(error.message);

        }

    });

}
