//ES5 콜백함수
//ES6 Promise 객체
//ES7 async.await (syntatic sugar) 내부적으로는 여전히 promise 사용

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchNumbers() {
  // 해당 함수가 promise를 반환한다
  await delay(2000); // await : async에서만 사용 가능, 해당 promise가 이행될 때 까지 대기
  return 2;
}

fetchNumbers() //
  .then(console.log);

//병렬 처리
const getSunIcon = async () => {
  await delay(2000);
  return "☀️";
};

const getWaveIcon = async () => {
  await delay(1000);
  return "🌊";
};

const getCloudIcon = async () => {
  await delay(2000);
  return "☁️";
};

const getAllWeatherIconsAsyncs = async () => {
  console.time();
  const [sun, wave, cloud] = await Promise.allSettled([
    // promise.all의 단점? 3개중 하나만 에러나도 나머지 2개도 캔슬
    // allSettled -> 개별적으로 관리
    getSunIcon(),
    getWaveIcon(),
    getCloudIcon(),
  ]);
  console.log(sun, wave, cloud);
  console.timeEnd();
};
getAllWeatherIconsAsyncs();
console.log("hello");

//promise => catch()
// async-awiat => try/catch
async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts"); // reponse객체 받음
    const data = await res.json(); //JSON -> jS객체
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}

getPosts();
