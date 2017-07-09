function divideBy3(num){
	var stepsTaken = "";
	var steps = 0;
	
	while(num>0){
		if(num%3 == 0){
			num = num / 3;
			stepsTaken += "divided by 3, ";
		} else {
			if((num+1)%3 == 0){
				num = (num + 1) /3;
				stepsTaken += "added 1 then divided by 3, ";
			} else {
				num = (num - 1) /3;
				stepsTaken += "subtracted 1 then divided by 3, ";
			}
		}
		steps++;
	}
	stepsTaken += " Total Steps: " + steps;
	
	document.getElementById("outputBox").innerHTML = stepsTaken;
}