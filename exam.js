import {
db,
auth
}
from "./firebase.js";


import {
doc,
getDoc,
collection,
addDoc
}
from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";


const examId =
localStorage.getItem("examId");


const examDoc =
await getDoc(
doc(db,"exams",examId)
);


const exam =
examDoc.data();


document.getElementById("title").innerHTML =
exam.title;


const container =
document.getElementById("questions");


exam.questions.forEach((q,index)=>{

container.innerHTML+=`

<p>${q}</p>

<textarea id="answer${index}"></textarea>

`;

});



document
.getElementById("submitExam")
.onclick=async()=>{


const answers=[];


exam.questions.forEach((q,index)=>{

answers.push(

document
.getElementById("answer"+index)
.value

);

});


await addDoc(

collection(db,"answers"),

{

examId,

studentId:auth.currentUser.uid,

answers,

date:new Date()

}

);


alert("Answers submitted");

window.location="dashboard.html";


};