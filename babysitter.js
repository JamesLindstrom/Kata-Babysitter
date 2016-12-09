var babysit = {
	//Converts a string the represents a time (eg. "5PM") to an hour number that will be used by the program, starting with 5 PM as 0.
	timeStrToHourNum(timeStr){
		var hour = parseInt(timeStr) - 5;
		return hour;
	}
};