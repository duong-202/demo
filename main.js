const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')

const start = document.querySelector('.start-btn')
const stop = document.querySelector('.stop-btn')
const reset = document.querySelector('.reset-btn')

var valueHour = 0
var valueMinute = 00
var valueSecond = 0
var i = 1

var interval

start.onclick = function(){
    clearInterval(interval)
    interval = setInterval(Count, 1000)
}

stop.onclick = function(){
    clearInterval(interval)
}

reset.onclick = function(){
    valueHour = "00"
    valueMinute = "00"
    valueSecond = "00"
    clearInterval(interval)
    hour.innerHTML = valueHour
    minute.innerHTML = valueMinute
    second.innerHTML = valueSecond
}

function Count() {
    valueSecond++
    
    if (valueSecond <= 60){
        second.innerHTML = valueSecond
        if (valueSecond <= 9){
            second.innerHTML = '0' + valueSecond
        }
    } 
    
    if (valueSecond >= 60){
        valueMinute++
        valueSecond = 0
        second.innerHTML = "00"
        minute.innerHTML = valueMinute
        if (valueMinute <= 9){
            minute.innerHTML = '0' + valueMinute
        }
    }

    if (valueMinute >= 60){
        valueHour++
        valueMinute = 0
        minute.innerHTML = "00"
        hour.innerHTML = valueHour
        if (valueHour <= 9){
            hour.innerHTML = '0' + valueHour
        }
    }
   
}