Firstly, Congratulations on how much of the project you were able to complete! I have very little to correct but some minor changes to your program that will make it run correctly and slightly simpler than what you had intended. On another note, thank you so much for the comments provided. It is really appreciated and makes it so much easier for me ot provide you with assistance. It is also good practise for when your solutions get really complex and will help you keep track of your program flow.Below are my adjustments: 

The lines that I mention will be referring to the lines in YOUR solution:)

On line 20: I renamed reverseString to reverse_string to match the method name.

On line 22: I removed the function method as it is not really needed and was causing a compilation error due to us having duplicate variable names. Remember, we can only have one name per variable/function. this causes problems when we refer to that variable/function.

On line 28: I changed the loop range in main for printing the Fibonacci series to go from (0 to maxNumber-1) instead of (1 to maxNumber). This is because our Fibonacci sequence starts at 0. 

On line 22-35: I added a new fibonacci method to calculate the nth Fibonacci number recursively using the definition of the sequence.That is a clever way to get the job done but there are a few mistakes that you must keep in mind. 
- the task was to create a recursive function, so inside our fibonacci method, we would have to call the fibonaci method( as is the definition of a recursive function.)
- Then, we can remove the generic type T and set the maxNumber directly.

On line 20: I fixed the return statement in reverse_string to call the method recursively with the substring and concatenate the first character to the end of the reversed substring. You were so close! but remember, if we are reversing the string, then we must add our first character after the 2nd.

On line 14: I updated the print statement in reverse_string to correct the grammar of the output message. There was a slight typo in the message saying "string IN now empty" which I took to mean "string IS now empty".

One line 8: in our print line, we should call the "fibonacci" method instead of automatically printing(hardcoding) the first 10 fibonacci numbers. Remember, we want to print the first "n" fibonacci numbers and dependig on what was set in "maxNumber" and the print statment needs to read it from a variable.

Overall, this was a good attempt, for a topic/section that can get quite complicated. If you would like more resources or activities for recursive functions,so that you may feel more comfortable with them, please feel free to let me know! 