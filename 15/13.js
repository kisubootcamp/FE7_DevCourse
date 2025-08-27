const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const getSunIcon = async () => {
  await delay(1000);
  return "🌞";
};
// getSunIcon().then(console.log);

const getWaveIcon = async () => {
  await delay(1000);
  return "🌊";
};
const getCloudIcon = async () => {
  await delay(1000);
  return "☁️";
};

const getAllWeatherIconsAsyncs = async () => {
  console.time();
  const [sun, wave, cloud] = await Promise.race([
    getSunIcon(),
    getWaveIcon(),
    getCloudIcon(),
  ]);
  console.log(sun, wave, cloud);
  console.timeEnd();
};
getAllWeatherIconsAsyncs();
