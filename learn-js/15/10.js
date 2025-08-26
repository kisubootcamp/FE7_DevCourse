// 예씨 코드

const delay = (ms) => new Promise((resolve) => setTimeout(resolve,ms));
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

// 순서 보장
// promise-then 버전
const getAllWeatherIcons = () => {
  getSunIcon().then((sun) => {
    return getWaveIcon().then((wave) => {
      return getCloudIcon().then((cloud) => {
        console.log(sun, wave, cloud);
      });
    });
  });
};
getAllWeatherIcons();

// async-await 버전
const getAllWeatherIconsAsync = async () => {
  console.time();
  
  const sun = await getSunIcon(); // 1s
  const wave = await getWaveIcon(); // 1s
  const cloud = await getCloudIcon(); // 1s

  console.log(sun, wave, cloud);
   console.timeEnd();
};
getAllWeatherIconsAsync();
// 동기처럼 해석, 그러나 동기가 된 것은 아님
console.log("hello");
// 얘가 먼저 출력 -> 동기처럼 동작하긴 하지만 동기가 되는 것이 아니라는 증거..?

// 병렬로, 시간 단축
// 3s -> 1s
// 값들이 서로 연결관계가 없을 때 사용 가능 (서로의 값을 활용, 응용하지 않을 때)
const getAllWeatherIconsAsync2 = async () => {
  console.time();

  const sunPromise = getSunIcon();
  const wavePromise = getWaveIcon();
  const cloudPromise = getCloudIcon();
  
  const sun = await sunPromise;
  const wave = await wavePromise; 
  const cloud = await cloudPromise; 

  console.log(sun, wave, cloud);
   console.timeEnd();
};
getAllWeatherIconsAsync2();

// 다른 병렬 법
const getAllWeatherIconsAsync3 = async () => {
  console.time();
  const [sun, wave, cloud] = await Promise.all([ //all -> allSettled를 쓰면 하나라도 오류 났을 때 캔슬 안 됨, 개별적으로 실행결과 관리
    getSunIcon(),
    getWaveIcon(),
    getCloudIcon(),
  ]);
  // console.log(result.join(" "));
  console.log(sun, wave, cloud);
  console.timeEnd();
};

getAllWeatherIconsAsync3();
// 하나라도 오류가 나면 캔슬됨