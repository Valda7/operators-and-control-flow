<!-- Arithmetic Operators -->
Operator	Description
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement
<!-- Example: -->
let x = 100 + 50;
let x = a + b;


<!-- Assignment Operators -->
 ( = )
 <!-- Example:  -->
 x = f()
 y = 5


<!-- Comparison Operators -->
Comparison Operators
	<	Less than	
    <=	Less than or equal	
	>	Greater than	
	>=	Greater than or equal	
	==	Equal
	===	Strict equal
	!=	Unequal	
	!==	Strict unequal	
<!-- Example -->
x <= y
x !== y


<!-- Logical Operators -->
	&&	Logical AND	
	||	Logical OR	
	??	Nullish Coalescing ES2020	
<!-- Example -->
x ?? y
x || y


<!-- Bitwise Operators -->
	&	Bitwise AND	
	^	Bitwise XOR	
	|	Bitwise OR	
<!-- Example -->
x ^ y
x | y

                                ************

What is the result when the following program is executed?
1
8
15


                                ************


Write a program that takes a positive number (num) and finds the power of 2 nearest to that number. The program stores the resulting value to pwr. Then you log the answer in this format: 
“The number (pwr) is the power of 2 nearest to (num).”

If there are two candidate values, display the smaller one. For example, 2 and 4 4 are both the powers of 2 nearest to 3. The function should display 2 because it’s smaller than 4.

For example,
If num = 40, pwr = 32. Then you log to your console in this format:
“The number 32 is the power of 2 nearest to 40.”

If num = 50, pwr = 64.. Then you log to your console in this format:
“The number 64 is the power of 2 nearest to 50.”

let num = 40; // or any other positive number
let pwr = 1;
while (pwr <= num) {
  pwr *= 2;
}
if (num - pwr/2 <= pwr - num) {
  pwr /= 2;
}
console.log(`The number ${pwr} is the power of 2 nearest to ${num}.`);



