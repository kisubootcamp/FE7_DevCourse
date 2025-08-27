{
  // 1.
  const promise = new Promise((resolve) => resolve("성공"));
  promise.then(console.log);
}
{
  // 2.
  const promise = new Promise((resolve) => resolve(2));
  promise.then((num) => num * 2).then((num) => console.log(num));
}
{
  // 3.
  const promise = new Promise((resolve, reject) => reject(new Error("에러")));
  promise.catch((reason) => console.error(err));
}
{
}
{
  // 5.
  const promise = new Promise((resolve) => resolve(2));
  promise //
    .then((num) => {
      return new Promise();
    });
}
