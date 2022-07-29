let btn = document.createElement('button');
btn.innerHTML="Salmon";
btn.classList.add("btn");
document.body.appendChild(btn);
btn.style.cssText="width:150px; height:90px; background-color:salmon; border:0.5px solid lightgray; border-radius:40px; font-size: 20px; font-weight: bold;";
btn.addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'salmon';    
});
let btn1 = document.createElement('button');
btn1.innerHTML="Red";
btn1.classList.add("btn1");
document.body.appendChild(btn1);
btn1.style.cssText="width:150px; height:80px; background-color:red; border:1px solid lightgray; border-radius:40px; font-size: 20px; font-weight: bold;";
btn1.addEventListener('click', function onClick(event){
    document.body.style.backgroundColor = 'red';    
});
let btn2 = document.createElement('button');
btn2.innerHTML="Blue";
btn2.classList.add("btn2");
document.body.appendChild(btn2);
btn2.style.cssText="width:150px; height:70px; font-weight: bold; background-color:blue; border:1px solid lightgray; border-radius:40px; font-size: 18px; font-weight: bold;";
btn2.addEventListener('click', function onClick(event){
    document.body.style.backgroundColor = 'blue';    
});
let btn3 = document.createElement('button');
btn3.innerHTML="Green";
btn3.classList.add("btn3");
document.body.appendChild(btn3);
btn3.style.cssText="width:150px; height:60px; background-color:green; border:1px solid lightgray; border-radius:40px; font-size: 18px; font-weight: bold;";
btn3.addEventListener('click', function onClick(event){
    document.body.style.backgroundColor = 'green';    
});
let btn4 = document.createElement('button');
btn4.innerHTML="Orange";
btn4.classList.add("btn4");
document.body.appendChild(btn4);
btn4.style.cssText="width:120px; height:50px; background-color:orange; border:1px solid lightgray; border-radius:40px; font-size: 16px; font-weight: bold;";
btn4.addEventListener('click', function onClick(event){
    document.body.style.backgroundColor = 'orange';    
});

document.body.style.cssText="display:flex; justify-content:center; align-items:center; gap:15px; height:95vh;";

