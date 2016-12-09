var listener = {
	start: document.getElementById('start'),
	stop: document.getElementById('stop'),
	bed: document.getElementById('bed'),
	calcBtn: document.getElementById('calculate'),
	result: document.getElementById('result'),
	
	init : function(){
		listener.calcBtn.addEventListener("click", listener.calculate, false);
	},
	
	calculate : function(){
		var start = listener.start.value,
			stop = listener.stop.value,
			bed = listener.bed.value,
			output = "";
		
		if(start && stop && bed){
			output = babysit.calcPay(start, stop, bed);
		}else if(start && stop){
			output = babysit.calcPay(start, stop);
		}else{
			output = "Both start and stop must be selected";
		};
		
		//If a good value comes back, it will be a number. We'll add a "$" and put it in a span that will increase it's size.
		if(typeof(output) == "number"){output = `<span id="big">$${output}</span>`;}
		
		listener.result.innerHTML = output;
	}
};

listener.init();