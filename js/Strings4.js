function countTriples(inputText){
	var noOfTriples = 0;
	if(inputText.length >= 2){
		var currChar = inputText.charAt(0);
		var inARow  = 0;
		for(i = 1; i < inputText.length; i++){
			if(currChar == inputText.charAt(i)){
				inARow++;
				if(inARow>=2){
					noOfTriples++;
				}
			} else {
				currChar = inputText.charAt(i);
				inARow = 0;
			}
		}
	}
	document.getElementById("outputBox").innerHTML = "Number of Triples: "+ noOfTriples;
}