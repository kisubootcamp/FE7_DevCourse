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

const getAllWeatherIconsAsync = async () => {
  const sun = await getSunIcon();
  const wave = await getWaveIcon();
  const cloud = await getCloudIcon();
  console.log(sun, wave, cloud);
};
getAllWeatherIconsAsync();
