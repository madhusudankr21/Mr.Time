setInterval(()=>{
    let time = document.querySelector('.time');
    let alpha = new Date();

    let hour = alpha.getHours();
    let minute = alpha.getMinutes();
    let seconds = alpha.getSeconds();

    let final = hour + ":" + minute + ":" + seconds ;
    
    time.textContent = final;
},1000);

setInterval(()=>{
    let day = document.querySelector('.day');
    let alpha = new Date();
    let alphaDay = alpha.getDay();
    let daysName = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
    let dayFinal = daysName[alphaDay];
    day.textContent = dayFinal;

    let date = document.querySelector('.date');
    let alphaDate = alpha.getDate();
    let alphaMonth = alpha.getMonth();
    let alphaMonthReal = alphaMonth+1;
    let alphaYear = alpha.getFullYear();
    let dateFinal = alphaDate + " - "  + alphaMonthReal + " - " + alphaYear;
    date.textContent = dateFinal;
}),1000;