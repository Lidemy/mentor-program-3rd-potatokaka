function add(a, b) {
  let result = '';
  let carryNum = 0;
  const largerLength = a.length > b.length ? a.length : b.length;

  for (let i = 1; i <= largerLength; i += 1) {
    const aNum = a.length - i >= 0 ? Number(a[a.length - i]) : 0;
    const bNum = b.length - i >= 0 ? Number(b[b.length - i]) : 0;
    let sum = aNum + bNum + carryNum;
    carryNum = sum >= 10 ? 1 : 0;
    sum = sum >= 10 ? sum - 10 : sum;
    result = sum.toString() + result;

    if (i === largerLength && carryNum === 1) {
      result = 1 + result;
    }
  }
  return result;
}

module.exports = add;
