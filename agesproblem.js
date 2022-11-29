// Getting required elements in variables
let ptimer = document.getElementById('ptimer');
let ptimervalue = ptimer.innerText;
let ques = document.getElementById('ques');
let btnnext = document.getElementById('btnnext');
let thisqnum = document.getElementById('thisqnum');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let option4 = document.getElementById('option4');
let btnresult = document.getElementById('btnresult');
let correctans = document.getElementById('correctans');
let incorrectans = document.getElementById('incorrectans');
let getname = document.getElementById('getname');
let percent = document.getElementById('percent');
let ttt = document.getElementById('ttt');
btnresult.style.display = "none";

// Making Timer
let timer;
function starttimer(){
    let sec = 14;
    timer = setInterval(()=>{
        ptimer.innerText = sec;
        sec--;
        if(ptimer.innerText == 0){
            clearInterval(timer);
            alert('Time Over, Restart The Quiz')
            location.href='index.html';
        }
    }, 1000)
}
starttimer();

/*const interval = setInterval(fndecrease, 1000);
function fndecrease(){
    if(ptimervalue == 0){
        clearInterval(interval);
        alert("Time Up");
    }else{
    ptimervalue--;
    ptimer.innerText = ptimervalue;
    }
}*/

// The question part
let arrquestion = [
    {
        "id": 1,
        "question": "Father is aged three times more than his son Ronit. After 8 years, he would be two and a half times of Ronit's age. After further 8 years, how many times would he be of Ronit's age?",
        "rightanswer": "2 times",
        "wronganswers": ["1/2 times", "2/5 times", "1/18 times"]
    },

    {
        "id": 2,
        "question": "The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",
        "rightanswer": "4 years",
        "wronganswers": ["8 Years", "9 Years", "None of these"]
    },

    {
        "id": 3,
        "question": "A father said to his son, 'I was as old as you are at the present at the time of your birth'. If the father's age is 38 years now, the son's age five years back was:",
        "rightanswer": "14 years",
        "wronganswers": ["13 Years", "15 years", "17 years"]
    },

    {
        "id": 4,
        "question": "A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?",
        "rightanswer": "10",
        "wronganswers": ["14", "17", "12"]
    },

    {
        "id": 5,
        "question": "Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively. Three years hence, the ratio of their ages will become 11 : 9 respectively. What is Anand's present age in years?",
        "rightanswer": "24",
        "wronganswers":["29", "22", "34"]
    },

    {
        "id": 6,
        "question": "A man is 24 years older than his son. In two years, his age will be twice the age of his son. The present age of his son is:",
        "rightanswer": "22 years",
        "wronganswers": ["12 years", "19 years", "23 years"]
    },

    {
        "id": 7,
        "question": "Six years ago, the ratio of the ages of Kunal and Sagar was 6 : 5. Four years hence, the ratio of their ages will be 11 : 10. What is Sagar's age at present?",
        "rightanswer": "16 years",
        "wronganswers": ["14 years", "15 years", "17 years"]
    },

    {
        "id": 8,
        "question": "The sum of the present ages of a father and his son is 60 years. Six years ago, father's age was five times the age of the son. After 6 years, son's age will be:",
        "rightanswer": "20 years",
        "wronganswers":["22 years", "24 years", "33 years"]
    },

    {
        "id": 9,
        "question": "At present, the ratio between the ages of Arun and Deepak is 4 : 3. After 6 years, Arun's age will be 26 years. What is the age of Deepak at present ?",
        "rightanswer": "15 years",
        "wronganswers": ["14 years", "18 years", "38 years"]
    },

    {
        "id": 10,
        "question": "Sachin is younger than Rahul by 7 years. If their ages are in the respective ratio of 7 : 9, how old is Sachin?",
        "rightanswer": "24.5 years",
        "wronganswers": ["25 years", "25.7 years", "22 years"]
    }
];

//Function to be performed at body onload()
let activeques;
let arrfirst;
function fnonload(){
    arrfirst = 0;

    ques.innerText = arrquestion[arrfirst].question;
    thisqnum.innerText = 1;
    option1.value = arrquestion[arrfirst].wronganswers[0];
    option2.value = arrquestion[arrfirst].rightanswer;
    option3.value = arrquestion[arrfirst].wronganswers[1];
    option4.value = arrquestion[arrfirst].wronganswers[2];
    activeques = ques.innerText;
}

