// Promise Then 연습문제(jsonplaceholder)

//1

// function getRandomPostTitle() {
//   fetch("https://jsonplaceholder.typicode.com/posts") //
//     .then((res) => res.json())
//     .then((posts) => {
//       for (const post of posts) {
//         console.log(post.title);
//       }
//     });
// }

// getRandomPostTitle();

//2
// function getUserInfo(userId) {
//   fetch(`https://jsonplaceholder.typicode.com/users/${userId}`) //
//     .then((res) => res.json())
//     .then(({name,email}) =>
//       console.log(`Name: ${name}, Email : ${email}`)
//     );
// }
// getUserInfo(1); // Name: Leanne Graham, Email: Sincere@april.biz

//3
// function getPostDetails(postId) {
//   fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//     .then((res) => {
//       if (!res.ok) throw new Error("에러 발생함");
//       return res.json();
//     })
//     .then(({ title, body }) => {
//       console.log(`Post Title : ${title}, Body : ${body}`);
//     });
// }

// getPostDetails(1); // 출력 예상 결과는 아래에

//4
// function getAllUsers() {
// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//     .then((res) => {
//       if (!res.ok) throw new Error("에러 발생함");
//       return res.json();
//     })
//     .then((posts) => {
//       for (const {name, email} of posts) {
//         console.log(`Name : ${name}, Email : ${email}`);
//       }
//     });
// }

// getAllUsers();

//5
// function getPostComments(postId) {
//   fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//     .then((res) => {
//       if (!res.ok) throw new Error("에러 발생함");
//       return res.json();
//     })
//     .then((posts) => {
//       for (const {name,body} of posts) {
//         console.log(`Comment by id ${name}:${body}`);
//       }
//     });
// }

// getPostComments(1);

//6
// function getAllCommentBodies() {
//   fetch("https://jsonplaceholder.typicode.com/comments")
//     .then((res) => res.json())
//     .then((posts) => {
//       for (const post of posts) {
//         console.log(`Comment : ${post.body}`);
//       }
//     });
// }

// getAllCommentBodies();

//7
// function getSortedPostTitles() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((posts) => {
//       const sortTitles = posts.sort((a, b) => b.title - a.title);
//       for (const title of sortTitles) {
//         console.log(`${title}`);
//       }
//     });
// }

// getSortedPostTitles();

//8
// function getAllUserAddresses() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((posts) => {
//       for (const post of posts)
//         console.log(
//           `Address of ${post.name} : ${post.address.suite} ${post.address.street}, ${post.address.city}, ${post.address.zipcode}`
//         );
//     });
// }

// getAllUserAddresses();

//9
function getUserPostTitles(userId) {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((res) => res.json())
    .then((posts) => {
      for (const post of posts) console.log(`Post Title: ${post.title}`);
    });
}

getUserPostTitles(1);
