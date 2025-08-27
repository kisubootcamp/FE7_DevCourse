{
	// 설명: 랜덤한 게시물의 제목을 가져와 출력하는 getRandomPostTitle 함수를 작성하세요.
	function getRandomPostTitle() {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => {
				if (!res.ok) throw new Error("network error");
				return res.json(); // json 형식으로 파싱해서 javascipt 자료형으로 변환함
			})
			.then((posts) => {
				const i = Math.floor(Math.random() * posts.length);
				console.log(`Q1.\nRandom Post Title: ${posts[i].title}`);
			})
			.catch((reason) => console.error(reason));
	}

	getRandomPostTitle();
}

{
	// 설명: 사용자 ID를 입력받아 해당 사용자의 정보를 가져와 출력하는 getUserInfo 함수를 작성하세요.
	function getUserInfo(userId) {
		fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
			.then((res) => {
				if (!res.ok) throw new Error("network error");
				return res.json();
			})
			.then(({ name, email }) => {
				console.log(`Q2.\nName: ${name}, Email: ${email}`);
			})
			.catch((reason) => console.error(reason));
	}

	getUserInfo(1);
}

{
	// 설명: 게시물의 ID를 입력받아 해당 게시물의 내용을 가져와 출력하는 getPostDetails 함수를 작성하세요.

	function getPostDetails(postId) {
		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
			.then((res) => {
				if (!res.ok) throw new Error("network error");
				return res.json();
			})
			.then(({ title, body }) => {
				console.log(`Q3.\nPost Title: ${title}\nBody: ${body}`);
			})
			.catch((reason) => console.error(reason));
	}

	getPostDetails(1);
}

{
	// 설명: 모든 사용자의 이름과 이메일을 출력하는 getAllUsers 함수를 작성하세요.
	function getUserInfo() {
		fetch(`https://jsonplaceholder.typicode.com/users/`)
			.then((res) => {
				if (!res.ok) throw new Error("network error");
				return res.json();
			})
			.then((userInfos) => {
				console.log(
					userInfos.reduce((result, { name, email }) => {
						return result + `Name: ${name}, Email: ${email}\n`;
					}, `Q4:\n`),
				);
			})
			.catch((reason) => console.error(reason));
	}

	getUserInfo();
}

{
	// 설명: 특정 게시물의 ID를 입력받아 해당 게시물의 댓글을 가져와 출력하는 getPostComments 함수를 작성하세요.
	function getPostComments(postId) {
		fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
			.then((res) => {
				if (!res.ok) throw new Error("network error");
				return res.json();
			})
			.then((comments) => {
				console.log(
					comments.reduce((result, { body }) => {
						return result + `Comment: ${body}\n`;
					}, `Q5:\n`),
				);
			})
			.catch((reason) => console.error(reason));
	}

	getPostComments(1);
}

{
	// 설명: 모든 게시물의 제목을 정렬하여 출력하는 getSortedPostTitles 함수를 작성하세요.
	function getAllCommentBodies() {
		// 여기에 코드를 작성하세요
		fetch(`https://jsonplaceholder.typicode.com/comments`)
			.then((res) => {
				if (!res.ok) throw new Error("에러 발생함");
				return res.json();
			})
			.then((comments) => {
				for (const comment of comments) {
					console.log(`Comment:${comment.body} `);
				}
			})
			.catch(console.error);
	}

	// getAllCommentBodies();
}

{
	// 설명: 모든 게시물의 제목을 정렬하여 출력하는 getSortedPostTitles 함수를 작성하세요.
	function getSortedPostTitles() {
		fetch(`https://jsonplaceholder.typicode.com/posts`)
			.then((res) => {
				if (!res.ok) throw new Error("network error");
				return res.json();
			})
			.then((posts) => {
				const sortTitles = posts.map((post) => post.title).sort();
				console.log(
					sortTitles.reduce((result, title) => {
						return result + `\nTitle: ${title}`;
					}, `Q7:`),
				);
			})
			.catch((reason) => console.error(reason));
	}

	getSortedPostTitles();
}

{
	// 설명: 모든 사용자의 주소 정보를 가져와 출력하는 getAllUserAddresses 함수를 작성하세요.
	function getAllUserAddresses() {
		fetch(`https://jsonplaceholder.typicode.com/users`)
			.then((res) => {
				if (!res.ok) throw new Error("network error");
				return res.json();
			})
			.then((users) => {
				console.log(
					users.reduce(
						(result, { name, address: { suite, street, city, zipcode } }) => {
							return (
								result +
								`\nAddress of ${name}: ${suite}, ${street}, ${city} ${zipcode}`
							);
						},
						`Q8:`,
					),
				);
			})
			.catch((reason) => console.error(reason));
	}

	getAllUserAddresses();
}

{
	// 설명: 특정 사용자가 작성한 모든 게시물의 제목을 출력하는 getUserPostTitles 함수를 작성하세요.
	function getUserPostTitles(userId) {
		fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
			.then((res) => {
				if (!res.ok) throw new Error("network error");
				return res.json();
			})
			.then((posts) => {
				console.log(
					posts.reduce((result, { title }) => {
						return result + `\nTitle: ${title}`;
					}, `Q9:`),
				);
			})
			.catch((reason) => console.error(reason));
	}

	getUserPostTitles(1);
}
