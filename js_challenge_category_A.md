**# Challenge 1: Get Sum**



This is another very basic practice challenge just to get you into the hang of things.



\## Instructions



Write a function called `getSum` that takes in two numbers and returns the sum of those two numbers.



\### Function Signature



```js

/\*\*

&nbsp;\* Returns the sum of two numbers.

&nbsp;\* @param {number} a - The first number.

&nbsp;\* @param {number} b - The second number.

&nbsp;\* @returns {number} - The sum of the two numbers.

&nbsp;\*/

function getSum(a: number, b: number): number;

```



\### Examples



```JS

getSum(1, 2) // 3

getSum(10, 5) // 15

getSum(2, 2) // 4

getSum(10, 5) // 15

```



\### Constraints



\- The function must return a number



**# Challenge 2: Calculator**



\## Instructions



Write a function called `calculator` that takes in 2 numbers and an operator and returns the result of the calculation.



\### Function Signature



```js

/\*\*

&nbsp;\* Returns the result of a calculation.

&nbsp;\* @param {number} num1 - The first number.

&nbsp;\* @param {number} num2 - The second number.

&nbsp;\* @param {string} operator - The operator to use in the calculation.

&nbsp;\* @returns {number} - The result of the calculation.

&nbsp;\*/

function calculator(num1: number, num2: number, operator: string): number;

```



\### Examples



```JS

calculator(1, 2, '+') // 3

calculator(10, 5, '-') // 5

calculator(2, 2, '\*') // 4

calculator(10, 5, '/') // 2

```



\### Constraints



\- The function must return a number

\- The function must throw or log an error if an invalid operator is given



\### Hints



\- You can use `if` statements or `switch` statements to determine which operator was given.



**# Challenge 3: Count Occurrences**





\## Instructions



Write a function called `countOccurrences()` that takes in a string and a character and returns the number of occurrences of that character in the string.



\### Function Signature



```js

/\*\*

&nbsp;\* Returns the number of occurrences of a character in a string.

&nbsp;\* @param {string} str - The string to search.

&nbsp;\* @param {string} char - The character to search for.

&nbsp;\* @returns {number} - The number of occurrences of the character in the string.

&nbsp;\*/

function countOccurrences(str: string, char: string): number;

```



\### Examples



```js

countOccurrences('hello', 'l'); // 2

countOccurrences('hello', 'z'); // 0

```



\### Constraints



\- Lowercase and uppercase characters are considered different characters. If you want, you can make the function case insensitive



\### Hints



\- You can loop through a string just like you can loop through an array.

\- You can use the `++` operator to increment a variable.

\- You could take another approach and use the `split()` method to split the string into an array of substrings based on the given character.





**# Challenge 4: Find Max Number**



\## Instructions



Write a function called `findMaxNumber` that takes in an array of numbers and returns the largest number in the array.



\### Function Signature



```js

/\*\*

&nbsp;\* Returns the largest number in an array.

&nbsp;\* @param {number\[]} arr - The array of numbers.

&nbsp;\* @returns {number} - The largest number in the array.

&nbsp;\*/

function findMaxNumber(arr: number\[]): number;

```



\### Examples



```js

findMaxNumber(\[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 10

findMaxNumber(\[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]); // 10

findMaxNumber(\[1, 2, 3, 4, 5, 10, 9, 8, 7, 6]); // 10

```



\### Hints



\- There is a very easy way to do this using a specific built-in method. I would suggest not doing it that way. Try to solve this problem using a `for` loop.

