// fetch
// REST API
// URL로 자원을 구분하여 적절한 데이터를 처리하는 API
console.log("start");
fetch("https://jsonplaceholder.typicode.com/posts")
.then((res) => {
     console,log(res);
     if (!res.ok) throw new Error("network error");
     return res.json(); // json 형식으로 파싱해서 javascript 자료형 변환함
    })
.then((posts) => {
    for (const post of posts) {
        console.log(post.title);
        console.log(post.id);
        console.log(post.body);
    }
})
.catch((reason) => console.error(reason));
console.log("end");