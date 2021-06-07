let timer = document.querySelector(".timer");

let lowbtn = document.querySelector(".low-btn");

let addbtn = document.querySelector(".add-btn");

let intTimer = 0
lowbtn.addEventListener("click",function(){    
    intTimer--;  
    timer.classList.add("red");
    timer.innerText = intTimer;
     
})


addbtn.addEventListener("click",function(){
    intTimer++;    
    timer.classList.add("blue");
    timer.innerText = intTimer;
   
})


