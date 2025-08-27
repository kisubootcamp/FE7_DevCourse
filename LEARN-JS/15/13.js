const dealy = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const getSunIcon = async () => {
  await dealy(1000);
  return '해';
};
const getWaveIcon = async () => {
  await dealy(1000);
  return '파도';
};
const getCloudIcon = async () => {
  await dealy(1000);
  return '구름';
};

// 병렬로 처리
const getAllWeatherIconsAsync = async () => {
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

const getAllWeatherIconsAsyncs = async () => {
  console.time();
  const result = await Promise.allSettled([
    getSunIcon(),
    getWaveIcon(),
    getCloudIcon(),
  ]);
  console.log(result.join(' '));
  console.timeEnd();
};
getAllWeatherIconsAsync();
console.log('hello');
