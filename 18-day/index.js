// ============= Activity 1 : Sorting Algorithms ============= //

// --> task - 1 <-- //
function bblSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let isSwapped = false;
        for (j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }
    return arr;
}
console.log("Bubble Sort", bblSort([4, 2, 1, 3]));

// --> task - 2 <-- //
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
    }
    console.log("Selection Sort:", arr);
    return arr;
}
console.log("Selection Sort: ", selectionSort([4, 2, 1, 3]));

// --> task - 3 <-- //
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log("Quick Sort: ", quickSort([3, 6, 8, 10, 1, 2, 1]));

// ============= Activity 2 : Searching Algorithms ============= //

// --> task - 4 <-- //
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log("Linear Search: Index of target is", i);
            return i;
        }
    }
    console.log("Linear Search: Target not found");
    return -1;
}
console.log("Linear Search: ", linearSearch([1, 2, 3, 4, 5, 6, 7, 8], 8));

// --> task - 5 <-- //
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            console.log("Binary Search: Index of target is", mid);
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    console.log("Binary Search: Target not found");
    return -1;
}
console.log("Binary Search: ", binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 8));

// ============= Activity 3 : String Algorithms ============= //

// --> task - 6 <-- //
function countOccurrences(str) {
    let counts = {};
    for (let char of str) {
        counts[char] = (counts[char] || 0) + 1;
    }
    console.log("Character Counts:", counts);
    return counts;
}
console.log(countOccurrences("anirudha"));

// --> task - 7 <-- //
function longestSubstringWithoutRepeatingCharacters(str) {
    let maxLength = 0;
    let start = 0;
    let seenChars = {};
    for (let end = 0; end < str.length; end++) {
        let currentChar = str[end];
        if (seenChars[currentChar] !== undefined) {
            start = Math.max(start, seenChars[currentChar] + 1);
        }
        seenChars[currentChar] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }
    console.log("Longest Substring Length:", maxLength);
    return maxLength;
}
console.log(longestSubstringWithoutRepeatingCharacters("anirudhaaniruanirudhtanadfbeleanirudha"));

// ============= Activity 4 : Array Algorithms ============= //

// --> task - 8 <-- //
function rotateArray(arr, k) {
    k = k % arr.length;
    let rotated = arr.slice(-k).concat(arr.slice(0, -k));
    console.log("Rotated Array:", rotated);
    return rotated;
}
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));


// --> task - 9 <-- //
function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }
    console.log("Merged Array:", merged);
    return merged;
}
console.log(mergeSortedArrays([1, 3, 7], [2, 4, 9]));

// ============= Activity 5 : Dynamic Programming (Optional) ============= //

// --> task - 10 <-- //
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log("Fibonacci Sequence:", fib.slice(1));
    return fib[n];
}
console.log(fibonacci(8));

// --> task - 11 <-- //
function knapsack(values, weights, capacity) {
    let n = values.length;
    let dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));
    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    console.log("Maximum Value:", dp[n][capacity]);
    return dp[n][capacity];
}
console.log(knapsack([60, 100, 120], [10, 20, 30], 50));
