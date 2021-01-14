// Bài 1.Viết function truyền vào 1 mảng. Kiểm tra mảng đó có phải là mảng tăng dần hay không
function checkAscArr(arr) {
  for (let i = 0; i < arr.length; i++)
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  {
    return true;
  }
}
let number = [1, 2, 3, 4, 5, 6];
console.log(checkAscArr(number));

// Bài 2.Viết function truyền vào 1 mảng. Kiểm tra mảng đó có phải là mảng giảm dần hay không
function checkAsc(arr) {
  for (let i = 0; i < arr.length; i++)
    if (arr[i] < arr[i + 1]) {
      return false;
    }
  {
    return true;
  }
}
let number1 = [5, 4, 3, 4];
console.log(checkAsc(number1));

// Bài 3.Viết function truyền vào 1 mảng. Kiểm tra mảng đó có phải là mảng số chẵn tăng dần hay không
function checkAscNum(arr) {
  for (let i = 0; i < arr.length; i++)
    if (arr[i] % 2 != 0 > arr[i + 2]) {
      return false;
    } else if (arr[i] > arr[i + 1]) {
      return false;
    }
  {
    return true;
  }
}
let number2 = [2, 4, 6];
console.log(checkAscNum(number2));

// Bài 4.Viết function truyền vào 1 mảng. Kiểm tra mảng đó có phải là mảng số lẻ giảm dần hay không
function checkNum(arr) {
  for (let i = 0; i < arr.length; i++)
    if (arr[i] % 2 == 0 > arr[i + 1]) {
      return false;
    } else if (arr[i] < arr[i + 1]) {
      return false;
    }
  {
    return true;
  }
}
let number3 = [11, 9, 6, 1];
console.log(checkNum(number3));

// Bài 5.Viết function truyền vào 1 mảng. Tìm số lớn nhất trong mảng
function findMaxArr(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) if (max < arr[i]) max = arr[i];
  return max;
}
let sum = [1, 8, 2, 3, 4];
console.log(findMaxArr(sum));

// Bài 6.Viết function truyền vào 1 mảng. Tìm số nhỏ nhất trong mảng
function findMinArr(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) if (min > arr[i]) min = arr[i];
  return min;
}
let sum2 = [6, 5, 3, 2, 7];
console.log(findMinArr(sum2));

// Bài 7.Viết function truyền vào 1 mảng, kết quả trả về là
//  1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2

// Bài 8.Viết function truyền vào 1 chuỗi bất kỳ, có tác dụng sao chép đó chuỗi lên 10 lần

function repeatString(arr) {
  let sum = arr[0];
  let result = "";
  for (let i = 0; i < 10; i++) {
    result = `${sum}`;
  }
  return result.splice(0,0,10);
}
let num1 = [12];
console.log(repeatString(num1));
