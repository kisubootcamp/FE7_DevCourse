// ### 문제 상황

// 1부터 n까지 숫자를 순서대로 출력하는 369 게임을 만들고자 합니다.

// - 숫자에 3, 6, 9가 없으면 그냥 숫자를 출력합니다.
// - 숫자에 3, 6, 9가 들어가면, 들어간 자리수 개수만큼 👏을 출력합니다.

// 예)
// - 3 → 👏
// - 13 → 👏
// - 33 → 👏👏

// ### 입력 예시
// clapGame369(5);
// clapGame369(33);

// 1, 2, 👏, 4, 5 // ,는 생략 가능
// 1, 2, 👏, 4, 5, 👏, 7, 8, 👏, 10, 11, 12, 👏, 14, 15, 👏, 17, 18, 👏, 20, 21, 22, 👏, 24, 25, 👏, 27, 28, 👏, 👏, 👏, 👏, 👏👏

function clapGame369(num) {
  let result = [];
  let r = "";
  for (let i = 1; i <= num; i++) {
    let n = i;
    let count = 0;
    let r = "";
    while (n > 0) {
      if (n % 10 === 3 || n % 10 === 6 || n % 10 === 9) {
        r += "👏";
        count++;
      }
      n = Math.floor(n / 10);
    }
    if (count === 0) result.push(i);
    else result.push(r);
  }
  for (let i of result) {
    r += i + ", ";
  }
  console.log(r);
}
clapGame369(5);
clapGame369(33);

// ### 문제 상황

// 화음(Chord)은 3개 이상의 음이 동시에 울리는 합성음을 의미하며, 3화음이 기본적입니다.

// 3화음은 Root(근음)으로부터 Third(3음), Fifth(5음)을 쌓아 올려 완성됩니다. ex) 도미솔(CEG), 파라도(FAC)

// 3화음은 음 사이의 반음 간격에 따라 4가지로 구분됩니다.

// major : 음 사이의 거리가 4, 3

// minor : 음 사이의 거리가 3, 4

// augmented : 음 사이의 거리가 4, 4

// diminished : 음 사이의 거리가 3, 3

// 예를 들면…

// *12음계 : C, C#, D, D#, E, F, F#, G, G#, A, A#, B

// | C major | C E G | C-E 거리 4, E-G사이 거리 3 |
// | --- | --- | --- |
// | C minor | C D# G | C-D# 거리 3, D#-G 거리 4 |
// | C augmented | C E G# | C-E 거리 4, E-G# 거리 4 |
// | C diminished | C D# F# | C-D# 거리 3, D#-F# 거리 3  |

// 3개의 음계를 입력하면 어떤 코드인지 출력하는 알고리즘을 만드시오.

const scale = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

function classifyTriad(arr) {
  first = scale.indexOf(arr[0]);
  second = scale.indexOf(arr[1]);
  third = scale.indexOf(arr[2]);

  // console.log(first);
  // console.log(second);
  // console.log(third);

  fToS = first > second ? 12 - first + second : second - first;
  sTot = second > third ? 12 - second + third : third - second;

  // console.log(fToS);
  // console.log(sTot);

  if (fToS === 4 && sTot === 3) {
    return console.log(arr[0] + " major");
  } else if (fToS === 3 && sTot === 4) {
    return console.log(arr[0] + " minor");
  } else if (fToS === 4 && sTot === 4) {
    return console.log(arr[0] + " augmented");
  } else if (fToS === 3 && sTot === 3) {
    return console.log(arr[0] + " diminished");
  } else console.log("불협화음");
}

classifyTriad(["C", "E", "G"]);
classifyTriad(["C#", "F", "A"]);
classifyTriad(["G", "B", "D#"]);
