{
  // 1
  const promise = new Promise((resolve) => resolve("성공"));
  promise //
    .then(console.log);
}
{
  // 2
  const promise = new Promise((resolve) => resolve(2));
  promise //
    .then((num) => num * 2)
    .then((num) => console.log(num));
}
{
  // 3
  const promise = new Promise((_, reject) => reject(new Error("에러")));
  promise //
    .catch((reason) => console.error(reason));
}
{
  // 4
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("비동기 작업 완료");
    }, 2000);
  });
  promise //
    .then(console.log);
}
{
  // 5
  const promise = new Promise((resolve) => resolve(2));
  promise //
    .then((num) => {
      return new Promise((resolve) => resolve(num * 2));
    })
    .then(console.log);
}
{
  // 6
  const promise = new Promise((resolve, reject) => {
    const condition = true;
    if (condition) resolve("성공");
    reject("실패");
  });
  promise //
    .then(console.log)
    .catch(console.error);
}
