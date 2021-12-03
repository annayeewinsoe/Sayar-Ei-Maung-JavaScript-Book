/* Expressions, Statements & Operators */

let sum = 1 + 2
// 1 + 2 (Expression)
// let sum = 1 + 2 (Statement)

// Semicolon (Optional)
let ans = 100 + 200;
let greet = 'Hello Word'

// Operator + (Addition)
let result = 10 + 20 // 30
let firstName = 'John'
let lastName = 'Smith' 
let fullName = firstName + lastName // JohnSmith

console.log(+'5') // 5
console.log(+'a') // NaN
console.log('5' + 5) // 55
console.log(+'5' + 5) // 10
console.log('11' + 1) // 111 (+ sign change to string)
console.log('11' - 1) // 10 (- sign change to number)

// Operator / (Divison)
console.log(10 / 3) // 3.3333333333333335

// Operator % (Modulus)
console.log(10 % 3) // 1

// Operator ** (Exponent)
console.log(2 ** 3) // 8

// Operator ++ 
let a = 5
let b = a++
console.log(a) // 6
console.log(b) // 5

// Operator --
let c = 7
let d = --c 
console.log(c) // 6
console.log(d) // 6

// Positioning
console.log('$' + 4 + 5) // $45
console.log(4 + 5 + '$') // 9$
// Use () to change the default behaviour
console.log('$' + (4 + 5)) // $9

// Operator Precedent
/*
()
++ --
* / %
+ -
*/
console.log(3 - 1 + 2 * 5 / 4 ) // 4.5
console.log((3 - 1 + 2) * 5 / 4) // 5

// Operator +=
let e = 10
e = e + 10 // 20
e += 10 // 30
// -= *= /= work the same

// Declare Multiple Variables in 1 Line
let f, g, h = 9
console.log(f, g, h) // undefined undefined 9
let i = j = k = 9
console.log(i, j, k) // 9 9 9 

/* Comparison Operators */

// Double Equal ==
console.log(11 == '11') // true because their values are the same
// Triple Equal === (Strict Equal)
console.log(11 === '11') // false because even though their values are the same, types are different
console.log('11' === '11') // true because because both values and types are the same

// Not Equal !=
console.log(11 != '11') // false becasue they are the same values
console.log(11 !== '11') // true becaue they are not the same types

// Other comparison operators are < <= > >=

