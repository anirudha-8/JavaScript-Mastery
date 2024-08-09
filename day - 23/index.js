// ============= Activity 1 : Median of Two Sorted Arrays ============= //
function findMedianSortedArrays(nums1, nums2) {
    let merged = nums1.concat(nums2).sort((a, b) => a - b);
    let len = merged.length;

    if (len % 2 === 0) {
        return (merged[len / 2 - 1] + merged[len / 2]) / 2;
    } else {
        return merged[Math.floor(len / 2)];
    }
}
console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([0, 0], [0, 0]));
console.log(findMedianSortedArrays([], [1]));
console.log(findMedianSortedArrays([2], []));

// ============= Activity 2 : Merge k Sorted Lists ============= //
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
function mergeKLists(lists) {
    if (lists.length === 0) return null;
    while (lists.length > 1) {
        let a = lists.shift();
        let b = lists.shift();
        const merged = mergeTwoLists(a, b);
        lists.push(merged);
    }
    return lists[0];
}
function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 !== null ? l1 : l2;
    return dummy.next;
}
let l1 = new ListNode(1, new ListNode(4, new ListNode(5)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let l3 = new ListNode(2, new ListNode(6));
console.log(mergeKLists([l1, l2, l3]));

// ============= Activity 3 : Trapping Rain Water ============= //
function trap(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }
    return water;
}
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));

// ============= Activity 4 : N-Queens ============= //
function solveNQueens(n) {
    const solutions = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    solve(board, 0, solutions);
    return solutions;
}
function solve(board, row, solutions) {
    if (row === board.length) {
        solutions.push(board.map(r => r.join('')));
        return;
    }
    for (let col = 0; col < board.length; col++) {
        if (isSafe(board, row, col)) {
            board[row][col] = 'Q';
            solve(board, row + 1, solutions);
            board[row][col] = '.';
        }
    }
}
function isSafe(board, row, col) {
    for (let i = 0; i < row; i++) {
        if (board[i][col] === 'Q') return false;
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') return false;
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {
        if (board[i][j] === 'Q') return false;
    }
    return true;
}
console.log(solveNQueens(4));

// ============= Activity 5 : Word Ladder ============= //
function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
    let queue = [[beginWord, 1]];
    while (queue.length) {
        const [word, length] = queue.shift();
        if (word === endWord) return length;
        for (let i = 0; i < word.length; i++) {
            for (let c = 97; c <= 122; c++) {
                const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
                if (wordSet.has(newWord)) {
                    queue.push([newWord, length + 1]);
                    wordSet.delete(newWord);
                }
            }
        }
    }
    return 0;
}
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
