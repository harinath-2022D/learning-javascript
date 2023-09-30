const btn = document.getElementById('fire');
const machineGunSpan = document.getElementById('normal-count');
const shotGunSpan = document.getElementById('throttle-count');
// techinc to limit exceution of an event when
// this event triggers continuosly user actions

let machineGunBullets = 0;
let shotGunBullets = 0;

function updateFn(){
    shotGunBullets++;
    shotGunSpan.innerText = shotGunBullets;
}
/* 1st method using date fn

const throttleFn = (callBackFn, coolDownTime)=>{
    let lastExcutedTime = 0;
    return function(...args){
        let currTime = new Date().getTime();

        if(currTime - lastExcutedTime < coolDownTime){
            return;
        }else{
            callBackFn(...args);
            lastExcutedTime = currTime;
        }
    }
}
*/

// 2nd method without  date fn
const throttleFn = (callBackFn, coolDownTime)=>{
    let execute = true;
    return function(...args){
        if(execute){
            callBackFn(...args);
            execute = false; // we are in cool down period
            setTimeout(()=>{
                execute = true;
            },coolDownTime);
        }
    }
}

const upGradeFn = throttleFn(updateFn,600);

btn.addEventListener('click',(event) =>{
    machineGunBullets++;
    machineGunSpan.innerText = machineGunBullets;
    upGradeFn();
});