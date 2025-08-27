const dealy = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const getSunIcon = async () => {
  await dealy(1000);
  return "🌞";
};
const getWaveIcon = async () => {
  await dealy(1000);
  return "🌊";
};
const getCloudIcon = async () => {
  await dealy(1000);
  return "☁️";
};

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

const getAllWeatherIconsAsync = async () => {
  const sun = await getSunIcon();
  const wave = await getWaveIcon();
  const cloud = await getCloudIcon();
  console.log(sun, wave, cloud);
};
getAllWeatherIconsAsync();
