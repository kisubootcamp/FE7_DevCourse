// Promise => async/await

// 1. 랜덤한 게시물의 제목을 가져와 출력하는 getRandomPostTitle 함수를 작성하세요.
async function getRandomPostTitle() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) throw new Error("에러 발생함");
    const posts = await res.json();
    const randomIdx = Math.floor(Math.random() * posts.length);
    console.log(`Random Post Title: ${posts[randomIdx].title}`);
  } catch (error) {
    console.error(error);
  }
}
getRandomPostTitle();

// 2. 사용자 ID를 입력받아 해당 사용자의 정보를 가져와 출력하는 getUserInfo 함수를 작성하세요.
async function getUserInfo(userId) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!res.ok) throw new Error("에러 발생함");
    const { name, email } = await res.json();
    console.log(`Name: ${name}, Email: ${email}`);
  } catch (error) {
    console.error(error);
  }
}
getUserInfo(1);

// 3. 게시물의 ID를 입력받아 해당 게시물의 내용을 가져와 출력하는 getPostDetails 함수를 작성하세요.
async function getPostDetails(postId) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    if (!res.ok) throw new Error("에러 발생함");
    const { title, body } = await res.json();
    console.log(`Post Title: ${title}, Body: ${body}`);
  } catch (error) {
    console.error(error);
  }
}
getPostDetails(1);

// 4. 모든 사용자의 이름과 이메일을 출력하는 getAllUsers 함수를 작성하세요.
async function getAllUsers() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    if (!res.ok) throw new Error("에러 발생함");
    const users = await res.json();
    for (const { name, email } of users) {
      console.log(`Name: ${name}, Email: ${email}`);
    }
  } catch (error) {
    console.error(error);
  }
}
getAllUsers();

// 5. 특정 게시물의 ID를 입력받아 해당 게시물의 댓글을 가져와 출력하는 getPostComments 함수를 작성하세요.
async function getPostComments(postId) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    if (!res.ok) throw new Error("에러 발생함");
    const comments = await res.json();
    for (const { body } of comments) {
      console.log(body);
    }
  } catch (error) {
    console.error(error);
  }
}
getPostComments(1);

// 6. 모든 댓글의 내용을 가져와 출력하는 getAllCommentBodies 함수를 작성하세요.
async function getAllCommentBodies() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
    if (!res.ok) throw new Error("에러 발생함");
    const comments = await res.json();
    for (const { body } of comments) {
      console.log(`Comment: ${body}`);
    }
  } catch (error) {
    console.error(error);
  }
}
getAllCommentBodies();

// 7. 모든 게시물의 제목을 정렬하여 출력하는 getSortedPostTitles 함수를 작성하세요.
async function getSortedPostTitles() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    if (!res.ok) throw new Error("에러 발생함");
    const posts = await res.json();
    const sortTitles = posts.map((post) => post.title).sort();
    for (const title of sortTitles) {
      console.log(title);
    }
  } catch (error) {
    console.error(error);
  }
}
getSortedPostTitles();

// 8. 모든 사용자의 주소 정보를 가져와 출력하는 getAllUserAddresses 함수를 작성하세요.
async function getAllUserAddresses() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    if (!res.ok) throw new Error("에러 발생함");
    const users = await res.json();
    for (const user of users) {
      console.log(user.address);
    }
  } catch (error) {
    console.error(error);
  }
}
getAllUserAddresses();

// 9. 특정 사용자가 작성한 모든 게시물의 제목을 출력하는 getUserPostTitles 함수를 작성하세요.
async function getUserPostTitles(userId) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    if (!res.ok) throw new Error("에러 발생함");
    const posts = await res.json();
    for (const { title } of posts) {
      console.log(title);
    }
  } catch (error) {
    console.error(error);
  }
}

getUserPostTitles(1);
