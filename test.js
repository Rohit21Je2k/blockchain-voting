// function add(num1) {
//   return function (num2) {
//     if (!num2) {
//       return num1;
//     }
//     return add(num1 + num2);
//   };
// }

// console.log(add(4)(5)(6)(7)(9)());

// console.log("a");
// setTimeout(() => console.log("b"), 0);
// Promise.resolve(() => console.log("d")).then((res) => res());
// console.log("c");

// const calc = {
//   total: 0,
//   add: function (num) {
//     this.total += num;
//     return this;
//   },
//   subtract: function (num) {
//     this.total -= num;
//     return this;
//   },
// };

// const res = calc.add(2).subtract(3).multiply(5).divide(10);

// console.log(res.total);

// useEffect(() => {}, []);

// const func = useCallback(() => {}, []);

// case 1
// console.log("CASE 1");
// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// case 2
// console.log("CASE 2");
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// case 3
console.log("CASE 3");
let number;
for (let i = 0; i < 5; i++) {
  number = i;
  setTimeout(() => {
    console.log(number);
  }, 1000);
}
