// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.getArea = function() {
//  return Math.PI * (this.radius * this.radius);
// };

// const circle1 = new Circle(1);
// const circle2 = new Circle(2);

// console.log(circle1.getArea === circle2.getArea);

// console.log(circle1.getArea())
// console.log(circle2.getArea())

// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.getArea = function() {
//   this.getArea = function() {
//     return Math.PI * (this.radius ** 2);
//   };
// }
// const circle = new Circle(2);
// console.log(circle.__proto__ === Circle.prototype);
// console.log(Object.getPrototypeOf(circle) === Circle.prototype);
// console.log(circle.getArea())

//

//생성자 함수
// function Circle(radius) {
//   this.radius = radius;
//   this.getArea = function() {
//     return Math.PI * (this.radius ** 2);
//   };
// }

// //인스턴스 생성
// //반지름이 1인 인스턴스 생성
// const circle1 = new Circle(1);
// //반지름이 2인 인스턴스 생성
// const circle2 = new Circle(2);

// // Circle 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는 getArea메소드를 중복 생성하고
// // 모든 인스턴스가 중복 소유한다.
// // 따라서 getArea 메소드는 하나만 생성하여 모든 인스턴스가 공유하는 것이 바람직하다.
// console.log(circle1.getArea === circle2.getArea);
// console.log(circle1.getArea());
// console.log(circle2.getArea());
// console.log(_name);

// const Person = (function () {
//   let _name = '';
//   function Person(name) {
//     _name = name;
//   }

//   Person.prototype.sayHi = function () {
//     console.log(`Hi! ${_name}`);
//   };

//   return Person;
// }());

// const me = new Person('Lee');

// console.log(me);

// me.sayHi();

// const arr = [0];

// // 배열 요소의 추가
// arr['foo'] = 4;

// console.log(arr); // [ 0, 1 ]
// console.log(arr.length);

const arr = [1,2,3];

console.log(arr[arr.length - 1]);

