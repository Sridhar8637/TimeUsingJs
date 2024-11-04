

let dat=document.getElementById("date");
let month=document.getElementById("month");
let year=document.getElementById("year");


let hour=document.getElementById("hour");
let minute=document.getElementById("minute");
let second=document.getElementById("second");


let am=document.getElementById("tam");
let pm=document.getElementById("tpm");

let sun=document.getElementById("sun");
let mond=document.getElementById("mon");
let tue=document.getElementById("tue");
let wed=document.getElementById("wed");
let thu=document.getElementById("thu");
let fri=document.getElementById("fri");
let sat=document.getElementById("sat");

let day=[sun,mond,tue,wed,thu,fri,sat];
console.log(day);



let today=new Date();

//console.log(date);

let dates=today.getDate();
dat.innerHTML=dates;

let mon=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
let months=mon[today.getMonth()];
month.innerHTML=months;

let years=today.getFullYear();
year.innerHTML=years;


let hours=today.getHours();
hour.innerHTML=hours;

let minutes=today.getMinutes();
minute.innerHTML=minutes;

let seconds=today.getSeconds();
second.innerHTML=seconds;

setInterval(function (){
	
	today = new Date(); 
	years=today.getFullYear();
    year.innerHTML=years;


    hours=today.getHours();
	if(hours<10)
	{
		hour.innerHTML="0"+hours;
	}
	else
	{
		hour.innerHTML=hours;
	}
    //hour.innerHTML=hours;

    minutes=today.getMinutes();
	if(minutes<10)
	{
		 minute.innerHTML="0"+minutes;
	}
	else
	{
		 minute.innerHTML=minutes;
	}
    //minute.innerHTML=minutes;

   seconds=today.getSeconds();
   //second.innerHTML=seconds;
   if(seconds<10)
   {
	  second.innerHTML="0"+seconds; 
   }
   else
   {
	   second.innerHTML=seconds;
   }
	
	
	
},1000)

    let dayInNum=today.getDay();

    day[dayInNum].style.color="red"

    if(hours<12)
	{
		am.style.color="red"
		pm.style.color="white"
	}
	else
	{
		pm.style.color="red"
		am.style.color="white"
	}
	
	
	
	
	

	
	







