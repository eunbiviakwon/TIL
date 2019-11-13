<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <button class="button">와우</button>
  <script>
    const $button = document.querySelector('.button');
    let todos;

    const ajax = (method, url, payload) => {
     return fetch(url, {
       method,
       header: {'content-type' : 'application/json'},
       body: JSON.stringify(payload)
     });
    }

    $button.addEventListener('click', () => {
      getTodo();
    })
    const getTodo = () => {
      ajax('GET','url')
        .then((item) => todos = item);
    };

    const addTodo = () => {
      ajax('POST', 'url', {id: 4, content: 'CSS', completed: false})
        .then((item) => todos = item);

  </script>
</body>
</html>