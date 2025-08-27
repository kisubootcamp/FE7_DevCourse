//

// 1
// 랜덤한 게시물의 제목을 가져와 출력하는 `getRandomPostTitle` 함수를 작성하세요.
// **API**: https://jsonplaceholder.typicode.com/posts
function getRandomPostTitle() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((posts) => {
      const randomIndex = Math.floor(Math.random() * posts.length);
      return posts[randomIndex].title;
    })
    .catch((error) => console.error("error:", error));
}

//

// 2
// **설명**: 사용자 ID를 입력받아 해당 사용자의 정보를 가져와 출력하는 `getUserInfo` 함수를 작성하세요.
// **API:** [https://jsonplaceholder.typicode.com/users/${userId}](https://jsonplaceholder.typicode.com/users/$%7BuserId%7D)
function getUserInfo(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((user) => {
      console.log(`Name: ${user.name}, Email: ${user.email}`);
    })
    .catch((error) => console.error("error:", error));
}
getUserInfo(1); // Name: Leanne Graham, Email: Sincere@april.biz

//

// 3
// **설명**: 게시물의 ID를 입력받아 해당 게시물의 내용을 가져와 출력하는 `getPostDetails` 함수를 작성하세요.
// **API**: [https://jsonplaceholder.typicode.com/posts/${postId}](https://jsonplaceholder.typicode.com/posts/$%7BpostId%7D)
function getPostDetails(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((post) => {
      console.log(`ID: ${post.id}`);
      console.log(`Title: ${post.title}`);
      console.log(`Body: ${post.body}`);
    })
    .catch((error) => console.error("error:", error));
}

getPostDetails(1); // 출력 예상 결과는 아래에

//

// 4
// **설명**: 모든 사용자의 이름과 이메일을 출력하는 `getAllUsers` 함수를 작성하세요.
// **API:** https://jsonplaceholder.typicode.com/users
function getAllUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((users) => {
      users.forEach((user) => {
        console.log(`Name: ${user.name}, Email: ${user.email}`);
      });
    })
    .catch((error) => console.error("error:", error));
}

getAllUsers();

//

// 5
// **설명**: 특정 게시물의 ID를 입력받아 해당 게시물의 댓글을 가져와 출력하는 `getPostComments` 함수를 작성하세요.
// **API**: [https://jsonplaceholder.typicode.com/comments?postId=${postId}](https://jsonplaceholder.typicode.com/comments?postId=$%7BpostId%7D)
function getPostComments(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((comments) => {
      comments.forEach((comment) => {
        console.log(`Name: ${comment.name}`);
        console.log(`Email: ${comment.email}`);
        console.log(`Body: ${comment.body}`);
        console.log("-----");
      });
    })
    .catch((error) => console.error("error:", error));
}

getPostComments(1);

//

// 6
// 모든 댓글의 내용을 가져와 출력하는 `getAllCommentBodies` 함수를 작성하세요.
// **API:** https://jsonplaceholder.typicode.com/comments
function getAllCommentBodies() {
  return fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((comments) => {
      comments.forEach((comment) => {
        console.log(comment.body);
      });
    })
    .catch((error) => console.error("error:", error));
}

getAllCommentBodies();

//

// 7
// 모든 게시물의 제목을 정렬하여 출력하는 getSortedPostTitles 함수를 작성하세요.
// API: https://jsonplaceholder.typicode.com/posts
function getSortedPostTitles() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((posts) => {
      const titles = posts.map((post) => post.title);
      titles.sort();
      titles.forEach((title) => console.log(title));
    })
    .catch((error) => console.error("error:", error));
}

getSortedPostTitles();

//

// 8
// 모든 사용자의 주소 정보를 가져와 출력하는 getAllUserAddresses 함수를 작성하세요.
// API: https://jsonplaceholder.typicode.com/users
function getAllUserAddresses() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((users) => {
      users.forEach((user) => {
        const address = user.address;
        console.log(
          `Street: ${address.street}, Suite: ${address.suite}, City: ${address.city}, Zipcode: ${address.zipcode}`
        );
      });
    })
    .catch((error) => console.error("error:", error));
}

getAllUserAddresses();

//

// 9
// 특정 사용자가 작성한 모든 게시물의 제목을 출력하는 `getUserPostTitles` 함수를 작성하세요.
// API: https://jsonplaceholder.typicode.com/posts?userId=${userId}
function getUserPostTitles(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((posts) => {
      posts.forEach((post) => {
        console.log(post.title);
      });
    })
    .catch((error) => console.error("error:", error));
}

getUserPostTitles(1);
