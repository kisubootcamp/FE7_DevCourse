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
// const getAllWeatherIcons = () => {
//   getSunIcon().then((sun) => {
//     return getWaveIcon().then((wave) => {
//       return getCloudIcon().then((cloud) => {
//         console.log(sun, wave, cloud);
//       });
//     });
//   });
// };
// const getAllWeatherIcons = async () => {
//   console.time();
//   const sun = await getSunIcon();
//   const wave = await getWaveIcon();
//   const cloud = await getCloudIcon();
//   console.log(sun, wave, cloud);
//   console.timeEnd();
// };
const getAllWeatherIcons = async () => {
  console.time();

  const sunPromise = getSunIcon();
  const wavePromise = getWaveIcon();
  const cloudPromise = getCloudIcon();

  const sun = await sunPromise();
  const wave = await wavePromise();
  const cloud = await cloudPromise();
  console.log(sun, wave, cloud);
  console.timeEnd();
};
getAllWeatherIcons();
