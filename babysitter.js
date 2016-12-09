var babysit = {
	//5PM is the earliest time the babysitter will start.
	//4AM is the latest time the babysitter will end.
	earliestStart: 5,
	
	//Converts a string the represents a time (eg. "5PM") to an hour number that will be used by the program, starting with babysit.earliestStart as 0.
	timeStrToHourNum : function(timeStr){
		var hours = parseInt(timeStr);
		
		//If hours are in the AM (and it is not 12AM), add 12.
		if(timeStr.search('AM') > 0 && parseInt(timeStr) != 12){hours += 12}
		
		return hours;
	},
	
	calcPay : function(startTimeStr, endTimeStr, bedTimeStr = endTimeStr){
		var startTime = babysit.timeStrToHourNum(startTimeStr);
		var endTime = babysit.timeStrToHourNum(endTimeStr);
		var bedTime = babysit.timeStrToHourNum(bedTimeStr);
		var midnight = 12;
		
		var dollars;
		
		//If the end time is after midnight, it must be factored into the calculation.
		if(endTime > midnight){
			dollars = (bedTime - startTime) * 12 + (midnight - bedTime) * 8 + (endTime - midnight) * 16;
		}else{
			dollars = (bedTime - startTime) * 12 + (endTime - bedTime) * 8;
		}
		return dollars;
	}
};