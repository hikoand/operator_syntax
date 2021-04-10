//1. String concatenation
console.log("my" + "cat"); //my cat
console.log("1" + 2); //12
console.log(`string literals: 1 + 2 = ${1 + 2}`); //string literals: 1 + 2 = 3

//2. Numeric operators

console.log(1 + 1); //add
console.log(1 - 1); //sunstract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//counter = counter + 1;
//preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); //preIncrement: 3, counter: 3

const postIncrement = counter++;
//postIncrement = counter;
// counter = counter + 1;
//변수에 할당한 후 증가
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); //postIncrement: 3, counter: 4

const preDecrement = --counter;
console.log(`postIncrement: ${preDecrement}, counter: ${counter}`); //preDecrement: 3, counter: 3

const postDecrement = counter--;
console.log(`postDecrement: ${postIncrement}, counter: ${counter}`); //postDecrement: 3, counter: 2

//4. Assignment operators 할당 연산자
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;

//5. Comparison operators 비교 연산자
console.log(10 < 6); //less than
console.log(10 <= 6); //less than or equal
console.log(10 > 6); //greater
console.log(10 >= 6); //greater than or equal

//6. Logical operators 논리연산자 || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2; //f

console.log(`or: ${value1 || value2 || check()}`);
//or연산자는 true가 나오면 멈추기 때문에 연산이 많은 함수를 먼저 호출하거나, 수식을 제일 앞으로 두면 X

console.log(`and: ${value1 && value2 && check()}`);
//and연산자는 false가 나오면 멈추기 때문에 연산이 많은 함수를 먼저 호출하거나, 수식을 제일 앞으로 두면 X

function check() {
  for (let i = 0; i < 10; i++) {
    console.log("wasting time");
  }
  return true;
}

//&& 연산자를 이용한 null check!
//nullableObject && nullableObject.somthing
//object가 null이면 false가 되기때문에 .somthing이 실행이 안된다.

/* if (nullableObject != null) {
  nullableObject.something;
} */

//! (not)
console.log(!value1); //true t , f를 바꿔서 출력

// 7.Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); //t
console.log(stringFive != numberFive); //f

// === strict equality, no type conversion
console.log(stringFive === numberFive); //f
console.log(stringFive !== numberFive); //t

//ellie1, 2 에는 각각 다른 reference가 들어있고 다른 object를 가르키고있음
const ellie1 = {nanme: "ellie"};
const ellie2 = {nanme: "ellie"};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //f
console.log(ellie1 === ellie2); //f
console.log(ellie1 === ellie3); //t

// null , undefined
console.log(null == undefined); //T
console.log(null === undefined); //F

// 8. Conditional operators: if
// if, else if, else
const name = "coder";
if (name === "ellie") {
  console.log("Welcome ellie");
} else if (name === "coder") {
  console.log("coder");
} else {
  console.log("unknown");
}

// 9. Ternary operator: ? 삼항조건 연산자
//condition ? value1 : value2
console.log(name === "coder" ? "YES" : "NO");

//switch , if else를 반복해야할 상황에서 사용

const browser = "Chrome";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!!");
    break;
  default:
    console.log("same all!");
    break;
}

//11. Loops (조건이 거짓이 될 때 까지 코드 무한반복)
//while loop, while the condition is truty,
//body code is executed
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}
//while: 3 , while: 2, while: 1

// do while (코드를 먼저 실행하고 조건확인)
//body code is executed first,
//then check the condition

do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);
//do while: 0 , i가 0이어도 실행됨

//for loop, for(begin; condition, step)
/*
1.begin은 한 번만 실행 (i를 준비운동 시키기!)
2.condition을 확인후 {} 출력
3.step 

1 , 2 , 3 , 2 , 3 , 2 이 조건에 맞을 때 까지 반복  
*/

for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

//inline variable declaration
for (let i = 3; i > 0; i = i - 2) {
  console.log(`inline variable for: ${i}`); //inline variable for: 3 inline variable for: 1
}

//nested loops ㄴ(👀)ㄱ

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

for (i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(`a:${i}`);
  }
}

for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`a2:${i}`);
}
