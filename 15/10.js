// fetch
// REST API
// URL로 자원을 구분하여 적절한 데이터를 처리하는 API
console.log("start");
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    console.log(res);
    if (!res.ok) throw new Error("network error");
    res.json();
  }) // json 형식으로 파싱해서 javascript 객체로 변환함
  .then((posts) => {
    for (const post of posts) {
      console.log(post);
    }
  })
  .catch((reason) => console.error(reason));
console.log("end");
