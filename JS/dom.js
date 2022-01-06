
 
const form=document.getElementById("my-form");
console.log(form);
const data=document.querySelectorAll("li");
const fil=data.forEach(datas=>{
    if(datas.innerText>0)
   console.log(datas);
})

const change=document.querySelector('.users');
change.children[0].innerHTML='<h1>Hello</h1>'
change.lastElementChild.innerText="last element";
const btn=document.querySelector('.btn');
btn.addEventListener('mouseover', (e)=>{
    // e.preventDefault();
    document.querySelector('.btn').style.background='red';
});btn.addEventListener('mouseout', (e)=>{
    // e.preventDefault();
    document.querySelector('.btn').style.background='white';
});
const reset=document.querySelector('.reset');
reset.addEventListener('click', (r)=>{
    r.preventDefault();
   const user= document.querySelector('.users');
   user.remove();
})
//single element selector





//multi element selector


