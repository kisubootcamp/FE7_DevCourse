{
	// 설명: 랜덤한 게시물의 제목을 가져와 출력하는 getRandomPostTitle 함수를 작성하세요.
	async function getRandomPostTitle() {
		try {
			const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
			if (!res.ok) throw new Error("error");
			const data = await res.json();
			const randomIdx = Math.floor(Math.random() * data.length);
			console.log(`Q1.\nRandom Post Title: ${data[randomIdx].title}`);
		} catch (e) {
			console.error(e);
		}
	}
	// getRandomPostTitle();
}

{
	// 설명: 사용자 ID를 입력받아 해당 사용자의 정보를 가져와 출력하는 getUserInfo 함수를 작성하세요.
	async function getUserInfo(userId) {
		try {
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/users/${userId}`,
			);
			if (!res.ok) throw new Error("error");
			const { name, email } = await res.json();
			console.log(`Q2.\nName: ${name}, Email: ${email}`);
		} catch (e) {
			console.error(e);
		}
	}

	// getUserInfo(1);
}

{
	// 설명: 게시물의 ID를 입력받아 해당 게시물의 내용을 가져와 출력하는 getPostDetails 함수를 작성하세요.

	async function getPostDetails(postId) {
		try {
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/posts/${postId}`,
			);
			if (!res.ok) throw new Error("error");
			const { title, body } = await res.json();
			console.log(`Q3.\nPost Title: ${title}\nBody: ${body}`);
		} catch (e) {
			console.error(e);
		}
	}

	// getPostDetails(1);
}

{
	// 설명: 모든 사용자의 이름과 이메일을 출력하는 getAllUsers 함수를 작성하세요.
	async function getUserInfo() {
		try {
			const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
			if (!res.ok) throw new Error("error");
			const userInfos = await res.json();
			console.log(
				userInfos.reduce((result, { name, email }) => {
					return result + `Name: ${name}, Email: ${email}\n`;
				}, `Q4:\n`),
			);
		} catch (e) {
			console.error(e);
		}
	}

	// getUserInfo();
}

{
	// 설명: 특정 게시물의 ID를 입력받아 해당 게시물의 댓글을 가져와 출력하는 getPostComments 함수를 작성하세요.
	async function getPostComments(postId) {
		try {
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
			);
			if (!res.ok) throw new Error("error");
			const comments = await res.json();
			console.log(
				comments.reduce((result, { body }) => {
					return result + `Comment: ${body}\n`;
				}, `Q5:\n`),
			);
		} catch (e) {
			console.error(e);
		}
	}

	// getPostComments(1);
}

{
	// 설명: 모든 댓글의 내용을 가져와 출력하는 getAllCommentBodies 함수를 작성하세요.
	async function getAllCommentBodies() {
		try {
			const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
			if (!res.ok) throw new Error("error");
			const comments = await res.json();
			console.log(
				comments.reduce((result, { body }) => {
					return result + `Comment: ${body}\n`;
				}, `Q6:\n`),
			);
		} catch (e) {
			console.error(e);
		}
	}

	// getAllCommentBodies();
}

{
	// 설명: 모든 게시물의 제목을 정렬하여 출력하는 getSortedPostTitles 함수를 작성하세요.
	async function getSortedPostTitles() {
		try {
			const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
			if (!res.ok) throw new Error("error");
			const posts = await res.json();
			const sortTitles = posts.map((post) => post.title).sort();
			console.log(
				sortTitles.reduce((result, title) => {
					return result + `\nTitle: ${title}`;
				}, `Q7:`),
			);
		} catch (e) {
			console.error(e);
		}
	}

	// getSortedPostTitles();
}

{
	// 설명: 모든 사용자의 주소 정보를 가져와 출력하는 getAllUserAddresses 함수를 작성하세요.
	async function getAllUserAddresses() {
		try {
			const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
			if (!res.ok) throw new Error("error");
			const users = await res.json();
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
		} catch (e) {
			console.error(e);
		}
	}

	// getAllUserAddresses();
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

	// getUserPostTitles(1);
}
