// promise fetch -> async-fetch 만들기 연습문제

//3
async function getPostDetails(postId) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + postId
  );
  if (!res.ok) throw new Error("에러 발생");
  const { title, body } = await res.json();
  console.log(`Q3: Post Title: ${title}, Body: ${body}`);
}
getPostDetails(1);

//4
async function getAllUsers() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  if (!res.ok) throw new Error("에러 발생");
  const users = await res.json();
  for (const { name, email } of users) {
    console.log(`Name: ${name}, Email: ${email}`);
  }
}
getAllUsers();

//5
async function getPostComments(postId) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    if (!res.ok) throw new Error("에러 발생");
    const posts = await res.json();
    for (const { body } of posts) {
      console.log(body);
    }
  } catch (e) {
    console.error(e);
  }
}
getPostComments(1);
