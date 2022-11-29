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
        "question": "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",
        "rightanswer": "16",
        "wronganswers": ["15", "12", "18"]
    },

    {
        "id": 2,
        "question": "In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?",
        "rightanswer": "70%",
        "wronganswers": ["50%", "35%", "None of these"]
    },

    {
        "id": 3,
        "question": "A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
        "rightanswer": "5",
        "wronganswers": ["8", "7", "6"]
    },

    {
        "id": 4,
        "question": "The percentage profit earned by selling an article for Rs. 1920 is equal to the percentage loss incurred by selling the same article for Rs. 1280. At what price should the article be sold to make 25% profit?",
        "rightanswer": "2000",
        "wronganswers": ["1000", "200", "3600"]
    },

    {
        "id": 5,
        "question": "A shopkeeper expects a gain of 22.5% on his cost price. If in a week, his sale was of Rs. 392, what was his profit?",
        "rightanswer": "Rs. 72",
        "wronganswers":["Rs. 74", "Rs. 62", "Rs. 78"]
    },

    {
        "id": 6,
        "question": "A man buys a cycle for Rs. 1400 and sells it at a loss of 15%. What is the selling price of the cycle?",
        "rightanswer": "Rs. 1190",
        "wronganswers": ["Rs. 1198", "Rs. 1192", "Rs. 1195"]
    },

    {
        "id": 7,
        "question": "Sam purchased 20 dozens of toys at the rate of Rs. 375 per dozen. He sold each one of them at the rate of Rs. 33. What was his percentage profit?",
        "rightanswer": "5.6",
        "wronganswers": ["7.8", "9.3", "4.5"]
    },

    {
        "id": 8,
        "question": "On selling 17 balls at Rs. 720, there is a loss equal to the cost price of 5 balls. The cost price of a ball is:",
        "rightanswer": "Rs 60",
        "wronganswers":["Rs 75", "Rs 63", "Rs 55"]
    },

    {
        "id": 9,
        "question": "When a plot is sold for Rs.18,700, the owner loses 15%. At what price must that plot be sold in order to gain 15% ?",
        "rightanswer": "25,300",
        "wronganswers": ["28,400", "8,600", "18,800"]
    },

    {
        "id": 10,
        "question": "A trader mixes 26 kg of rice at Rs. 20 per kg with 30 kg of rice of other variety at Rs. 36 per kg and sells the mixture at Rs. 30 per kg. His profit percent is:",
        "rightanswer": "5%",
        "wronganswers": ["No gain,No loss", "15%", "6%"]
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