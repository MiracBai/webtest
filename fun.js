let counter=0;
let autocounter=0;
function count(){
    counter++;
    document.querySelector('h1').innerHTML=counter;
}
function clearcount(){
    counter=0;
    document.querySelector('h1').innerHTML=counter;
}
document.addEventListener('DOMContentLoaded',function(){



    document.getElementById('button1').addEventListener('click', function() {
    this.classList.add('red');
    document.body.innerHTML += '<p class="red">Incorrect</p>';
});

document.getElementById('button2').addEventListener('click', function() {
    this.classList.add('red');
    document.body.innerHTML += '<p class="red">Incorrect</p>';
});

document.getElementById('button3').addEventListener('click', function() {
    this.classList.add('green');
    document.body.innerHTML += '<p class="green">Correct</p>';
});

document.getElementById('checkButton').addEventListener('click', function() {
    var inputText = document.getElementById('inputField').value.trim();
    
    if (inputText.toUpperCase() === 'MIRAC') {
        alert('Correct');
    } else {
        alert('Incorrect');
    }
});
    
    document.querySelector('select').onchange=function(){
        document.querySelector('h1').style.color=this.value;
    }

    

    setInterval(autocount,1000);

    document.getElementById('clearauto').addEventListener('click', function() {
    autocounter=0;
    console.log(autocounter);
    localStorage.setItem('autocounter',autocounter);
    document.querySelector('h2').innerHTML=autocounter;
});
});
if(!localStorage.getItem('autocounter')){
    localStorage.setItem('autocounter',0)
}

function autocount(){
    autocounter=localStorage.getItem('autocounter');
    autocounter++;
    document.querySelector('h2').innerHTML=autocounter;
    localStorage.setItem('autocounter',autocounter)
}

function changerotate(){
    if(document.getElementById('rotatetext').style.animationPlayState=='running'){
        document.getElementById('rotatetext').style.animationPlayState='paused';
    }
    else
    document.getElementById('rotatetext').style.animationPlayState='running';
}