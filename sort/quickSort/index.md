# 快速排序

## 基本思想

1. 找到一个基准值，将数组分成两个部分，左边的都比基准值小，右边的都比基准值大。
   > 基准值一般选用第一个数，然后与最后一个数开始比较
2. 左右两个部分又可以进行上述过程，直到左右两个部分都只有一个元素。

## 特性

- 不稳定
- 原地排序
- 平均时间复杂度：O(nlogn)；平均空间复杂度：O(logn)
