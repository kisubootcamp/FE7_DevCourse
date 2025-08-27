// fetch
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    response.json();
  })
  .then((json) => console.log(json))
  .catch((error) => console.error("error:", error));

console.log("end");

// REST API
// URL로 자원을 구분하여 적절한 데이터를 처리하는 API
