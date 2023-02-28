the following function calles will provide full tests for the program:

sayNumber(0);
- This will ensure that the special case of "zero" is accounted for.

sayNumber(-number)||sayNumber(anything but a number)
- If you enter anything other than an integer(punctuation, special characters), the program will output a message telling you to enter an integer from 0-999999999999999.

sayNumber(7);
- Will test that the units work on their own.

sayNumber(9876543216);
- This will account for every unit coloum and ensure that all of my loops run through.

sayNumber(56400052);
- This will show that the word and must only come after the word "hundred" if the 3 digits after it contain a ten or unit coloumn greater than 0.

sayNumber(4000000006);
- Will demonstrate that if there is a H,T,U group that is all zero, then there will be no joiner/"thousands" word.