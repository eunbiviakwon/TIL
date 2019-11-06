//1
// const solution1 = (todos) => {
//   let result;
//   result = todos.map(item => {
//     return {content : item};
//   })



//   return result;
// };
// console.log(solution1(['html', 'css', 'javascript']));

//2
// const solution1 = (todos) => {
//   let result;
//   result = todos.map((item, index) => {
//     return {id: index, content: item};
//   })

//   return result;
// };
// console.log(solution1(['html', 'css', 'javascript']));

//3
// const solution1 = (todos) => {
//   let result;
//   result = todos.map((item, index) => {
//     return {id: index, content: item, completed: false}
//   })



//   return result;
// };
// console.log(solution1(['html', 'css', 'javascript']));


//4
// const solution1 = (todos) => {
//   let result;
//   result = [...todos, 'sass']



//   return result;
// };
// console.log(solution1(['html', 'css', 'javascript']));



//1
// const solution2 = (todos) => {
//   let result;
//   result = todos.filter(item => {
//     return item.id === 1;
//   })


//   return result;
// };
// console.log(solution2([
//   { id: 1, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 3, content: 'Javascript', completed: false }
// ]));


//2
// const solution2 = (todos) => {
//   let result;
//   result = todos.filter(item => {
//     return item.completed !== true;
//   })


//   return result;
// };
// console.log(solution2([
//   { id: 1, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 3, content: 'Javascript', completed: false }
// ]));


//3
// const solution2 = (todos) => {
//   let result;
//   result = todos.map(item => {
//     return item.content;
//   })


//   return result;
// };
// console.log(solution2([
//   { id: 1, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 3, content: 'Javascript', completed: false }
// ]));


//4
// const solution2 = (todos) => {
//   let result;
//   result = todos.map(item => {
//     return [item.completed]
//   })


//   return result;
// };
// console.log(solution2([
//   { id: 1, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 3, content: 'Javascript', completed: false }
// ]));


//5
// const solution2 = (todos) => {
//   let result;
//   result = todos.map(item => {
//     return {...item, completed: false}
//   })


//   return result;
// };
// console.log(solution2([
//   { id: 1, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 3, content: 'Javascript', completed: false }
// ]));


//6
const solution2 = (todos) => {
  let result;
  result = todos.map(item => {
    return {...item, completed: !item.completed};
  })


  return result;
};
console.log(solution2([
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
]));


