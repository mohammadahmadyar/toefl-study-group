import {
    db,
    auth
} from "./firebase.js";


import {
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";



document.getElementById("addExam")
.addEventListener("click", async()=>{


const title =
document.getElementById("examTitle").value;


const question =
document.getElementById("question").value;



await addDoc(
collection(db,"exams"),
{

title:title,

questions:[
question
],

date:new Date(),

createdBy:auth.currentUser.uid

}

);



alert("Exam created");


});
