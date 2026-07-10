import {
    db,
    auth
} from "./firebase.js";

import {
    collection,
    addDoc,
    getDocs,
    doc,
    getDoc
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

const snapshot = await getDocs(
    collection(db, "answers")
);

for (const answerDoc of snapshot.docs) {

    const answer = answerDoc.data();

    const studentDoc = await getDoc(
        doc(db, "users", answer.studentId)
    );

    const examDoc = await getDoc(
        doc(db, "exams", answer.examId)
    );

    const studentName = studentDoc.exists()
        ? studentDoc.data().name
        : "Unknown Student";

    const examTitle = examDoc.exists()
        ? examDoc.data().title
        : "Unknown Exam";

    answersList.innerHTML += `

    <div style="border:1px solid #ccc;padding:15px;margin:15px;border-radius:10px;">

        <h2>${studentName}</h2>

        <h3>${examTitle}</h3>

        <h4>Answers</h4>

        <p>${answer.answers.join("<br><br>")}</p>

    </div>

    `;

        }
