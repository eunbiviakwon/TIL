// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   console.log(this);
// }
// console.log(this);
// const memnber = new Person('Ungmo', 'Lee');

// Person.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
//   console.log(this);
// }

// console.log(member.gerfullName());

// 

// const circle1 = {
//   radius: 5,
//   getDiameter() {
//     return 2 * this.radius;
//   }
// };

const circle = {
  // 프로퍼티: 객체 고유의 상태 데이터
  radius: 5,
  // 메소드: 상태 데이터를 참조하고 조작하는 동작
  getDiameter() {
    // 이 메소드가 자신이 속한 객체의 프로퍼티나 다른 메소드를 참조하려면
    // 자신이 속한 객체 circle 참조할 수 있어야 한다.
    return 2 * circle.radius;
  }
};

console.log(circle.getDia)



