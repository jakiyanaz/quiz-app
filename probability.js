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
        "question": "Tickets numbered 1 to 20 are mixed up and then a ticket is drawn at random. What is the probability that the ticket drawn has a number which is a multiple of 3 or 5?",
        "rightanswer": "9/20",
        "wronganswers": ["1/2", "2/5", "1/18"]
    },

    {
        "id": 2,
        "question": "A bag contains 2 red, 3 green and 2 blue balls. Two balls are drawn at random. What is the probability that none of the balls drawn is blue?",
        "rightanswer": "10/21",
        "wronganswers": ["11/21", "2/7", "5/7"]
    },

    {
        "id": 3,
        "question": "In a box, there are 8 red, 7 blue and 6 green balls. One ball is picked up randomly. What is the probability that it is neither red nor green?",
        "rightanswer": "1/3",
        "wronganswers": ["3/4", "7/19", "8/21"]
    },

    {
        "id": 4,
        "question": "What is the probability of getting a sum 9 from two throws of a dice?",
        "rightanswer": "1/9",
        "wronganswers": ["1/2", "3/4", "5/9"]
    },

    {
        "id": 5,
        "question": "Three unbiased coins are tossed. What is the probability of getting at most two heads?",
        "rightanswer": "7/8",
        "wronganswers":["7/9", "1/9", "4/9"]
    },

    {
        "id": 6,
        "question": "Two dice are thrown simultaneously. What is the probability of getting two numbers whose product is even?",
        "rightanswer": "3/4",
        "wronganswers": ["7/8", "1/4", "1/9"]
    },

    {
        "id": 7,
        "question": "In a class, there are 15 boys and 10 girls. Three students are selected at random. The probability that 1 girl and 2 boys are selected, is:",
        "rightanswer": "21/46",
        "wronganswers": ["21/47", "19/27", "1/4"]
    },

    {
        "id": 8,
        "question": "In a lottery, there are 10 prizes and 25 blanks. A lottery is drawn at random. What is the probability of getting a prize?",
        "rightanswer": "2/7",
        "wronganswers":["1/10", "2/5", "5/7"]
    },

    {
        "id": 9,
        "question": "From a pack of 52 cards, two cards are drawn together at random. What is the probability of both the cards being kings?",
        "rightanswer": "1/221",
        "wronganswers": ["1/15", "25/227", "35/223"]
    },

    {
        "id": 10,
        "question": "Two dice are tossed. The probability that the total score is a prime number is:",
        "rightanswer": "5/12",
        "wronganswers": ["5/7", "7/8", "5/9"]
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