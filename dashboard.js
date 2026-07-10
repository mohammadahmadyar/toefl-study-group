import {
    db
} from "./firebase.js";


import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";


const examList = document.getElementById("examList");


const examsSnapshot = await getDocs(
    collection(db,"exams")
);



examsSnapshot.forEach((doc)=>{


    const exam = doc.data();


    examList.innerHTML += `
<div>

<h3>${exam.title}</h3>

<button onclick="startExam('${doc.id}')">
Start Test
</button>

</div>
`;


});
window.startExam = function(id){

    localStorage.setItem("examId", id);

    window.location = "exam.html";

}
