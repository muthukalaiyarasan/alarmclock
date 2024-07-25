 function currentTime() {
  let date = new Date(); 
  let hour = date.getHours();
  
  if(hour == 0){
      hour = 12;
  }
  if(hour > 12){
      hour = hour - 12;
      
   }
   hour = (hour < 10) ? "0" + hour : hour;
 
  let hours = hour
  let print=document.getElementById("date1")
  print.innerText = hours; 
  
  let min = date.getMinutes();
 
  min = (min < 10) ? "0" + min : min;
  
   let minutes = min;
   document.getElementById("minutes").innerText = minutes; 
 

  let sec = date.getSeconds();
 
  sec = (sec < 10) ? "0" + sec : sec;
   
    
   let tim =  sec ;
  document.getElementById("seconds").innerText = tim; 


  
  let hourss = date.getHours();
  let session = "AM";
  
  if(hourss > 12){
      hourss = hourss - 12;
      session = "PM";
   }
   
  let sess = session;
  document.getElementById("session").innerText = sess; 
  

  let date2 = date.getDate();
  
  date2 = (date2 < 10) ? "0" + date2 : date2;
  
  let date1=date2;
  document.getElementById("date123").innerText = date1; 

  // let month = date.getMonth();
  let month1 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"]
  let month23=month1[date.getMonth()]
  
   month = (month < 10) ? "0" + month : month;

  // let tim =month;
  let month11 =month23;
  document.getElementById("month").innerText = month11; 

  let year1 = date.getFullYear();

  document.getElementById("year").innerText = year1; 
 
}


setInterval(currentTime, 1000);




var alarm=document.getElementById("alarm")
var ss=document.getElementById("ss")

alarm.addEventListener("click",function(){
	setInterval(alarmm,1000)
})

function alarmm(){
	
let ahr=document.getElementById("ahr")
let amin=document.getElementById("amin")
let asec=document.getElementById("asec")
		  let date = new Date(); 
		  let hour = date.getHours();
		  let min = date.getMinutes();
		  let sec = date.getSeconds();
   
  // console.log(sec)
 
   if((ahr.value==hour)&&(amin.value==min)&&(sec==0)){
	  // new Audio("./aud/arul.mp3").play();
	  ss.setAttribute("src","aud/arul.mp3")
	  console.log("success")
   }

	
} 

function stop(){
	ss.setAttribute("src","none")
	
}
