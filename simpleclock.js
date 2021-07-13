//declaring variables necessary here

const time = document.getElementById("time")
const hour = document.getElementById("hour")
const min = document.getElementById("min")
const sec = document.getElementById("sec")


//creating a function that shows the current time

showTime = () =>{

    let hourtime = new Date().getHours()
    let mintime = new Date().getMinutes()
    let sectime =new Date().getSeconds() 
    if(hourtime <10){
        hourtime ="0" + hourtime
    }
    if(mintime<10){
        mintime = "0" + mintime
    }
    if(sectime <10){
        sectime ="0" + sectime;
        
        // i decided to do some unnecessary styling here,never mind that
        sec.style.backgroundColor = "skyblue"
    }
    else{
        sec.style.backgroundColor =''
    }

    // Asign these variables to the respective div elements

    hour.innerHTML = hourtime
    min.innerHTML = mintime
    sec.innerHTML = sectime

    
}

//call the showTime function every second to update the time
setInterval(showTime,1000)