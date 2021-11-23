// Dark Mode Toggle

const darkSwitch=document.getElementById("darkSwitch");
window.addEventListener("load",(function(){
    if(darkSwitch){
        initDarkSwitch();
        darkSwitch.addEventListener("change",(function(){
            resetDarkSwitch();
        }))
    }
}));

function initDarkSwitch(){
    const darkSwitchSelected=localStorage.getItem("darkSwitch") !==null
        && localStorage.getItem("darkSwitch") === "dark";
    darkSwitch.checked=darkSwitchSelected;
    darkSwitchSelected
        ? document.body.setAttribute("data-theme","dark")
        : document.body.removeAttribute("data-theme")
    if(darkSwitchSelected){
        darkFunction();
    }
}

function resetDarkSwitch(){
    if(darkSwitch.checked){
        document.body.setAttribute("data-theme","dark");
        localStorage.setItem("darkSwitch","dark")
    }else{
        document.body.removeAttribute("data-theme");
        localStorage.removeItem("darkSwitch")
    }
}

function darkFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

// Clock controller
let clockElement = document.getElementById('clock');
function clock() {
    let date = new Date();
    clockElement.textContent = date.toLocaleString();
}
// Clock refresh frequency
setInterval(clock, 1000);