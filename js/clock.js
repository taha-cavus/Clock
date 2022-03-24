let prom = prompt("Lütfen isminizi giriniz!");
let getName = document.getElementById(`myName`);
getName.innerHTML = prom;


var time = new Date();   

var days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
var getClock = document.getElementById(`myClock`);



function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " ;
  
    document.getElementById("myClock").innerText = time; 
    document.getElementById("myClock").innerText += " " +days[date.getDay()]; 

    var t = setTimeout(function(){ currentTime() }, 1000); 
    
  }
  
  currentTime();