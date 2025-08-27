{
  // 1
  async function getRandomPostTitle() {
    // 여기에 코드를 작성하세요
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) throw new Error("에러 발생함");
      const posts = await res.json();
      const randomIdx = Math.floor(Math.random() * posts.length);
      console.log(`Q1: Random Post Title: ${posts[randomIdx].title}`);
    } catch (e) {
      console.error(e);
    }
  }

  getRandomPostTitle(); // Random Post Title: nostrum quis quasi placeat
}
{
  // 2
  async function getUserInfo(userId) {
    // 여기에 코드를 작성하세요
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users/" + userId
      );
      if (!res.ok) throw new Error("에러 발생함");
      const { name, email } = await res.json();
      console.log(`Q2: Name: ${name}, Email: ${email}`);
    } catch (e) {
      console.error(e);
    }
  }
  getUserInfo(1); // Name: Leanne Graham, Email: Sincere@april.biz
}
{
  // 3
  async function getPostDetails(postId) {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + postId
      );
      if (!res.ok) throw new Error("에러 발생함");
      const { title, body } = await res.json();
      console.log(`Q3: Post Title: ${title}, Body: ${body}`);
    } catch (e) {
      console.error(e);
    }
  }
  // getPostDetails(1); // 출력 예상 결과는 아래에
}
{
  // 4
  async function getAllUsers() {
    // 여기에 코드를 작성하세요
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      if (!res.ok) throw new Error("에러 발생함");
      const users = await res.json();
      for (const { name, email } of users) {
        console.log(`Name: ${name}, Email: ${email}`);
      }
    } catch (e) {
      console.error(e);
    }
  }

  // getAllUsers();
}
{
  // 5
  async function getPostComments(postId) {
    // 여기에 코드를 작성하세요
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );
      if (!res.ok) throw new Error("에러 발생함");
      const posts = await res.json();
      for (const { body } of posts) {
        console.log(body);
      }
    } catch (e) {
      console.error(e);
    }
  }

  // getPostComments(1);
}
{
  // 6
  async function getAllCommentBodies() {
    // 여기에 코드를 작성하세요
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
      if (!res.ok) throw new Error("에러 발생함");
      const comments = await res.json();
      for (const comment of comments) {
        console.log(`Comment:${comment.body} `);
      }
    } catch (e) {
      console.error(e);
    }
  }

  // getAllCommentBodies();
}
