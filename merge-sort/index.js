function merge(arrLeft, arrRight) {
  const merged = [];
  let indexLeft = 0;
  let indexRight = 0;
  let indexMerge = 0;

  while (indexLeft < arrLeft.length && indexRight < arrRight.length) {
    if (arrLeft[indexLeft] <= arrRight[indexRight]) merged[indexMerge++] = arrLeft[indexLeft++];
    else merged[indexMerge++] = arrRight[indexRight++];
  }

  while (indexLeft < arrLeft.length) merged[indexMerge++] = arrLeft[indexLeft++];
  while (indexRight < arrRight.length) merged[indexMerge++] = arrRight[indexRight++];

  return merged;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const mid = arr.length / 2;
  const arrLeft = mergeSort(arr.slice(0, mid));
  const arrRight = mergeSort(arr.slice(mid));

  return merge(arrLeft, arrRight);
}

module.exports = { mergeSort };
