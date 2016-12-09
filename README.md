# Kata-Babysitter
A simple JavaScript program that calculates the wages of a babysitter.

To run this kata, simply open index.html in a modern browser. This kata uses QUnit for testing purposes. The QUnit JQuery and CSS will automatically be imported retrieved by index.html.

NOTE: Unlike most of my front end work, this JavaScript uses some recent features that may not be supported in some older browsers, particularly older versions of Safari and Internet Explorer.

NOTE 2: This code will not work properly if the five files are not kept in the same directory.

NOTE FOR PILLAR EVALUATOR: I have done my best to avoid use of magic numbers, as you reccomended. The exceptions are in the babysit.timeStrToHourNum and babysit.hourNumToTimeStr. In both of these methods, a few magic numbers are used. I chose to do this because these numbers refer to the points that PM changes to AM (11PM to 12AM) and the point that 12 changes to 1 (12AM to 1AM). I believe that this is straightforward, and there is little to no chance that the numbers will ever need to change. 
However, perhaps even under these circumstances, it would be best to avoid use of magic strings. I do not know for certain, and I would like to know your opinion on that matter. I want to make it clear that I did not do this out of neglect for your instruction. I took your instruction into careful consideration when making this decision.
