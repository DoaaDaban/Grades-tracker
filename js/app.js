'use strict'

let table= document.getElementById('GradesTable');

let form= document.getElementById('GradesForm');

form.addEventListener('submit',handleSubmission);

Grade.allGrades=[];

let headerArr=['Student name','Student Grade','Course', 'status'];


function Grade(studentName,course){
this.name=studentName;
this.course=course;
this.grade=calculateGrades();
this.status='';

Grade.allGrades.push(this);
}


function handleSubmission(event){
event.preventDefault();

let newStudenName= event.target.studentName.value;

let newCourse= event.target.courseName.value;
let neGrades= new Grade(newStudenName,newCourse);

neGrades.renderGrade();

localStorage.setItem('Grades', JSON.stringify(Grade.allGrades));
}


function renderHeader(){
    let tr1= document.createElement('tr');

for (let i = 0; i < headerArr.length; i++) {
    let th1= document.createElement('th');
    th1.textContent=headerArr[i];
    table.appendChild(tr1);
    tr1.appendChild(th1);
}
}

Grade.prototype.renderGrade= function(){

    let tr2= document.createElement('tr');

    let td2=document.createElement('td')
    td2.textContent= this.name;

    let td3=document.createElement('td')
    td3.textContent= this.course;

    let td4=document.createElement('td')
    td4.textContent= this.grade;

    let td5=document.createElement('td')
    td5.textContent= this.status;


    table.appendChild(tr2);
    tr2.appendChild(td2);
    tr2.appendChild(td3);
    tr2.appendChild(td4);
    tr2.appendChild(td5);

}

function checkLS(){
    if(localStorage.getItem('Grades')){
        Grade.allGrades= JSON.parse(localStorage.getItem('Grades'));
    }
}

function renderAgain(){
    for (let i = 0; i < Grade.allGrades.length; i++) {
        let tr2= document.createElement('tr');

        let td2=document.createElement('td')
        td2.textContent= Grade.allGrades[i].name;
    
        let td3=document.createElement('td')
        td3.textContent= Grade.allGrades[i].course;
    
        let td4=document.createElement('td')
        td4.textContent= Grade.allGrades[i].grade;

        let td5=document.createElement('td')
        td5.textContent= Grade.allGrades[i].status;

    
    
        table.appendChild(tr2);
        tr2.appendChild(td2);
        tr2.appendChild(td3);
        tr2.appendChild(td4);
        tr2.appendChild(td5);
        
    }
}

function calculateGrades(){
    return Math.floor(Math.random() * (100-0) + 1);
}

function handleStatus(){
    for (let i = 0; i < Grade.allGrades.length; i++) {
        if(Grade.allGrades[i]>50){
            Grade.allGrades[i].status='Pass';
        }
        else if(Grade.allGrades[i]<50){
            Grade.allGrades[i].status='fail';
        }
    }
    localStorage.setItem('Grades',JSON.stringify(Grade.allGrades));
    Grade.allGrades= JSON.parse(JSON.stringify(Grade.allGrades));

}

renderHeader();
checkLS();
renderAgain();
calculateGrades();
handleStatus();