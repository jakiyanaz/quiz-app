let getname = document.getElementById('getname');
let totaltime = document.getElementById('totaltime');
let correctans = document.getElementById('correctans');
let incorrectans = document.getElementById('incorrectans');
let percentile = document.getElementById('percentile');


function fndisplayresult(){
getname.innerText = localStorage.getItem('name');
totaltime.innerText = localStorage.getItem('totaltime');
correctans.innerText = localStorage.getItem('correct');
incorrectans.innerText = localStorage.getItem('incorrect');
percentile.innerText = localStorage.getItem('percent');
}
fndisplayresult();