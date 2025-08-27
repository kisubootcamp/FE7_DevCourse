const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const getSunIcon = async () => {
  await delay(1000);
  return "🌞";
};

const getWaveIcon = async () => {
  await delay(1000);
  return "🌊";
};

const getCloudIcon = async () => {
  await delay(1000);
  return "☁️";
};

const getAllWeather = () => {
  getSunIcon().then((sun) => {
    return getWaveIcon().then((wave) => {
      return getCloudIcon().then((cloud) => {
        console.log(sun, wave, cloud);
      });
    });
  });
};
getAllWeather();

const getAllWeatherAsync = async () => {
  const sun = await getSunIcon();
  const wave = await getWaveIcon();
  const cloud = await getCloudIcon();
  console.log(sun, wave, cloud);
};
getAllWeatherAsync();
