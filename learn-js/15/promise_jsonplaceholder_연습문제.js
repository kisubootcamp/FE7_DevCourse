//1
function getRandomPostTitle() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => {
      const randomNum = Math.floor(Math.random() * 100 - 1);
      console.log(posts[randomNum].title);
    });
}

getRandomPostTitle(); // Random Post Title: nostrum quis quasi placeat

//2
function getUserInfo(userId) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => res.json())
    .then((user) => {
      console.log(`Name: ${user.name}, Email: ${user.email}`);
    });
}
getUserInfo(1); // Name: Leanne Graham, Email: Sincere@april.biz

//3
function getPostDetails(postId) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((res) => res.json())
    .then((post) => {
      console.log(`Post Title: ${post.title}, Body: ${post.body}`);
    });
}

getPostDetails(1); // 출력 예상 결과는 아래에
//Post Title: sunt aut facere repella...생략..., Body: quia et suscipit ...생략...

//4
function getAllUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      // for (const user of users) {
      //   console.log(`Name: ${user.name}, Email: ${user.email}`);
      // }
      for (const { name, email } of users) {
        console.log(`Name: ${name}, Email: ${email}`);
      }
    });
}

getAllUsers();
/*
ame: Leanne Graham, Email: Sincere@april.biz
Name: Ervin Howell, Email: Shanna@melissa.tv
Name: Clementine Bauch, Email: Nathan@yesenia.net
Name: Patricia Lebsack, Email: Julianne.OConner@kory.org
Name: Chelsey Dietrich, Email: Lucio_Hettinger@annie.ca
Name: Mrs. Dennis Schulist, Email: Karley_Dach@jasper.info
Name: Kurtis Weissnat, Email: Telly.Hoeger@billy.biz
Name: Nicholas Runolfsdottir V, Email: Sherwood@rosamond.me
Name: Glenna Reichert, Email: Chaim_McDermott@dana.io
Name: Clementina DuBuque, Email: Rey.Padberg@karina.biz
*/

//5
function getPostComments(postId) {
  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then((res) => res.json())
    .then((comments) => {
      for (const comment of comments) {
        console.log(`Comment by ${comment.name}: ${comment.body}`);
      }
    });
}

getPostComments(1);

//6
function getAllCommentBodies() {
  fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then((res) => res.json())
    .then((comments) => {
      for (const comment of comments) {
        console.log(`Comment: ${comment.body}`);
      }
    });
}

getAllCommentBodies();

//7
function getSortedPostTitles() {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => res.json())
    .then((posts) => {
      const sortTitles = posts.map((post) => post.title).sort();
      for (const title of sortTitles) {
        console.log(`${title}`);
      }
    });
}

getSortedPostTitles();

//8
function getAllUserAddresses() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      for (const user of users) {
        console.log(
          `Address of ${user.name}: ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`
        );
      }
    });
}

getAllUserAddresses();

//9
function getUserPostTitles(userId) {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((res) => res.json())
    .then((posts) => {
      for (const post of posts) {
        console.log(`Post Title: ${post.title}`);
      }
    });
}

getUserPostTitles(1);
