let count = 0;

const countEl = document.querySelector(".counte-el");

const resetbtn = document.getElementById("reset")

resetbtn.addEventListener("click",reset);


function decrement(){
    count -- ;
    if(count < 0){
        count = 0;
    }
    countEl.innerHTML = count;
}

function increment(){
    count ++ ;
    countEl.innerHTML = count;
}

function reset(){
    count = 0;
    countEl.innerHTML = count;
}



