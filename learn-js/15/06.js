//fetch
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

//Rest API
//url로 자원을 구분하여 정확한 데이터를 처러하는 API