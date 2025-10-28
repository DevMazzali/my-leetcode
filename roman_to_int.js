/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
   const romanToInt = {
      'I' : 1,
      'V' : 5,
      'X' : 10,
      'L' : 50,
      'C' : 100,
      'D' : 500,
      'M' : 1000,
   }

   let result = 0;

   for (let i=0; i < s.length; i++) { // pega o tamanho da string
      if(i + 1 < s.length && romanToInt[s[i]] < romanToInt[s[i + 1]]) { 
         result -= romanToInt[s[i]];
      } else{
         result += romanToInt[s[i]];
      }
   }
   return result;
};

/*
ROMAN NUMERAL TO INTEGER CONVERSION ALGORITHM

The algorithm checks each Roman numeral character and compares it with the next one.

MAIN LOGIC:
First, we check if i + 1 is less than the total length of string S + 1 (to avoid going out of bounds).
Then we compare the current Roman numeral's integer value with the next one:
  - If current value < next value: SUBTRACT the current value from result
  - If current value >= next value: ADD the current value to result

WHY THIS WORKS:
In Roman numerals, when a smaller value appears before a larger value, it means subtraction.
Example: IV = 4 (because I comes before V, so 5 - 1 = 4)

STEP-BY-STEP EXAMPLE WITH "IX" (which equals 9):
1. The string "IX" is split into: I = 1 and X = 10
2. Start with i = 0, result = 0
3. First iteration (i = 0):
   - Current character: I (value = 1)
   - Next character: X (value = 10)
   - Is 1 < 10? YES
   - Action: Subtract → result = 0 - 1 = -1
4. Second iteration (i = 1):
   - Current character: X (value = 10)
   - No next character (we're at the end)
   - Action: Add → result = -1 + 10 = 9
5. Final result: 9 ✓
*/