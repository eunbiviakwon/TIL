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
     new Promise((resolve, reject) => {
      const xhr = new XHMLHttpRequest();

      xhr.open(method, 'url');
      xhr.setRequestHeader('content-type', 'application/json')
      xhr.send(JSON.stringify(paylaod))

      xhr.onreadystatechange=() => {
        if(xhr.readyState !== XMLHHttpRequest.DONE) return;
        if(xhr.status === 200) {
          resolve(JSON.parse(xhr.respond));
        } else {
          reject(console.log('에러닷'))
        }
      }
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