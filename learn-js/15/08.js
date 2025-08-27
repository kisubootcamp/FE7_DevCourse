const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const getSunIcon = async () => {
	await delay(1000);
	return "☀️";
};
const getWaveIcon = async () => {
	await delay(1000);
  throw new Error("에러")
	return "🌊";
};
const getCloudIcon = async () => {
	await delay(1000);
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
// 일케하면 콜백지옥이 형성...

// await 키워드가 붙어있는 비동기 처리가 끝날 때까지 대기
const getAllWeatherIconsAsync = async () => {
	console.time();

	// 병렬로 처리??
	// const sunPromise = getSunIcon()
	// const wavePromise = getWaveIcon()
	// const cloudPromise = getCloudIcon()
	// const [sun, wave, cloud] = await Promise.all([
	// 	getSunIcon(),
	// 	getWaveIcon(),
	// 	getCloudIcon(),
	// ]); // 여기서 하나라도 실패하면 다 실패로 뜸

  const [sun, wave, cloud] = await Promise.allSettled([
		getSunIcon(),
		getWaveIcon(),
		getCloudIcon(),
	]);
  // 각자 관리가 가능

	// const sun = await sunPromise; // 1s
	// const wave = await wavePromise; // 1s
	// const cloud = await cloudPromise; // 1s
	console.log(sun, wave, cloud); // 처리 안했으면 3초 걸리는데 미리 호출하고 await 걸면 바로그냥~
	console.timeEnd();
};

// getAllWeatherIcons();
getAllWeatherIconsAsync();
console.log("hello");
