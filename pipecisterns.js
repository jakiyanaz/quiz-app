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
        "question": "A pump can fill a tank with water in 2 hours. Because of a leak, it took 2 hours to fill the tank. The leak can drain all the water of the tank in:",
        "rightanswer": "14 hours",
        "wronganswers": ["7 hours", "4 hours", "8 hours"]
    },

    {
        "id": 2,
        "question": "Two pipes A and B can fill a cistern in 37.5 minutes and 45 minutes respectively. Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after:",
        "rightanswer": "9 min",
        "wronganswers": ["4 min", "8 min", "2 min"]
    },

    {
        "id": 3,
        "question": "A tank is filled by three pipes with uniform flow. The first two pipes operating simultaneously fill the tank in the same time during which the tank is filled by the third pipe alone. The second pipe fills the tank 5 hours faster than the first pipe and 4 hours slower than the third pipe. The time required by the first pipe is:",
        "rightanswer": "15 hours",
        "wronganswers": ["18 hours", "14 hours", "10 hours"]
    },

    {
        "id": 4,
        "question": "Two pipes can fill a tank in 20 and 24 minutes respectively and a waste pipe can empty 3 gallons per minute. All the three pipes working together can fill the tank in 15 minutes. The capacity of the tank is:",
        "rightanswer": "120 gallons",
        "wronganswers": ["20 gallons", "60 gallons", "100 gallons"]
    },

    {
        "id": 5,
        "question": "A tank is filled in 5 hours by three pipes A, B and C. The pipe C is twice as fast as B and B is twice as fast as A. How much time will pipe A alone take to fill the tank?",
        "rightanswer": "35 hours",
        "wronganswers":["15 hours", "39 hours", "45 hours"]
    },

    {
        "id": 6,
        "question": "Two pipes A and B together can fill a cistern in 4 hours. Had they been opened separately, then B would have taken 6 hours more than A to fill the cistern. How much time will be taken by A to fill the cistern separately?",
        "rightanswer": "6 hours",
        "wronganswers": ["8 hours", "5 hours", "9 hours"]
    },

    {
        "id": 7,
        "question": "Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long will it take to fill the tank?",
        "rightanswer": "12 min",
        "wronganswers": ["10 min", "11 min", "13 min"]
    },

    {
        "id": 8,
        "question": "Two pipes A and B can fill a tank in 15 minutes and 20 minutes respectively. Both the pipes are opened together but after 4 minutes, pipe A is turned off. What is the total time required to fill the tank?",
        "rightanswer": "14 min. 40 sec",
        "wronganswers":["14 min. 4 sec", "13 min. 40 sec", "14 min. 25 sec"]
    },

    {
        "id": 9,
        "question": "One pipe can fill a tank three times as fast as another pipe. If together the two pipes can fill the tank in 36 minutes, then the slower pipe alone will be able to fill the tank in:",
        "rightanswer": "144 min",
        "wronganswers": ["140 min", "44 min", "14 min"]
    },

    {
        "id": 10,
        "question": "A large tanker can be filled by two pipes A and B in 60 minutes and 40 minutes respectively. How many minutes will it take to fill the tanker from empty state if B is used for half the time and A and B fill it together for the other half?",
        "rightanswer": "30 min",
        "wronganswers": ["23 min", "31 min", "20 min"]
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