// All Buttons
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

// All Timer Fields
const hourTimer = document.getElementById('hour');
const minitueTimer = document.getElementById('minitue');
const secondsTimer = document.getElementById('seconds');
const milisecTimer = document.getElementById('milisec');

// Declare and Define all the timer variale to 0.
let hour = 0;
let minitue = 0;
let seconds = 0;
let milisec = 0;
let timer = 0;

//Start Button Click
startBtn.addEventListener('click', () =>{
    if(!timer == 0){
        clearInterval(timer);
    }
    
    timer = setInterval(startStopwatch, 10);
    
});

// Stop button click
stopBtn.addEventListener("click", () =>{
    clearInterval(timer);
});

// reset button click
resetBtn.addEventListener('click', () =>{
    clearInterval(timer);
    hour = 0;
    minitue = 0;
    seconds = 0;
    milisec = 0;

    hourTimer.textContent = "00";
    minitueTimer.textContent = "00";
    secondsTimer.textContent = "00";
    milisecTimer.textContent = "000";

    // timer = setInterval(startStopwatch, 10);
});

// Start button function
function startStopwatch(){
    console.log("startStopwatch");
    milisec += 10;

    // Conditions for updating miliseconds
    if(milisec < 10){
        milisecTimer.textContent = "00" + milisec;
    }else if(milisec < 100){
        milisecTimer.textContent = "0" + milisec;
    }else{
        milisecTimer.textContent = milisec;
    }

    if(milisec > 1000){
        milisec = 0;
        seconds++;

        // Conditions for updating seconds
        if(seconds < 10){
            secondsTimer.textContent = "0" + seconds;
        }else{
            secondsTimer.textContent = seconds;
        }
    
        if(seconds >= 60){
            seconds = 0;
            minitue++;

            // Conditions for updating minitues
            if(minitue < 10){
                minitueTimer.textContent = "0" + minitue;
            }else{
                minitueTimer.textContent = minitue;
            }
    
            if(minitue >= 60){
                minitue = 0;
                hour++;

                // Conditions for updating hours
                if(hour < 10){
                    hourTimer.textContent = "0" + hour;
                }else{
                    hourTimer.textContent = hour;
                }
            }
        }
    }
}

function initialize(){

    hourTimer.textContent = "00";
    minitueTimer.textContent = "00";
    secondsTimer.textContent = "00";
    milisecTimer.textContent = "000";

}

initialize();
