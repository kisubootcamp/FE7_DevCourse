// fetch
// REST API
// URL로 자원을 구분하여 적절한 데이터를 처리하는 API
fetch("https://jsonplaceholder.typicode.com/posts") // promise 객체로 return함
  .then((res) => {
    if (!res.ok) throw new Error("network error");
    return res.json();
  }) // json 형식으로 파싱해서 javascript 자료형으로 변환함
  .then((posts) => {
    for (const post of posts) {
      console.log(post.body);
    }
  })
  .catch((reason) => console.error(reason));
