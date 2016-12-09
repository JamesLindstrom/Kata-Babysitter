QUnit.test("Test 1", function(assert){
	assert.equal(babysit.timeStrToHourNum('5PM'), 0, "5PM is the earliest possible hour and should return 0.");
});