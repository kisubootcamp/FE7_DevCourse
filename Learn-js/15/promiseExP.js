// 1. 랜덤한 게시물의 제목을 가져와 출력하는 getRandomPostTitle 함수를 작성하세요.
function getRandomPostTitle() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      if (!res.ok) throw new Error("network Error");
      return res.json();
    })
    .then((posts) => {
      const randomIndex = Math.floor(Math.random() * posts.length);
      console.log(`Random Post Title: ${posts[randomIndex].title}`);
    })
    .catch((error) => {
      console.log("오류 발생");
    });
}

getRandomPostTitle(); // Random Post Title: nostrum quis quasi placeat

// 2. 사용자 ID를 입력받아 해당 사용자의 정보를 가져와 출력하는 getUserInfo 함수를 작성하세요.
function getUserInfo(userId) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => {
      if (!res.ok) throw new Error("network Error");
      return res.json();
    })
    .then((user) => {
      console.log(`Name: ${user.name}, Email: ${user.email}`);
    })
    .catch((error) => {
      console.error("오류 발생:", error);
    });
}
getUserInfo(1); // Name: Leanne Graham, Email: Sincere@april.biz

// 3. 게시물의 ID를 입력받아 해당 게시물의 내용을 가져와 출력하는 getPostDetails 함수를 작성하세요.
function getPostDetails(postId) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((res) => {
      if (!res.ok) throw new Error("network Error");
      return res.json();
    })
    .then((posts) => {
      console.log(`Post Title: ${posts.title}, Body: ${posts.body}`);
    })
    .catch((error) => {
      console.error("오류 발생:", error);
    });
}

getPostDetails(1); // 출력 예상 결과는 아래에

// 4. 모든 사용자의 이름과 이메일을 출력하는 getAllUsers 함수를 작성하세요.
function getAllUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      if (!res.ok) throw new Error("network Error");
      return res.json();
    })
    .then((user) => {
      for (const key of user) {
        console.log(`Name: ${key.name}, Email: ${key.email}`);
      }
    })
    .catch((error) => {
      console.error("오류 발생:", error);
    });
}

getAllUsers();

// 5. 특정 게시물의 ID를 입력받아 해당 게시물의 댓글을 가져와 출력하는 getPostComments 함수를 작성하세요.
function getPostComments(postId) {
  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then((res) => {
      if (!res.ok) throw new Error("network Error");
      return res.json();
    })
    .then((posts) => {
      /* posts.forEach((e) => {
        console.log(`Comment by ${e.name}: ${e.body}`);
      }); */

      for (const key in posts) {
        console.log(`Comment by ${posts[key].name}: ${posts[key].body}`);
      }
    })
    .catch((error) => {
      console.error("오류 발생:", error);
    });
}
getPostComments(1);

// 6. 모든 댓글의 내용을 가져와 출력하는 getAllCommentBodies 함수를 작성하세요.
function getAllCommentBodies() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => {
      if (!res.ok) throw new Error("network Error");
      return res.json();
    })
    .then((posts) => {
      posts.forEach((element) => {
        console.log(`Comment: ${element.body}`);
      });
    })
    .catch((error) => {
      console.error("오류 발생:", error);
    });
}

getAllCommentBodies();

// 7. 모든 게시물의 제목을 정렬하여 출력하는 getSortedPostTitles 함수를 작성하세요.
function getSortedPostTitles() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      if (!res.ok) throw new Error("network Error");
      return res.json();
    })
    .then((posts) => {
      // 모든 제목을 배열로 추출
      const titles = posts.map((post) => post.title).sort();

      // 출력
      titles.forEach((title) => {
        console.log(title);
      });
    })
    .catch((error) => {
      console.error("오류 발생:", error);
    });
}
getSortedPostTitles();

// 8. 모든 사용자의 주소 정보를 가져와 출력하는 getAllUserAddresses 함수를 작성하세요.
function getAllUserAddresses() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      if (!res.ok) throw new Error("network Error");
      return res.json();
    })
    .then((users) => {
      users.forEach((user) => {
        const { street, suite, city, zipcode } = user.address;
        console.log(
          `Address of ${user.name}: ${suite} ${street}, ${city}, ${zipcode}`
        );
      });
    })
    .catch((error) => {
      console.error("오류 발생:", error);
    });
}

getAllUserAddresses();

// 9. 특정 사용자가 작성한 모든 게시물의 제목을 출력하는 getUserPostTitles 함수를 작성하세요.
function getUserPostTitles(userId) {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((res) => {
      if (!res.ok) throw new Error("network Error");
      return res.json();
    })
    .then((posts) => {
      posts.forEach((post) => {
        console.log(`Post Title: ${post.title}`);
      });
    })
    .catch((error) => {
      console.error("오류 발생:", error);
    });
}

getUserPostTitles(1);
