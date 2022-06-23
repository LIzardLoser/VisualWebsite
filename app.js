'use strict';


function wait(sec) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < sec*1000);
  }

/*const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() 
{  
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme"){
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});*/

const alertButton = document.querySelector('.diffBtn');

alertButton.addEventListener('click', function()
{
    wait(document.getElementById("fdgs").value);
    alert(document.getElementById("inputlable").value);
});

const testingshit = document.querySelector('.testingshit');

testingshit.addEventListener('input', function()
    {
        document.getElementById("Txtbxlb").innerHTML = document.getElementById("inputlable").value;
    });


