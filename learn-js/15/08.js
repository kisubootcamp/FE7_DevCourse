// fetch
// ㄴ 데이터 패치 
// ㄴ web api 원래 웹에서나 쓸 수 있는건데 최신 node.js에서도 되긴 함
// ㄴ free api : JSONPlaceholder ...

// REST API 
// ㄴ url로 자원을 구분하여 적절한 데이터를 처리하는 API

console.log("start");
fetch("https://jsonplaceholder.typicode.com/posts")
.then((res) => {
  if (!res.ok) throw new Error("network error");
  return res.json(); // json 형식으로 파싱해서 javascript 형변환
})
.then((posts) => {
  for (const {title} of posts){
    console.log(title);
  }
})
.catch((reason) => console.error(reason));
// 비동기임
console.log("end");