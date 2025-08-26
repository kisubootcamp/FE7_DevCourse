// fetch도 async-await로 만들 수 있음

fetch("https://jsonplaceholder.typicode.com/posts")
.then((res) => res.json())
.then(console.log);

// ->
async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}
getPosts();