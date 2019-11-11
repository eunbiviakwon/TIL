// const promise = new Promise((resolve, reject) => {
//   const random = Math.floor(Math.random() * 10);
//   setTimeout(() => {
//     if (random >= 5) resolve(random);
//     else reject(new Error('Error'));
//   });
// });

// promise
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// let todos = [];
// // DOMs
// const $todos = document.querySelector('.todos');
// const render = data => {
//   console.log('RENDER');
//   todos = data;
//   console.log([data])
//   let html = '';
//   todos.forEach(({ id, content, completed }) => {
//     html += `
//       <li id="${id}" class="todo-item">
//         <input class="checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
//         <label for="ck-${id}">${content}</label>
//         <button class="remove-todo">X</button>
//       </li>`;
//   });
//   $todos.innerHTML = html;
// };
// const get = (url, f) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', url); //GET, POST 등은 대문자로 써준다. (관례)
//   xhr.send(); // json string으로 날려준다.
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState !== XMLHttpRequest.DONE) return;
//     if (xhr.status === 200) {
//       f.JSON.parse(xhr.response);
//     } else {
//       throw new Error(xhr.status);
//     }
//   };
// };
// const post = (url, payload, f) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open('POST', url); //GET, POST 등은 대문자로 써준다. (관례)
//   xhr.setRequestHeader({'content-type': 'application/json'})
//   xhr.send(JSON.stringify(payload)); // json string으로 날려준다.
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState !== XMLHttpRequest.DONE) return;
//     if (xhr.status === 200) { // 어떤 서버는 201을 던지는 경우도 있다.
//       f.JSON.parse(xhr.response);
//     } else {
//       throw new Error(xhr.status);
//     }
//   };
// };
// const patch = (url, payload, f) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open('PATCH', url); //GET, POST 등은 대문자로 써준다. (관례)
//   xhr.setRequestHeader({'content-type': 'application/json'})
//   xhr.send(JSON.stringify(payload)); // json string으로 날려준다.
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState !== XMLHttpRequest.DONE) return;
//     if (xhr.status === 200) { // 어떤 서버는 201을 던지는 경우도 있다.
//       f.JSON.parse(xhr.response);
//     } else {
//       throw new Error(xhr.status);
//     }
//   };
// };
// const del = (url, f) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open('DELETE', url); //GET, POST 등은 대문자로 써준다. (관례)
//   xhr.setRequestHeader({'content-type': 'application/json'})
//   xhr.send(); // json string으로 날려준다.
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState !== XMLHttpRequest.DONE) return;
//     if (xhr.status === 200) { // 어떤 서버는 201을 던지는 경우도 있다.
//       f.JSON.parse(xhr.response);
//     } else {
//       throw new Error(xhr.status);
//     }
//   };
// };
// const getTodos = () => {
//   get('/todos', render); // 비동기 함수는 리턴이 안된다. undefined. 비동기 함수는 콜백함수를 써야 한다. 순서에 무관함.
//   // 콜백헬
// };
// const generatedId = () => {
//   return todos.length ? Math.max(...todos.map(todo => todo.id))+ 1 : 1;
// }
// window.onload = getTodos;
// $input.onkeyup = ({target, keyCode}) => {
//   const content = target.value.trim();
//   if(!content || keyCode !== 13) return;
//   target.value = '';
//   // const newTodo = {id: generateId(), content, completed: false};
//   post('/todos', {id: generateId(), content, completed: false}, render);
// };
// $todos.onchange = ({target}) => {
//   // id / completed
//   const id = target.parentNode.id;
//   const completed = !todos.find(todo => todo.id === + id).completed;
//   patch(`/todos/${id}`, {completed}, render);
// };
// $todos.onclick = ({target}) => {
//   if (target.classList.contains('remove-todo')) return;
//   const id = target.parentNode.id;
//   DLE(`/todos/${id}`, render);
// };

let todos = [];
const $todos = document.querySelector('.todos');
const $input = document.querySelector('.input');
const render = data => {
  todos = data;
  console.log('[RENDER]', todos);
  let html = '';
  todos.forEach(({ id, content, completed }) => {
    html += `
    <li id="${id}" class="todo-item">
      <input class="checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
      <label for="ck-${id}">${content}</label>
      <button class="remove-todo">X</button>
    </li>`;
  });
  $todos.innerHTML = html;
}
const ajax = (() => {
  const req = (method, url, f, payload) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(payload));
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        f(JSON.parse(xhr.response));
      } else {
        console.log('ERROR:', xhr.status, xhr.statusText);
      }
    };
  };
  return {
    get(url, f) {
      req('GET', url, f);
    },
    post(url, payload, f) {
      req('POST', url, f, payload);
    },
    patch(url, payload, f){
      req('PATCH', url, f, payload);
    },
    del(url, f){
      req('DELETE', url, f);
    }
  };
})();
const getTodo = () => {
  ajax.get('/todos', render);
};
const removeTodo = ({ target }) => {
  if (!target.classList.contains('remove-todo')) return;
  ajax.del(`/todos/${target.parentNode.id}`, render);
};
const toggleCheckBox = ({ target }) => {
  const id = target.parentNode.id;
  const completed = !todos.find((todo) => todo.id === +id).completed
  ajax.patch(`/todos/${id}`, { completed }, render);
};
const maxId = () => {
  return todos.length? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
}
const addTodo = ({ target, keyCode }) => {
  const content = target.value.trim();
  if(keyCode !== 13 || content === '') return;
  target.value = '';
  ajax.post('/todos', {id: maxId(), content, completed: false}, render);
};
window.onload = getTodo;
$todos.onclick = removeTodo;
$todos.onchange = toggleCheckBox;
$input.onkeyup = addTodo;