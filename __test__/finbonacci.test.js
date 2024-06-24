const { fibs, fibsRec } = require('../fibonacci/index');

describe('Fibonacci function', () => {
  for(let i = -10 ; i <= 200; i++) {
    test('Input of ' + i, () => {
      expect(fibsRec(i)).toStrictEqual(fibs(i));
    });
  }
});
