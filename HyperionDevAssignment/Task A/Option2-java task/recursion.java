public class recursion {
    public static void main(String[] args) {
        String myStr = "emosewA si avaJ";
        String reversed = reverse_string(myStr);
        System.out.println("The reversed string is: " + reversed);

        int maxNumber = 14; // Remove generic type T and set maxNumber directly
        System.out.print("Fibonacci Series of " + maxNumber + " numbers:");
        for (int i = 0; i < maxNumber; ++i) { // Change loop range to [0, maxNumber)
            System.out.print(fibonacci(i) + " ");
        }
    }

    // Reverse string function
    public static String reverse_string(String myStr) {
        if (myStr.isEmpty()) {
            return myStr;
        } else {
            // Call reverse_string recursively with substring
            return reverse_string(myStr.substring(1)) + myStr.charAt(0);
        }
    }

    // Fibonacci sequence function
    public static int fibonacci(int n) {
        if (n == 0 || n == 1) {
            return n;
        } else {
            // Call fibonacci recursively with previous two numbers
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }
}