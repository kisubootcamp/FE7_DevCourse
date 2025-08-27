{
  // 1.
  async function getUniqueEmails() {
    const set = new Set();

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    for (const { email } of data) {
      set.add(email);
    }
    for (const s of set) {
      console.log(s);
    }
  }

  getUniqueEmails();
}
{
  // 2.
  async function getUserCommentsWithEmails(userId) {
    const res1 = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${userId}`
    );
    const data1 = await res1.json();
    const res2 = await fetch(
      `https://jsonplaceholder.typicode.com/users/${user}`
    );
    console.log(res1, res2);
  }

  getUserCommentsWithEmails(1); // 1번 게시글의 댓글을 가져와, 댓글의 작성자 이름과 이메일을 포함하는 객체 형태로 반환
}
