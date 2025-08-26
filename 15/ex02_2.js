{
  // 1.
  function getRandomPostTitle() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("에러 발생함");
        return res.json();
      })
      .then((posts) => {
        const randomIdx = Math.floor(Math.random() * posts.length);
        console.log(`Q1: Random Post Title: ${posts[randomIdx]}`);
      })
      .catch(console.error);
  }

  getRandomPostTitle(); // Random Post Title: nostrum quis quasi placeat
}
{
  // 2.
  function getUserInfo(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error("에러 발생함");
        return res.json();
      })
      .then(({ name, email }) => {
        console.log(`Q2: Name: ${name}, Email: ${email}`);
      })
      .catch(console.error);
  }
  getUserInfo(1); // Name: Leanne Graham, Email: Sincere@april.biz
}
{
  // 3.
  function getPostDetails(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => {
        if (!res.ok) throw new Error("에러 발생함");
        return res.json();
      })
      .then(({ title, body }) => {
        console.log(`Q3: Post Titile: ${title}, Body: ${body}`);
      })
      .catch(console.error);
  }

  getPostDetails(1); // 출력 예상 결과는 아래에
}
{
  // 4.
  function getAllUsers() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        if (!res.ok) throw new Error("에러 발생함");
        return res.json();
      })
      .then((users) => {
        for (const { name, email } of users) {
          console.log(`Name: ${name}, Email: ${email}`);
        }
      })
      .catch(console.error);
  }

  getAllUsers();
}
{
  // 5.
  function getPostComments(postId) {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((res) => {
        if (!res.ok) throw new Error("에러 발생함");
        return res.json();
      })
      .then((posts) => {
        for (const { body } of posts) {
          console.log(body);
        }
      })
      .catch(console.error);
  }

  getPostComments(1);
}
{
  // 6.
  function getAllCommentBodies() {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then((res) => {
        if (!res.ok) throw new Error("에러 발생함");
        return res.json();
      })
      .then((comments) => {
        for (const comment of comments) {
          console.log(`Comment: ${comment.body}`);
        }
      })
      .catch(console.error);
  }

  getAllCommentBodies();
}
{
  // 7.
  function getSortedPostTitles() {
    // 여기에 코드를 작성하세요
  }

  getSortedPostTitles();
}
