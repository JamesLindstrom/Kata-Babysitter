QUnit.test("Test 1", function(assert){
	assert.equal(babysit.timeStrToHourNum('5PM'), 0, "5PM is the earliest possible hour and should return 0.");
});

QUnit.test("Test 2", function(assert){
	assert.equal(babysit.timeStrToHourNum('6PM'), 1, "6PM is the 2nd hour and should return 1.");
	assert.equal(babysit.timeStrToHourNum('7PM'), 2, "6PM is the 3rd hour and should return 2.");
});