const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const getSunIcon = async () => {
    await delay(1000);
    return "sun";
}

const getWaveIcon = async () => {
    await delay(1000);
    return "wave";
}

const getCloudIcon = async () => {
    await delay(1000);
    return "cloud";
}
const getAllWeatherIcons = () => {
    console.time();
    getSunIcon().then((sun) => {
        return getWaveIcon().then(wave => {
            return getCloudIcon().then(cloud => {
                console.log(sun, wave, cloud);
                console.timeEnd();
            });
        });
    })
};

// 병렬로
const getAllWeatherIconAsync = async () => {
    console.time();
    // const sunPromsie = getSunIcon();
    // const wavePromsie = getWaveIcon();
    // const cloudPromsie = getCloudIcon();

    // const sun = await sunPromsie; // 1s
    // const wave = await wavePromsie; // 1s
    // const cloud = await cloudPromsie; // 1s
    const sun = await getSunIcon();
    const wave = await getWaveIcon();
    const cloud = await getCloudIcon();
    console.log(sun, wave, cloud);
    console.timeEnd();
};
// getAllWeatherIcons();
getAllWeatherIconAsync();
console.log("hello");