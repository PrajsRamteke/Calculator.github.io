let screen = document.getElementById("screen");
function display(num){
    screen.value = screen.value + num;
}

function calculate(){
    try{
        screen.value = eval(screen.value);
    }
    catch{
        alert("invalid");
    }
}

let hero=()=>{
    screen.value = "";
}

let clear = document.getElementById("clear");
clear.addEventListener("click", hero);

function del(){
    screen.value = screen.value.slice(0,-1);
}