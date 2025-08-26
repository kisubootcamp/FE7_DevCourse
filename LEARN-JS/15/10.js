// fetch
// REST API
// URL로 자원을 구분하여 적절한 데이터를 처리하는 API
fetch('https://jsonplaceholder.typicode.com/posts') //
  .then((res) => {
    if (!res.ok) throw new Error('network error');
    return res.json();
  })
  .then((posts) => {
    for (const post of posts) {
      console.log(post.title);
    }
  })
  .catch((reason) => console.error(reason));
