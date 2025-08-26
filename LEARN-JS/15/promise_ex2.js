// 연습문제 +
// 1.
// function getRandomPostTitle() {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => {
//       return res.json();
//     })
//     .then((posts) => {
//       const titleArr = [];
//       for (const post of posts) {
//         titleArr.push(post.title);
//       }
//       return titleArr;
//     })
//     .then((title) => {
//       console.log(
//         title[Math.floor(Math.random() * (title.length - 1 + 1) + 1)]
//       );
//     });
// }
// getRandomPostTitle(); // Random Post Title: nostrum quis quasi placeat

// 2.
// function getUserInfo(userId) {
//   fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     .then((res) => {
//       return res.json();
//     })
//     .then((user) => {
//       console.log(`Name: ${user.name}, Email: ${user.email}`);
//     });
// }
// getUserInfo(1); // Name: Leanne Graham, Email: Sincere@april.biz

// 3.
// function getPostDetails(postId) {
//   fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//     .then((res) => {
//       return res.json();
//     })
//     .then((post) => {
//       console.log(`Post Title: ${post.title}, body: ${post.body}`);
//     });
// }

// getPostDetails(1); // 출력 예상 결과는 아래에

// 4.
// function getAllUsers() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => {
//       return res.json();
//     })
//     .then((users) => {
//       for (const user of users) {
//         console.log(`name: ${user.name} email: ${user.email}`);
//       }
//     });
// }
// getAllUsers();

// 5.
// function getPostComments(postId) {
//   fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
//     .then((res) => {
//       return res.json();
//     })
//     .then((comments) => {
//       for (const comment of comments) {
//         console.log(`Comment by ${comment.name}: ${comment.body}`);
//       }
//     });
// }
// getPostComments(1);

// 6.
// function getAllCommentBodies() {
//   fetch(`https://jsonplaceholder.typicode.com/comments`)
//     .then((res) => {
//       return res.json();
//     })
//     .then((comments) => {
//       for (const comment of comments) {
//         console.log(`Comment : ${comment.body}`);
//       }
//     });
// }
// getAllCommentBodies();

// 7.
// function getSortedPostTitles() {
//   fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then((res) => {
//       return res.json();
//     })
//     .then((posts) => {
//       const titles = [];
//       for (const post of posts) {
//         titles.push(post.title);
//       }
//       titles.sort();
//       for (const title of titles) {
//         console.log(title);
//       }
//     });
// }

// getSortedPostTitles();

// 8.
// function getAllUserAddresses() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => {
//       return res.json();
//     })
//     .then((users) => {
//       for (const user of users) {
//         const { street, suite, city, zipcode, geo } = user.address;
//         console.log(
//           `Address of ${user.name}: ${suite} ${street}, ${city}, ${zipcode}`
//         );
//       }
//     });
// }

// getAllUserAddresses();

// 9.
function getUserPostTitles(userId) {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((res) => {
      return res.json();
    })
    .then((posts) => {
      for (const post of posts) {
        console.log(`Post Title: ${post.title}`);
      }
    });
}

getUserPostTitles(1);
