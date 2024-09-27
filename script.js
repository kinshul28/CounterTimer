// const countertimer= document.querySelector(".countertimer")
// const h1= document.querySelector('h1')

// const second= 1000, 
// minute= 60 * second, 
// hour= 60*minute,
// day= 24*hour;

// const days= document.querySelector(".days") 
// const hours= document.querySelector(".hours") 
// const minutes= document.querySelector(".minutes") 
// const seconds= document.querySelector(".seconds") 

// const userinput= prompt("enter date in YYYY-MM-DD format")
// console.log(userinput)
// const timemonitor= setInterval(() => {
//     const userdate= new Date(userinput);
//     const currentdate= new Date().getTime();
//     console.log(userdate)
//     // console.log(currentdate)
//     const timediff= userdate- currentdate;
//     if (timediff<0){
//         console.log("Time is up")
//         clearInterval(timemonitor)
//         countertimer.style.display= "none";
//         h1.innerText= `Time's Up`
//     }
//     const daysleft= Math.floor(timediff/day);
//     const hoursleft= Math.floor((timediff%day)/hour)
//     const minutesleft= Math.floor((timediff%hour)/minute)
//     const secondsleft= Math.floor((timediff%minute)/second)
//     console.log(`${daysleft}:${hoursleft}:${minutesleft}:${secondsleft}`)
//     days.innerText= daysleft;
//     hours.innerText= hoursleft;
//     minutes.innerText= minutesleft;
//     seconds.innerText= secondsleft;
// }, 1000);

// ********************SELF PRACTICED AND IMPLEMENTED********************************

const container= document.querySelector(".container")
const h1= document.querySelector(".container>h1")
const days      = document.querySelector(".days")
const hours     = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")

const second= 1000, minute= 60*second, hour= 60*minute, day= 24*hour; 
const userinput= prompt("Enter target date in YYYY-MM-DD format")
// console.log(typeof(userinput))
const timemonitor= setInterval(()=>{
    const currentdate= new Date();
    const targetdate= new Date(userinput);

    console.log(currentdate.getTime())
    console.log(targetdate.getTime())

    const timediff= targetdate.getTime() - currentdate.getTime();

    if (timediff<0){
        // container.style.display= 'none';
        h1.innerText= "Time's up, it's Already been:"
    }

    const daysleft      = String(    Math.floor(timediff/day)).padStart(2,0)
    const hoursleft     = String(   Math.floor((timediff%day)/hour)).padStart(2,0)
    const minutesleft   = String( Math.floor((timediff%hour)/minute)).padStart(2,0)
    const secondsleft   = String(Math.floor((timediff%minute)/second)).padStart(2,0)

    console.log(`${daysleft} days, ${hoursleft} hours, ${minutesleft} minutes, ${secondsleft} seconds`)

    days   .innerText=daysleft       
    hours  .innerText=hoursleft  
    minutes.innerText=minutesleft
    seconds.innerText=secondsleft
}, 1000)








