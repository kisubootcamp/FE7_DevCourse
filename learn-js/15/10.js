// async-await fetch 기반

async function getPosts() {
  try {
    const res = await fetch("");
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}
getPosts();
