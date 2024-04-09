console.log(getArrayParams(-99, 99, 10)) // { min: -99, max: 99, avg: 3.33 }
console.log(getArrayParams(1, 2, 3, -100, 10))  // { min: -100, max: 10, avg: -16.80 }
console.log(getArrayParams(5))  // { min: 5, max: 5, avg: 5 }



 // summElementsWorker
 console.log(summElementsWorker()); // 0
 console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61
 
 // differenceMaxMinWorker
 console.log(differenceMaxMinWorker()); // 0
 console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 20 - 10 => 10
 
 // differenceEvenOddWorker
 console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 266 - 213 => 53
 console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 114 - 383 => -269
 
 // averageEvenElementsWorker
 console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5
 console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // [64, 10, 40] => 38


 const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
  console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
  console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
  console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
  console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72