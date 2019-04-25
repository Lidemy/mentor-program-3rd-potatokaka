function capitalize(str) {
  const result = str[0].toUpperCase() + str.slice(1);
  return result;
}

console.log(capitalize('hello'));
