for (let i = 1; i < 10; i++) {
  for (let j = 0; i < 10; j++) {
    for (let k = 0; k < 10; k++) {
      const sum = i * i * i + j * j * j + k * k * k;
      const origin = i * 100 + j * 10 + k;
      if (sum === origin) {
        console.log(origin);
      }
    }
  }
}
