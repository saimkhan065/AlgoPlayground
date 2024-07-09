# Valid Paranthesis Solution Approach O(N) Time Complexity

### A valid paranthesis would be where the opening and closing brackets must of the same type and in the same order

#### Example {[()]} - valid {[(])} - invalid

### lets take some more inspiration from linear algebra. orthogonality says A . A' = 0 which is basically what we can also observe about the nature of paranthesis. '(' MUST be followed by ')' for the expression to be valid.

### we will use a stack to keep track of whether our brackets are following the correct order. Any time we encounter an "open" bracket, let us push its "complement" which would be a "closed" bracket of the SAME type on to the stack. Any time we encounter a closed bracket, we pop from our stack, the popped element MUST be equal to the closed bracket in the expression else the expression is invalid.

### Too much text ? Lets run through an example:

#### loop i=0; Input: '{' [ ( ) ] } Stack = }

#### loop i=1; Input: { '[' ( ) ] } Stack = }]

#### loop i=2; Input: { [ '(' ) ] } Stack = }])

#### loop i=3; Input: { [ ( ')' ] } Stack = }]) pop = ); Is ) == to our stack top which was ) ? yes it is !

#### loop i=4; Input: { [ ( ) ']' } Stack = }] pop = ] ; ] == ]

#### loop i=5; Input: { [ ( ) ] '}' Stack = } pop = } ; } == }

#### After going through our input our stack = empty

#### end loop ; is stack empty ? yes ! then our expression is valid !

### Lets take another shorter example

#### loop i=0; Input: '{' ( } ) Stack = }

#### loop i=1; Input: { '(' } ) Stack = })

#### loop i=2; Input: { ( '}' ) Stack = }) pop = ) ; } != )

#### pop element does not equal input bracket expression is invalid
