const dealy = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getSunIcon = async () => {
  await dealy(1000);
  return '☀️';
};

const getWaveIcon = async () => {
  await dealy(1000);
  return '🌊';
};

const getCloudIcon = async () => {
  await dealy(1000);
  return '☁️';
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

//위와 아래는 같은 코드임. async를 사용했을 때 가독성이 더 좋아짐.

const getAllWeatherIconsAsync = async () => {
  const sun = await getSunIcon();
  const wave = await getWaveIcon();
  const cloud = await getCloudIcon();
  console.log(sun, wave, cloud);
};
getAllWeatherIconsAsync();
