var babysit = {
	//Converts a string the represents a time (eg. "5PM") to an hour number that will be used by the program, starting with 5 PM as 0.
	timeStrToHourNum(timeStr){
		var hours = parseInt(timeStr) - 5;
		
		//If hours are in the AM, add 12.
		if(timeStr.search('AM') > 0){hours += 12}
		
		return hours;
	}
};