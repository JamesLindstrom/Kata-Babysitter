QUnit.test("Test 1", function(assert){
	assert.equal(babysit.timeStrToHourNum('5PM'), 5, "5PM should return 5.");
});

QUnit.test("Test 2", function(assert){
	assert.equal(babysit.timeStrToHourNum('6PM'), 6, "6PM should return 6.");
	assert.equal(babysit.timeStrToHourNum('7PM'), 7, "7PM should return 7.");
});

QUnit.test("Test 3", function(assert){
	assert.equal(babysit.timeStrToHourNum('1AM'), 13, "1AM should return 13.");
	assert.equal(babysit.timeStrToHourNum('2AM'), 14, "2AM should return 14.");
});

QUnit.test("Test 4", function(assert){
	assert.equal(babysit.timeStrToHourNum('12AM'), 12, "12AM should return 12. 12AM is the only AM time when 12 hours do not need to be subtracted.");
});

QUnit.test("Test 5", function(assert){
	assert.equal(babysit.calcPay('5PM', '7PM'), 24, "Wages for 2 hours are $24.");
});

QUnit.test("Test 6", function(assert){
	assert.equal(babysit.calcPay('5PM', '8PM'), 36, "Wages for 3 hours are $36.");
	assert.equal(babysit.calcPay('6PM', '7PM'), 12, "Wages for 1 hour are $12. It needs to work with varying start times.");
});

QUnit.test("Test 7", function(assert){
	assert.equal(babysit.calcPay('5PM', '12PM', '8PM'), 68, "Wages after the child has gone to sleep are only $8 an hour.");
});

QUnit.test("Test 8", function(assert){
	assert.equal(babysit.calcPay('5PM', '2AM', '8PM'), 100, "Wages after midnight are $16 an hour.");
});