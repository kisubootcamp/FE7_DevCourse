// fetch
// REST API
// URL로 자원을 구분하여 적절한 데이터를 처리하는 API

console.log("start");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    console.log(res);
    if (!res.ok) throw new Error("network error");
    return res.json();
  })
  .then((posts) => {
    for (const { title } of posts) {
      console.log(title);
    }
  })
  .catch((reason) => console.error(reason));

console.log("end");
