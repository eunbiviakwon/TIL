const solution1 = (todos) => {
  let result;
  result = todos.filter(item => {
    return item.id === 3;
  })


  return result;
};
console.log(solution1([
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
]));
