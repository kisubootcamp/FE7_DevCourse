async function getPostDetails(postId) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const post = await res.json();
    console.log(`Post Title: ${post.title}, Body: ${post.body}`);
  } catch (e) {
    console.error(e);
  }
}

getPostDetails(1); // 출력 예상 결과는 아래에
//Post Title: sunt aut facere repella...생략..., Body: quia et suscipit ...생략...

//4
async function getAllUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    for (const { name, email } of users) {
      console.log(`Name: ${name}, Email: ${email}`);
    }
  } catch (e) {
    console.error(e);
  }
}
getAllUsers();

//5
async function getPostComments(postId) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    const comments = await res.json();
    for (const comment of comments) {
      console.log(`Comment by ${comment.name}: ${comment.body}`);
    }
  } catch (e) {
    console.error(e);
  }
}

getPostComments(1);

//6
async function getAllCommentBodies() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
    const comments = await res.json();
    for (const comment of comments) {
      console.log(`Comment: ${comment.body}`);
    }
  } catch (e) {}
}

getAllCommentBodies();

//7
async function getSortedPostTitles() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await res.json();

    const sortTitles = posts.map((post) => post.title).sort();
    for (const title of sortTitles) {
      console.log(`${title}`);
    }
  } catch (e) {
    console.error(e);
  }
}

getSortedPostTitles();

//8
async function getAllUserAddresses() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    for (const user of users) {
      console.log(
        `Address of ${user.name}: ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`
      );
    }
  } catch (e) {
    console.error(e);
  }
}
getAllUserAddresses();

//9
async function getUserPostTitles(userId) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const posts = await res.json();
    for (const post of posts) {
      console.log(`Post Title: ${post.title}`);
    }
  } catch (e) {
    console.error(e);
  }
}

getUserPostTitles(1);
