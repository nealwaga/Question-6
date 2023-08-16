function findMisiingNumber(arr) {
    // Calculating the sum of the first natural numbers
    const n = arr.length + 1;
    const totalSum = (n * (n + 1)) / 2;

    // Calculating the actual sum od elements in the array
    const actualSum = arr.reduce((sum, num) => sum + num, 0);

    // Missing number is the difference between the expected sum and the actual sum 
    const missingNUmber = totalSum - actualSum;
    return missingNUmber;
}

// Array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45 /* Missing number here */];

const missing = findMisiingNumber(numbers);
console.log("The missing number is:", missing);