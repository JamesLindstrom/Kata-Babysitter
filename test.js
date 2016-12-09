QUnit.test("Test 1", function(assert){
	assert.equal(babysit.timeStrToHourNum('5PM'), 0, "5PM is the earliest possible hour and should return 0.");
});

QUnit.test("Test 2", function(assert){
	assert.equal(babysit.timeStrToHourNum('6PM'), 1, "At 6PM, 1 hour has passed since 5PM.");
	assert.equal(babysit.timeStrToHourNum('7PM'), 2, "At 7PM, 2 hours have passed since 5PM.");
});

QUnit.test("Test 3", function(assert){
	assert.equal(babysit.timeStrToHourNum('1AM'), 8, "At 1AM, 8 hours have passed since 5PM.");
	assert.equal(babysit.timeStrToHourNum('2AM'), 9, "At 2AM, 9 hours have passed since 5PM.");
});

QUnit.test("Test 4", function(assert){
	assert.equal(babysit.timeStrToHourNum('12AM'), 7, "At 12AM, 7 hours have passed since 5PM. 12AM is the only AM time when 12 hours do not need to be subtracted.");
});

QUnit.test("Test 5", function(assert){
	assert.equal(babysit.calcPay('5PM', '7PM'), 24, "Wages for 2 hours are $24.");
});

QUnit.test("Test 6", function(assert){
	assert.equal(babysit.calcPay('5PM', '8PM'), 36, "Wages for 3 hours are $36.");
	assert.equal(babysit.calcPay('6PM', '7PM'), 12, "Wages for 1 hour are $12. It needs to work with varying start times.");
});

QUnit.test("Test 7", function(assert){
	assert.equal(babysit.calcPay('5PM', '12PM', '8PM'), 68, "Wages after the child has gone to sleep are only $8.");
});