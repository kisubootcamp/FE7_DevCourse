// fectch
// REST API
// URL로 자원을 구분하여 적절한 데이터를 처리하는 API
fetch("https://jsonplaceholder.typicode.com/postsdddd") //
  .then((res) => {
    if (!res.ok) throw new Error("network error");
    return res.json(); // json 형식으로 파싱해서 javascript 자료형 변환함
  })
  .then((posts) => {
    for (const { title } of posts) {
      console.log(title);
    }
  })
  .catch((reason) => console.error(reason));
