const dealy = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const getSunIcon = async () => {
  await dealy(2000);
  return "🌞";
};
const getWaveIcon = async () => {
  await dealy(1000);
  throw new Error("error");
  return "🌊";
};
const getCloudIcon = async () => {
  await dealy(2000);
  return "☁️";
};

// 병렬로
const getAllWeatherIconsAsync = async () => {
  console.time();

  const sunPromise = getSunIcon();
  const wavePromise = getWaveIcon();
  const cloudPromise = getCloudIcon();

  const sun = await sunPromise; // 1s
  const wave = await wavePromise; // 1s
  const cloud = await cloudPromise; // 1s

  console.log(sun, wave, cloud);
  console.timeEnd();
};

const getAllWeatherIconsAsyncs = async () => {
  console.time();
  const result = await Promise.allSettled([
    getSunIcon(),
    getWaveIcon(),
    getCloudIcon(),
  ]);
  console.log(result);
  // console.log(sun, wave, cloud);
  console.timeEnd();
};
getAllWeatherIconsAsyncs();
console.log("hello");
