function calculateDailyFare(passengers){
  let sum = 0;
  for (const p of passengers) {
    let time = p[0] + p[1] + p[2] + p[3];
    let age = p[5] + p[6];
    let fare = calculateAgeFare(age) * calculateTimeFare(time) / 100;
    sum += fare;
  }
  console.log(sum);
  return sum;
}

function calculateAgeFare(age){
  if (age <= 7 || age >= 65) return 500;
  else if (age <= 18) return 1200;
  return 1500;
}

function calculateTimeFare(time){
	if(time[0] === "0" && time[1] <= 7){
		if(time[1] === "7" && (time[2] !== "0" || time[3] !== "0")) 
			return 100;
		return 90;
	}
	else if(time[0] === "2" && time[1] >= 2) return 110;
	return 100;
}

calculateDailyFare(["1200 24", "1220 25", "1255 22", "1340 12", "2310 24"]);