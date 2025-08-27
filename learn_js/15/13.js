const dealy = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getSunIcon = async () => {
  await dealy(2000);
  return '☀️';
};

const getWaveIcon = async () => {
  await dealy(2000);
  return '🌊';
};

const getCloudIcon = async () => {
  await dealy(1000);
  return '☁️';
};

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
  const [sun, wave, cloud] = await Promise.allSettled([
    getSunIcon(),
    getWaveIcon(),
    getCloudIcon(),
  ]);
  // console.log(result.join(" "));
  console.log(sun, wave, cloud);
  console.timeEnd();
};

getAllWeatherIconsAsyncs();
console.log('hello');
