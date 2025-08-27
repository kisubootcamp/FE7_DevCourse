const delay = (ms) => new Promise((resolve) => setTimeout(resolve,))
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
    getSunIcon().then((sun) => {
        return getWaveIcon().then(wave => {
            return getCloudIcon().then(cloud => {
                console.log(sun, wave, cloud);
            });
        });
    })
};

// 병렬로
const getAllWeatherIconAsync = async () => {
    console.time();

    const sunPromsie = getSunIcon();
    const wavePromsie = getWaveIcon();
    const cloudPromsie = getCloudIcon();

    const sun = await sunPromsie; // 1s
    const wave = await wavePromsie; // 1s
    const cloud = await cloudPromsie; // 1s
    console.log(sun, wave, cloud);
    console.timeEnd();
};
getAllWeatherIcons();
console.log("hello");


const getAllWeatherIconAsyncs = async () => {
    console.time();
    const [sun, wave, cloud] = await Promise.allSettled([ // all race allSettled
        getSunIcon(), getWaveIcon(), getCloudIcon(),
    ]);
    console.log(sun, wave, cloud);
    console.timeEnd();
};
getAllWeatherIconAsync();
getAllWeatherIconAsyncs();
console.log("hello");