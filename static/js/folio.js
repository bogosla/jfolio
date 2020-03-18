// JavaScript Document
let name = document.getElementById('name');
let email = document.getElementById('email');
let msg = document.getElementById('msg');
let subm = document.getElementById('subm');
let regName = /^[a-zA-Z]{2,}$/;
let regEmail = /^[a-zA-Z0-9_]+@[a-zA-Z]+\.[a-z]{3,6}$/;
subm.addEventListener('click', (e)=>{
    if(regName.test(name.value)){
        if(regEmail.test(email.value)){
            subm.submit();
        }
    }
    e.preventDefault();
    document.getElementById('check').style.display = 'block';
});
document.querySelector('.alert-btn').addEventListener('click', ()=>{
    document.querySelector('.alert').style.display = 'none';
});