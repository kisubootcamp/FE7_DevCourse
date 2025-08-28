// 20. async await
// 연습문제(jsonplaceholder) 
// ㄴ ex2 번의 promise-them => async-await로 바꾸기

// 3.
 async function getPostDetails(postId) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + postId)
      .then((res) => {
        if (!res.ok) throw new Error("에러 발생함");
        return res.json();
      })
      .then(({ title, body }) => {
        console.log(`Q3: Post Title: ${title}, Body: ${body}`);
      })
      .catch(console.error);
  }

  // getPostDetails(1); // 출력 예상 결과는 아래에