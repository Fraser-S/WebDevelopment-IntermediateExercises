function FizzBuzz(Fizz, Buzz, loopto){
	var outputText = "";
	for(i = 1;i <= 100; i++){
		if(i%3 == 0 && i%5 == 0){
			outputText += Fizz.value + Buzz.value;
		} else{
			if(i%3 == 0){
				outputText += Fizz.value;
			}else{
				if(i%5 == 0){
					outputText += Buzz.value;
				}else {
					outputText += i;
				}
			}
		}
		outputText += ", ";
	}
	document.getElementById("pText").innerHTML = outputText;
}