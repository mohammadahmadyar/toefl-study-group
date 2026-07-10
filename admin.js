import {
    db,
    auth
} from "./firebase.js";

import {
    collection,
    addDoc,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";


// =========================
// Create Exam
// =========================

const button = document.getElementById("addExam");

button.addEventListener("click", async () => {

    try {

        const title = document.getElementById("examTitle").value;
        const question = document.getElementById("question").value;

        await addDoc(
            collection(db, "exams"),
            {
                title: title,
                questions: [question],
                createdBy: auth.currentUser.uid,
                date: new Date()
            }
        );

        alert("Exam created successfully");

        location.reload();

    } catch (error) {

        alert(error.message);
        console.log(error);

    }

});


// =========================
// Show Student Answers
// =========================

const answersList = document.getElementById("answersList");

try {

    const snapshot = await getDocs(
        collection(db, "answers")
    );

    snapshot.forEach((doc) => {

        const answer = doc.data();

        answersList.innerHTML += `
            <div style="border:1px solid #ccc;padding:10px;margin:10px;border-radius:8px;">
                <h3>Student ID</h3>
                <p>${answer.studentId}</p>

                <h4>Answers</h4>
                <p>${answer.answers.join("<br>")}</p>
            </div>
        `;

    });

} catch (error) {

    console.log(error);

}
