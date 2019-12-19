## And_Challenge

### Coding Challenge
We have really enjoyed speaking with you so far AND we are excited to invite you to take part in our in house coding exercise to showcase your programming and problem solving skills.

We recommend you spend 1hour 30mins to 2hour 30mins to complete this challenge, however it is not timed. We are happy for you to take your time and really showcase your coding skills and ability!
Exercise
Extract the SolutionAND.zip file and import the SolutionAND.js file into your favourite IDE of choice.

Two non-negative integers are called AND-Siblings if they can be obtained by each other by rearranging the digits of their decimal representations.

#### Write the function:
<code>function solution (input) {
  // logic here
  return null;
}</code>

...that, given any String input, returns all the distinct AND-Siblings that can be formed by the positive integers that can be found on it in descending order. Please keep in mind the efficiency of your algorithm when writing the solution.

#### For example:

	•	If the input provided is: “236”, then your solution should return "632,623,362,326,263,236" as these are all the combination that can be made with integers that the string contains
	•	If the input provided is: “A 3B2 C6D”, then your solution should return "632,623,362,326,263,236" as well, but this time notice that the provided string had non-integers characters and whitespaces, so an extraction of integers was first made to obtain the correct solution
	•	If the input provided does not contain any integers: “ABC”, then your solution should return the appropriate error exception message.
	•	Keep things simple, don’t over-engineer your solution.
