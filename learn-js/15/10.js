const dealy = (ms) => new Promise((resolve) => setTimeout(resolve));
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

// const getAllWeatherIcon = () => {
//   getSunIcon().then((sun) => {
//     return getWaveIcon().then((wave) => {
//       return getCloudIcon().then((cloud) => {
//         console.log(sun, wave, cloud);
//       });
//     });
//   });
// };

//병렬 방식
const getAllWeatherIconAsync = async () => {
  console.time();

  const sunPromise = getSunIcon(); //비동기 처리가 끝날 때까지 기다림
  const wavePromise = getWaveIcon();
  const cloudPromise = getCloudIcon();

  const sun = await sunPromise;
  const wave = await wavePromise;
  const cloud = await cloudPromise;

  console.log(sun, wave, cloud);
  console.timeEnd();
};
//all, race, allSettled

const getAllWeatherIconAsyncs = async () => {
  console.time();
  const result = await Promise.race([
    getSunIcon(),
    getWaveIcon(),
    getCloudIcon(),
  ]);
  console.log(sun, wave, cloud);
  console.timeEnd();
};

getAllWeatherIconAsync();
console.log("hello");
