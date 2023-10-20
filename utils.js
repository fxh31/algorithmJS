// 交换两个数的位置（arr：需要交换的数组；i，j: 需要交换的位置；）
// 异或运算交换：相同为0，不同为1；注意：该方法需要保证 i !== j
export const swap = (arr, i, j) => {
  arr[i] = arr[i] ^ arr[j]
  arr[j] = arr[i] ^ arr[j]
  arr[i] = arr[i] ^ arr[j]
  // return arr;
}
