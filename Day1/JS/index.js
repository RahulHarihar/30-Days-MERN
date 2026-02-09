let arr = [10, 20, 30, 40, 50];

let sum = 0;
let max = arr[0];
let min = arr[0];

for (i = 0; i < arr.length; i++) {
	sum += arr[i];

	if (arr[i] > max) max = arr[i];
	if (arr[i] < min) min = arr[i];
}

let average = sum / arr.length;

console.log(sum);
console.log(max);
console.log(min);
console.log(average);