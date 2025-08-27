{
  // 1.
  async function getRandomPostTitle() {
    try {
      const randomIdx = Math.floor(Math.random() * posts.length);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) throw new Error("에러 발생함");
      const posts = await res.json();
      console.log(`Q1: Random Post Title: ${posts[randomIdx]}`);
    } catch (e) {
      console.error(e);
    }
  }

  getRandomPostTitle(); // Random Post Title: nostrum quis quasi placeat
}
{
  // 2.
  async function getUserInfo(userId) {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      if (!res.ok) throw new Error("에러 발생함");
      const { name, email } = res;
      console.log(`Q2: Name: ${name}, Email: ${email}`);
    } catch (e) {
      console.error(e);
    }
  }
  getUserInfo(1); // Name: Leanne Graham, Email: Sincere@april.biz
}
