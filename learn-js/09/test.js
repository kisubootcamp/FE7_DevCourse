const time = function (time1, time2) {
  let resultTime = 0;
  if (time1 < time2) {
    resultTime = time2 - time1;
  } else {
    resultTime = 12 - time1 + time2;
  }
  return console.log(`${resultTime}시간 취침 가능합니다.`);
};

time(11, 2);
time(0, 7);
time(7, 3);
