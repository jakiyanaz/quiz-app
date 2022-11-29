
// getting elements in variables through id
let category1 = document.getElementById('category1');
let category2 = document.getElementById('category2');
let category3 = document.getElementById('category3');
let category4 = document.getElementById('category4');
let txtname = document.getElementById('txtname');
let btnenter = document.getElementById('btnenter');
let errname = document.getElementById('errname');

// Function for body onload()
function fnonload(){
    category1.disabled = true;
    category2.disabled = true;
    category3.disabled = true;
    category4.disabled = true;
}

// Validating user name and providing access to categories
function fnbtnenter(){
    let nameval = txtname.value;
    let namechk = /^[A-Za-z ]{3,30}$/
    if(namechk.test(nameval)){
        category1.disabled = false;
        category2.disabled = false;
        category3.disabled = false;
        category4.disabled = false;
        txtname.disabled = true;
        btnenter.disabled = true;
        errname.innerText = "";
        localStorage.setItem('name', nameval);
        // console.log(localStorage.getItem('name'));
    }else{
        errname.innerText = "Enter valid name";
    }
}

function fngetname(){
    let namevalue = txtname.value;
}

