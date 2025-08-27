// 1.
async function getRandomPostTitle() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) throw new Error('에러 발생함');
    const posts = await res.json();
    const titleArr = [];
    for (const post of posts) {
      titleArr.push(post.title);
    }
    console.log(
      titleArr[Math.floor(Math.random() * (titleArr.length - 1 + 1) + 1)]
    );
  } catch (error) {
    console.error(error);
  }
}
// getRandomPostTitle(); // Random Post Title: nostrum quis quasi placeat

// 2.
async function getUserInfo(userId) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!res.ok) throw new Error('에러 발생함');
    const user = await res.json();
    console.log(`Name: ${user.name}, Email: ${user.email}`);
  } catch (error) {
    console.log(error);
  }
}
// getUserInfo(1);

// 3.
async function getPostDetails(postId) {
  try {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/posts/' + postId
    );
    if (!res.ok) throw new Error('에러 발생함');
    const { title, body } = await res.json();
    console.log(`Q3: Post Title: ${title}, Body: ${body}`);
  } catch (error) {
    console.error(error);
  }
}
// getPostDetails(1);

// 4.
async function getAllUsers() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    if (!res.ok) throw new Error('에러 발생함');
    const users = await res.json();
    for (const { name, email } of users) {
      console.log(`Name: ${name}, Email: ${email}`);
    }
  } catch (error) {
    console.error(error);
  }
}

// getAllUsers();

// 5.
async function getPostComments(postId) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    if (!res.ok) throw new Error('에러 발생함');
    const posts = await res.json();
    for (const { body } of posts) {
      console.log(body);
    }
  } catch (error) {
    console.error(error);
  }
}

// getPostComments(1);

// 6.
async function getAllCommentBodies() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
    if (!res.ok) throw new Error('에러 발생함');
    const comments = await res.json();
    for (const comment of comments) {
      console.log(`Comment:${comment.body} `);
    }
  } catch (error) {
    console.error(error);
  }
}

// getAllCommentBodies();

// 7.
async function getSortedPostTitles() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    if (!res.ok) throw new Error('에러 발생함');
    const posts = await res.json();
    const sortTitles = posts.map((post) => post.title).sort();
    for (const title of sortTitles) {
      console.log(`${title} `);
    }
  } catch (error) {
    console.error(error);
  }
}

// getSortedPostTitles();

// 8.
async function getAllUserAddresses() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    if (!res.ok) throw new Error('에러 발생함');
    const users = await res.json();
    for (const user of users) {
      console.log(user.address);
    }
  } catch (error) {
    console.error(error);
  }
}

// getAllUserAddresses();

// 9.
async function getUserPostTitles(userId) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    if (!res.ok) throw new Error('에러 발생함');
    const posts = await res.json();
    for (const { title } of posts) {
      console.log(title);
    }
  } catch (error) {
    console.error(error);
  }
}

getUserPostTitles(1);
