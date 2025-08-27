// ES5
// 콜백함수
// ES6
// Promise 객체
// ES7
// async, await (syntatic sugar)

// Promise 객체 선언 안 하고도 똑같이 쓸 수 있음
// function fetchNumber() {
//   return new Promise((resolve) => resolve(2));
// }

// 둘이 똑같은 문법임

const dealy = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function fetchNumber() {
  await dealy(5000); // await은 비동기 코드가 진행되는 동안 기다리라는 뜻(내부적인 비동기 처리)
  return 2;
  // return dealy(2000).then(()=>2) : 원래는 이렇게 작성했어야 함
}

fetchNumber() //
  .then(console.log);

const getSunIcon = async () => {
  await dealy(1000);
  return "해";
};

const getWaveIcon = async () => {
  await dealy(1000);
  return "파도";
};

const getCloudIcon = async () => {
  await dealy(1000);
  return "구름";
};

const getAllWeatherIcons = async () => {
  // 이렇게 쓰면 이 3개 변수까지는 되게 빨리 출력됨
  // 이런 병렬 방식은 하나의 함수 안에서 서로 아무런 연관관계가 없어야 함, 서로 값을 공유, 응용하면 안됨
  const sunPromise = getSunIcon();
  const wavePromise = getWaveIcon();
  const cloudPromise = getCloudIcon();

  const sun = await sunPromise;
  const wave = await wavePromise;
  const cloud = await cloudPromise;
  console.log(sun, wave, cloud);
};
getAllWeatherIcons();

const getAllWeatherIconsAsyncs = async () => {
  console.time();
  // 이런 .all 메서드를 이용해서 할 수도 있음
  const result = await Promise.all([
    getSunIcon(),
    getWaveIcon(),
    getCloudIcon(),
  ]);
  console.log(result);
};

getAllWeatherIconsAsyncs();
