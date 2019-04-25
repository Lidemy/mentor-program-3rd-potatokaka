function join(str, concatStr) {
  let result = str[0];
  for (let i = 1; i < str.length; i += 1) {
    result = result + concatStr + str[i];
  } return result;
}

function repeat(str, times) {
  let result = '';
  for (let i = 0; i < times; i += 1) {
    result += str;
  } return result;
}

console.log(join('a', '!'));
console.log(repeat('a', 5));
