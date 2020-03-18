// JavaScript Document
let name = document.getElementById('name');
let email = document.getElementById('email');
let msg = document.getElementById('msg');
let subm = document.getElementById('subm');
let regName = /^[a-zA-Z]{2,}$/;
let regEmail = /^[a-zA-Z0-9_]+@[a-zA-Z]+\.[a-z]{3,6}$/;
let check = document.getElementById('check');
subm.addEventListener('click', (e)=>{
    
    if(regName.test(name.value)){
          if(regEmail.test(email.value)){
              if(msg.value){
                  subm.submit();
              }
              else{
                  
                  check.innerHTML = 'msg empty';
              }
          }
    }
    check.style.display = 'block';
    e.preventDefault();
});
document.querySelector('.alert-btn').addEventListener('click', ()=>{
    document.querySelector('.alert').style.display = 'none';
});