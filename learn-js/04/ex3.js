// 1
const compress = (str) => {
  const map = {};
  let result = "";
  let prev = str[0];

  for (const c of str) {
    if (prev !== c) {
      result += `${prev}${map[prev]}`;
      map[prev] = 0;
      prev = c;
    }
    map[c] = (map[c] || 0) + 1;
  }

  result += `${prev}${map[prev]}`;

  return result;
};

// 2
const isPalindrome = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }

  return true;
};

// 3
