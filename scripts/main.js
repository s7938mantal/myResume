
function mytimmer(){

	 var weekday = ["Zero","Mon","Tue","Wen","Thr","Fri","Sat","Sun"] 

	 mydate = new Date();

	 y = mydate.getFullYear();
	 z = mydate.getMonth()+1;
	 w = mydate.getDay();
	 d = mydate.getDate();
	 h = mydate.getHours();
	 m = mydate.getMinutes();
	 s = mydate.getSeconds();
	 ms = mydate.getMilliseconds();

	 s = (s>=10 ? s : "0"+s) ;
	 m = (m>=10 ? m : "0"+m) ;
	 h = (h>=10 ? h : "0"+h) ;

	r1 = h + ":" + m + ":" + s ;
	r2 = y + "/" + z + "/" + d ;
	r3 = weekday[w] ;
	document.getElementById('time').innerHTML = r1 ;
	document.getElementById('date').innerHTML = r2 ;
	document.getElementById('day').innerHTML = "Weekday =" + r3 ;

	t = setTimeout("mytimmer()",1000);

};

mytimmer();

function start(){
	mytimmer();
};

function stop(){
	clearTimeout(t);
	document.getElementById('time').innerHTML = "--:--:--";
};

var p = 0;

function move(){
	p = p + .2;
	document.getElementById("clock-0").style.backgroundPosition= p+"%" ;
	setTimeout("move()",100);
}

move();