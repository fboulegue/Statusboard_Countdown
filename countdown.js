function countdown() {
    var day = 'Day';
    var countdown_d, countdown_h, countdown_m, countdown_s;
    var ausgabe_s, ausgabe_m, ausgabe_h;
    var endTime;
    var text;

                
	// Get Date Infomations
	var now = new Date();
	var day = now.getDate();
	var month = now.getMonth();
	var year = now.getFullYear();
   
		
    // Set Time
	endTime = new Date(year, month, day, 16, 0, 0); //Year, Month - 1 , Day, Hour, Minute, Secounds
    pretext = ' '; //Set Pretext
	endtext = ' untill evening!'; //Set Text
	
	
    
	
                
    // Calculations         
	var timeNow = new Date();
	var diffTime = endTime - timeNow; 
	diffTime = Math.floor(diffTime/1000);
	
	if(diffTime >= 0) {
		countdown_d = Math.floor(diffTime / 86400);
		diffTime = diffTime % 86400;
		countdown_h = Math.floor(diffTime / 3600);
		diffTime = diffTime % 3600;
		countdown_m = Math.floor(diffTime / 60);
		countdown_s = diffTime % 60;
	
        if(countdown_s < 10) ausgabe_s = '0'+countdown_s; //Use for Secounds
        else ausgabe_s = countdown_s;
        if(countdown_m < 10) ausgabe_m = '0'+countdown_m; //Use for Month
        else ausgabe_m = countdown_m;
        if(countdown_h < 10) ausgabe_h = '0'+countdown_h; //Use for Hours
        else ausgabe_h = countdown_h;
        if(countdown_d == 1) {
            day = 'Day';
        }	
        
        // Write Pretext Hours, Minutes and Secounds + Endtext
        document.getElementById('countdown').innerHTML =  pretext+ '<b>'+ausgabe_h+':'+ausgabe_m+':'+ausgabe_s+
'</b>'+endtext;
	}
	else {
	    document.getElementById('countdown').style.display = 'none'; 
	}
	setTimeout(countdown, 1000);
}
window.onload = countdown(); // Run Countdown


//FABIAN BOULEGUE
//fboulegue@me.com
//SMIRKSBLOG.de




