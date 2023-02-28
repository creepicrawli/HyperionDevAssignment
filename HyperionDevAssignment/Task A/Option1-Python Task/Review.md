1. Firstly, Congratulations on how much of the project you were able to complete! I have very little to correct
but some minor changes to your program that will make it run correctly and slightly simpler than what you had intended. On another note, thank you so much for the comments provided. It is really appreciated and makes it so much easier for me ot provide you with assistance. It is also good practise for when your solutions get really complex and will help you keep track of your program flow. Below are my adjustments: 

2. In the sorted() function call on line 5, the parameter i needs to be passed to it so that it sorts the characters of the current string being processed.

3. On line 3, the "result" dictionary is being created with a value of an empty list.
    This is one way to get the job done, and well done on finding a solution. however, we want our programs
    to be as simple as possible, and the less operations, the better. This can be simplified
    by using the defaultdict class from the collections module (which we need to import at the top of our file). Feel free to let me know if you would like to know more
    about python libraries and modules!

 4. Then one more adjustment that can make our program simpler. You may have seen a best practise somewhere
    or a special case with classes and object instances but, the Solution class and its instance ob1
    are not necessary, as the function can be defined as a standalone function.

    If you have any questions on any of the corrections or feel that it was vague or confusing in any way, please reach out to me and I can go over it in more detail! 