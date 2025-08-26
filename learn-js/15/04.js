// fetch
// response 객체를 promise 객체로 반환
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    if (!res.ok) throw new Error("network Error");
    return res.json();
  }) // JSON 형식의 본문을 Javascript 객체로 변환=>promise객체로 반환
  .then((posts) => {
    for (const post of posts) {
      console.log(post);
    }
  })
  .catch((reason) => {
    console.error(reason);
  });
