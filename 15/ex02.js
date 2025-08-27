// // 1.
// function getRandomPostTitle() {
//   const data = fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => {
//       return res.json();
//     })
//     .then((posts) => {
//       const random = Math.floor(posts.length * Math.random());
//       console.log("Random Post Title: " + posts[random].title);
//     });
// }

// getRandomPostTitle(); // Random Post Title: nostrum quis quasi placeat

// // 2.
// function getUserInfo(userId) {
//   const data = fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     .then((res) => res.json())
//     .then((info) => console.log(info));
//   return data;
// }
// getUserInfo(1); // Name: Leanne Graham, Email: Sincere@april.biz

// // 3.
// function getPostDetails(postId) {
//   const data = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//     .then((res) => res.json())
//     .then((data) =>
//       console.log(`Post Title: ${data.title}, Body: ${data.body}`)
//     );

//   return data;
// }

// getPostDetails(1); // 출력 예상 결과는 아래에

// // 4.
// function getAllUsers() {
//   const data = fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
//     res.json().then((users) => {
//       for (const user of users) {
//         console.log(`Name: ${user.name}, Email: ${user.email}`);
//       }
//     })
//   );
//   return data;
// }

// getAllUsers();

// // 5.
// function getPostComments(postId) {
//   const data = fetch(
//     `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
//   )
//     .then((res) => res.json())
//     .then((comments) => {
//       for (const comment of comments) {
//         console.log(`Comment by ${comment.name}: ${comment.body}`);
//       }
//     });
//   return data;
// }

// getPostComments(1);

// // 6.
// function getAllCommentBodies() {
//   const data = fetch(`https://jsonplaceholder.typicode.com/comments`)
//     .then((res) => res.json())
//     .then((comments) => {
//       for (const comment of comments) {
//         console.log(comment.body);
//       }
//     });
//   return data;
// }

// getAllCommentBodies();

// // 7.
// function getSortedPostTitles() {
//   const data = fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then((res) => res.json())
//     .then((data) => {
//       data.sort((a, b) => a.title.localeCompare(b.title));
//       for (const d of data) {
//         console.log(d.title);
//       }
//     });
//   return data;
// }

// getSortedPostTitles();

// // 8.
// function getAllUserAddresses() {
//   const data = fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then((res) => res.json())
//     .then((data) => {
//       for (const d of data) {
//         console.log(
//           `of ${d.name}: ${d.address.suite} ${d.address.street}, ${d.address.city}, ${d.address.zipcode}`
//         );
//       }
//     })
//     .catch(console.error);
// }

// getAllUserAddresses();

// 9.
function getUserPostTitles(userId) {
  const data = fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      for (const d of data) {
        console.log(`Post Title: ${d.title}`);
      }
    });
}

getUserPostTitles(1);
