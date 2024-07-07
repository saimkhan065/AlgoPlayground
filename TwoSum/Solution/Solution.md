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

## Solution Approach 1 - Sub Optimal Solution

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

## Our solution is sub optimal. why? Imagine an array that has 100000

## elements and your A and B are literally in the last two positions.

## Now our algorithm has to traverse through all 100,000 elements,

## once for A and then again for B. Mathematically speaking,

## 100,000 \* 100,000 times, not very efficient right?

## Assuming 100,000 = n ; we can rewrite this

## as n \* n = n^2, which is basically what TIME Complexity of an

## algorithm is. In BIG O notation : O(n^2). Lets try and build a

## more efficient algorithm that has time complexity below O(n^2).

# Solution Approach 2 - Optimal Solution

### Lets speed this up a little bit. Original equation => A+B = X

### Lets play around with our equation and see if it reveals more

### details about this problem.

### A+B = X -> A = X - B ; B = X - A ; interesting right?

### We can see clearly manipulating our equation that subtracting

### A or B from our target X, we get the other number in the A,B pair.

### Lets take an example:

#### Input: nums = [2,7,11,15], target = 9

#### 9 - 2 = 7 and 9 - 7 = 2. Clearly we can observe that 7 and 2 are

#### both in the array if a solution actually exists. Now all we need

#### to do is reduce this to ONE loop, because our previous solution

#### already does TWO loops. We need to check whether for 9 - A = B

#### is there a second number B which satisfies the condition

#### 9 - B = A. For instance: 9 - 2 = 7 and 9 - 7 = 2 and 7+2 = 9.

#### For 2, there must exist a complimentary number that adds up to 9.

#### For 7, there must exist a complimentary number that adds up to 9.

#### There can only be one solution to 2 + B = 9 and A + 7 = 9.

#### If a solution exists, then there must exist 2 numbers A and B

#### which add up to X.

#### Lets try and build an algorithm around this

```
Assume A = every element in array ( basically nums[i] )
1. Initalise some data structure to store the results of X - A for the entire array. We will be using a Map() structure.
2. Loop through the array.
3. for each element -> compute X - A
Note: X - A = B ; since A + B = X is our original problem
4. Check whether X - A was found before
4.1 If not found, add the number and its index from array to our map.
4.2 If found, return the index stored in map for A and return current index for B.

Example Run:
Input: nums = [2,11,15,7], target = 9
1. Map = (empty)
2. 9 - 2 = 7; does 7 exist in out map ? No, current i to the map.
3. Map =("2", 0) (key(number), value(index of number))
4. 9 - 11 = -2; does not exist in map, add it
5. Eventually Map = ("2",0);("11",1);("15",2)
6. 9 - 7 = 2; Wait a second, 2 EXISTS IN OUR MAP which means we just found our two numbers which add up to our target
7.Return current index and index of the existing number in our map
```
