# Two Sum Solution Approach

### Lets first observe our example input / outputs and clearly define

### the problem statement.

#### Example 1:

#### Input: nums = [2,7,11,15], target = 9

#### Output: [0,1]

### The Problem simply wants us to find 2 numbers in the given array

### whose sum should be equal to the target. Lets break this down

### in a very simple linear equation.

### Mathematically, the problem says : Add 2 numbers ; Sum of 2

### numbers should equal a third given number. Simple enough right?

### Lets try and build some equation that satisfies our problem

### statement that we just simplified.

## Equation: A + B = X ; Add 2 numbers (A+B), sum should be equal to a third given number (X)

### BOOM ! There is your solution to the problem. All we have to do

### now is to write the equation in code and make this check

### repeatable since our equation needs to be checked for ALL members

### in a given array. Oh and there are multiple ways you could write

### your code. Your equation (aka the solution) stays the same, the

### implementation in code can differ. Lets start writing a solution then !

## Solution Approach 1

#### Input: nums = [2,7,11,15], target = 9

### Why dont we just start adding every number with every other number

### and check if it equals our target after each sum operation -

### which is basically A+B = X.

### Assume A = 2 and add it to every other element.

### B = [7, 11, 15]. Now lets test our equation:

### A + B = X -> 2 + 7 = 9 ? -> YES IT ACTUALLY WORKS !

### Now we were a little bit lucky here because we literally found

### our A and B in the first two elements, so lets look at another

### example.

#### Input: nums = [2,11,15,7], target = 9

### I moved the 7 to the end of the array so we can visualize

### our solution and understand our approach a little bit better.

### Again A = 2; B = [11,15,7]; lets start testing A+B = X.

#### 2 + 11 = 13

#### 2 + 15 = 17

#### 2 + 7 = 9 !!!

### We can be confident that our approach does solve the given

### problem. Lets start implementing this in code.

### We want to add every number with every other number, that

### explicitly tells us we need LOOPS, we need to SUM and we need to

### CHECK IF SUM = Target

```
loop 1: for (int i = 0; i < array.length; i++);
loop 2 inside loop 1: for (int j=i+1; j < array.length; j++);
SUM: array[i] + array[j] = sum;
CHECK: If(sum == target)
RETURN: return i, j (since the solution wants index of A and B)

```

#### \* Fun Challenge: Try and implement this algorithm without

#### looking at the solution code ! \*
