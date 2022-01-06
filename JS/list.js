const form=document.querySelector('#my-form');
const name=document.querySelector('#name');
const email=document.querySelector('#email');
const msg=document.querySelector('.msg');
const users=document.querySelector('.users');
form.addEventListener('submit',onsubmit);

function onsubmit(e){
    e.preventDefault();
    if(name.value==''|| email.value==''){
       msg.innerHTML='<h3>Enter all Fields</h3>'
       setTimeout(()=> msg.remove(), 2000);
    }
    else{
        const li= document.createElement('li');
        li.appendChild(document.createTextNode(`${name.value} :
        ${email.value}`));
        users.appendChild(li);
        //clear fieelds
        name.value='';
        email.value='';
      
    }
}
