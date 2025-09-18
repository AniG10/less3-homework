// 1.ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი: არგუმენტად გადაეცით ეს მასივი:
// 10, 50, 6, 7, 8, 11, 6, 3, 9;

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

let result = sumArray([10, 50, 6, 7, 8, 11, 6, 3, 9]);
console.log(result);

// 2.მოცემულია ობიექტი:

let user = {
  firstname: "giorgi",
  lastname: "saakadze",
  isloggedin: true,
};

function getFullName(userObj) {
  if (userObj.isloggedin === true) {
    return userObj.firstname + " " + userObj.lastname;
  } else {
    return false;
  }
}

console.log(getFullName(user));



// 	3.ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ:
// 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false
// შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:
// (აქ მეორე ვარიანტიც შეგვიძლია დავამატოთ

// ვერსია 1 (ციკლით)

function getMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

console.log(getMax([10, 50, 6, 7, 8, 11, 6, 3, 9]));

// ვერსია 2 (Math.max და spread operator)

function getMax2(numbers) {
  return Math.max(...numbers);
}

console.log(getMax2([10, 50, 6, 7, 8, 11, 6, 3, 9]));


// 4.დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი; თუ ლუწია დააბრუნოს - this number is even‘; თუ კენტია დააბრუნოს - this number is odd‘;


function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "this number is even";
  } else {
    return "this number is odd";
  }
}

console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7));
