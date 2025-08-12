// 4.
// 반복문 0(n), 0(n2), 0(n3) , 0(N X M)
function isAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  const charCount = {};
  // 첫번째 문자열에 객체의 키와 값으로 문자를 카운트해줌
  // { l: 1, i: 1, s: 1, t: 1, e: 1, n: 1 }
  for (const char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  // 비교할 문자열의 문자를 쪼개 해당하는 문자가 (객체 키)
  // 있는 지 없는지 있으면 카운트 한 숫자를 줄여줌
  // 없으면 리턴 false
  for (const char of str2) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }
  return true;
}
console.log(isAnagrams('listen', 'silent'));