//Function to be performed on next button click
let index;
function fnnext(){
    // clearInterval(timer);
    starttimer();
    /*arrfirst += 1;
    ques.innerText = arrquestion[arrfirst].question;*/
    let a = 1;
    index = arrquestion.findIndex(Object => {
        return Object.question === ques.innerText;
    })+a;
    ques.innerText = arrquestion[index].question;
    // console.log(index);

    if(index === 1 || index === 3){
        option1.value = arrquestion[index].wronganswers[0];
        option2.value = arrquestion[index].wronganswers[1];
        option3.value = arrquestion[index].rightanswer;
        option4.value = arrquestion[index].wronganswers[2];
    }
    else if(index === 2 || index === 4 || index === 5){
        option1.value = arrquestion[index].rightanswer;
        option2.value = arrquestion[index].wronganswers[0];
        option3.value = arrquestion[index].wronganswers[1];
        option4.value = arrquestion[index].wronganswers[2];
    }
    else if(index === 6 || index === 8){
        option1.value = arrquestion[index].wronganswers[0];
        option2.value = arrquestion[index].rightanswer;
        option3.value = arrquestion[index].wronganswers[1];
        option4.value = arrquestion[index].wronganswers[2];
    }
    else if(index === 9 || index === 7){
        option1.value = arrquestion[index].wronganswers[2];
        option2.value = arrquestion[index].wronganswers[0];
        option3.value = arrquestion[index].wronganswers[1];
        option4.value = arrquestion[index].rightanswer;
    }

    if(index == 9){
        btnnext.style.display = "none";
        btnresult.style.display = "block";
    }

    thisqnum.innerText = index + 1;

    option1.disabled = false;
    option2.disabled = false;
    option3.disabled = false;
    option4.disabled = false;

    option1.style.backgroundColor = "palegreen";
    option2.style.backgroundColor = "palegreen";
    option3.style.backgroundColor = "palegreen";
    option4.style.backgroundColor = "palegreen";
    option1.style.color = "black";
    option2.style.color = "black";
    option3.style.color = "black";
    option4.style.color = "black";
}


let a;
let rightans;
let currqnum;
let btnid;
let totaltime = 0;
function fnoption(btn){
    function timing(){
    clearInterval(timer);
    console.log(ptimer.innerText);
    let time = 15 - ptimer.innerText;
    console.log(time);
    totaltime += time;
    console.log(totaltime);
    }timing();

    btnid = btn.id;
    currqnum = thisqnum.innerText;
    // console.log(currqnum);
    // a = 0;

    if(index == undefined && btnid == "option2"){
        a = 1;
        console.log("Right Answer");
    }
    else if(index == undefined && (btnid == "option1" || btnid == "option3" || btnid == "option4")){
        console.log("Wrong Answer");
        a = 0;
    }
    if((index == 6 || index == 8) && btnid == "option2"){
        console.log("Right Answer");
        a += 1;
    }
    else if((index == 6 || index == 8) && (btnid == "option1" || btnid == "option3" || btnid == "option4")){
        console.log("Wrong Answer");
        a += 0;
    }

    if((index == 1 || index == 3) && btnid == "option3"){
        console.log("Right Answer");
        a += 1;
    }
    else if((index == 1 || index == 3) && (btnid == "option1" || btnid == "option2" || btnid == "option4")){
        console.log("Wrong Answer");
        a += 0;
    }

    if((index == 2 || index == 4 || index == 5) && btnid == "option1"){
        console.log("Right Answer");
        a += 1;
    }
    else if((index == 2 || index == 4 || index == 5) && (btnid == "option2" || btnid == "option3" || btnid == "option4")){
        console.log("Wrong Answer");
        a += 0;
    }

    if((index == 9 || index == 7) && btnid == "option4"){
        console.log("Right Answer");
        a += 1;
    }
    else if((index == 9 || index == 7) && (btnid == "option1" || btnid == "option2" || btnid == "option3")){
        console.log("Wrong Answer");
        a += 0;
    }
    console.log(a );

    let clickedbtn = document.getElementById(btnid);
    clickedbtn.style.backgroundColor = "green";
    clickedbtn.style.color = "white";
    option1.disabled = true;
    option2.disabled = true;
    option3.disabled = true;
    option4.disabled = true;
}

/*const interval = setInterval(fndecrease, 1000);
function fndecrease(){
    if(ptimervalue == 0){
        clearInterval(interval);
        alert("Time Up");
    }else{
    ptimervalue--;
    ptimer.innerText = ptimervalue;
    }
}*/

function fnresult(){
    let b = 10 - a;
    let percentage = (a/10)*100;

    localStorage.setItem('totaltime', totaltime);
    localStorage.setItem('correct', a);
    localStorage.setItem('incorrect', b);
    localStorage.setItem('percent', percentage);
    location.href='result.html';
}