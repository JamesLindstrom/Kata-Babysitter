var babysit = {
	init : function(){
		//Set the earliest start time and latest end time.
		babysit.earliestStartStr = '5PM';
		babysit.latestEndStr = '4AM';
		
		babysit.earliestStart = babysit.timeStrToHourNum(babysit.earliestStartStr);
		babysit.latestEnd = babysit.timeStrToHourNum(babysit.latestEndStr);
	},
	
	//Hourly rates
	beforeBedRate: 12,
	afterBedRate: 8,
	afterMidnightRate: 16,
	
	//Converts a string the represents a time (eg. "5PM") to an hour number that will be used by the program.
	timeStrToHourNum : function(timeStr){
		var hours = parseInt(timeStr);
		
		//If hours are in the AM (and it is not 12AM), add 12.
		if(timeStr.search('AM') > 0 && parseInt(timeStr) != 12){hours += 12;}
		
		return hours;
	},
	
	hourNumToTimeStr : function(hours){
		var suffix = "PM";
		//If it's midnight or later...
		if(hours > 11){suffix = "AM";}
		//If it's later than midnight...
		if(hours > 12){hours -= 12;}
		
		
		var timeStr = hours + suffix;
		return timeStr;
	},
	
	calcPay : function(startTimeStr, endTimeStr, bedTimeStr = endTimeStr){
		//Convert strings to numbers.
		var startTime = babysit.timeStrToHourNum(startTimeStr),
			endTime = babysit.timeStrToHourNum(endTimeStr),
			bedTime = babysit.timeStrToHourNum(bedTimeStr),
			midnight = 12;
		
		//Check for bad inputs.
		var error = "";
		if(startTime < babysit.earliestStart){error += `Must not start before ${babysit.earliestStartStr}. `;}
		if(endTime > babysit.latestEnd){error += `Must not end after ${babysit.latestEndStr}. `;}
		if(startTime >= endTime){error += "Start time must come before end time. ";}
		if(error){return error;}
		
		var dollars;
		//If the end time is after midnight, it must be factored into the calculation.
		if(endTime > midnight){
			dollars = 	(bedTime - startTime) * babysit.beforeBedRate + 
						(midnight - bedTime) * babysit.afterBedRate + 
						(endTime - midnight) * babysit.afterMidnightRate;
		}else{
			dollars = 	(bedTime - startTime) * babysit.beforeBedRate + 
						(endTime - bedTime) * babysit.afterBedRate;
		}
		return dollars;
	}
};

babysit.init();