const countDown=()=>{
const contDownData=new Date("2025-02-28T00:00:00").getTime();
const now=new Date().getTime();
const distance =contDownData-now;
const days=Math.floor(distance/86400000);
const hours=Math.floor((distance%86400000)/3600000);
const minutes=Math.floor((distance%(1000*60*60))/60000);
const second=Math.floor((distance%(1000*60))/1000);

document.querySelector("#day").textContent=days;
document.querySelector("#hour").textContent=hours;
document.querySelector("#min").textContent=minutes;
document.querySelector("#sec").textContent=second;
}
setInterval(()=>{
    countDown();
},1000);