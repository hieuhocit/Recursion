function fibs(n) {
  const init = [0, 1];
  for (let i = 2; i <= n; i++) {
    let result = init[i - 1] + init[i - 2];
    init.push(result);
  }
  return init.splice(0, n);
}

function fibsRec(n, init = [0, 1]) {
  if (n <= 1) return init.splice(0, n);
  if (n === 2) return init;
  const result = init[init.length - 1] + init[init.length - 2];
  init.push(result);
  return fibsRec(n - 1, init);
}

module.exports = { fibs, fibsRec };