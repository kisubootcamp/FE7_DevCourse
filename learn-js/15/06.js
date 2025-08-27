// fetch
// REST API
// URL로 자원을 구분하여 적절한 데이터를 

console.log("start");
fetch("https://jsonplaceholder.typicode.com/posts")
	.then((response) => {
		if (!response.ok) throw new Error("network error");
		return response.json(); // json 형식으로 파싱해서 javascipt 자료형으로 변환함
	})
	.then((posts) => {
		for (const post of posts) {
			console.log(post);
		}
	})
	.catch((reson) => console.error(reason));
console.log("end");

// 콘솔엔 start, end, fetch순으로 됨
