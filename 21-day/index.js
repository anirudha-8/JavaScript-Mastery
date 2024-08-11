// ============= Activity 1 : Two Sum ============= //

const twoSum = (num, target) => {
    const map = new Map();
    for (let i = 0; i < num.length; i++) {
        const complement = target - num[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(num[i], i);
    }
    return -1;
}
console.log(twoSum([1, 2, 3, 4, 5, 6], 8));
console.log(twoSum([3, 1, 5, 9, 3], 8));
console.log(twoSum([1, 2, 6], 8));
console.log(twoSum([3, 3], 8));

// ============= Activity 2 : Reverse Integer ============= //

// --> task - 2 <-- //
const reverseInteger = (num) => {
    const sign = Math.sign(num);
    const reversed = parseInt(Math.abs(num).toString().split('').reverse().join('')) * sign;
    if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
        return 0;
    }
    return reversed;
}
console.log(reverseInteger(1234));
console.log(reverseInteger(5678));
console.log(reverseInteger(-8));
console.log(reverseInteger(80));

// ============= Activity 3 : Palindrome Number ============= //

// --> task - 3 <-- //
const palindrome = (n) => {
    if (n < 0) return false;
    return n === +(n.toString().split("").reverse().join(""));
}
console.log(palindrome(121));
console.log(palindrome(-121));
console.log(palindrome(10));
console.log(palindrome(0));

// ============= Activity 4 : Merge Two Sorted Lists ============= //

// --> task - 4 <-- //
function Node(data, next = null) {
    this.data = data;
    this.next = next;
}
function mergeLists(l1, l2) {
    let dummy = new Node(-1);
    let current = dummy;
    while (l1 !== null && l2 !== null) {
        if (l1.data <= l2.data) {
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
function printList(node) {
    const res = [];
    while (node !== null) {
        res.push(node.data);
        node = node.next;
    }
    console.log(res.join(" -> "));
}

const l1 = new Node(1, new Node(2, new Node(4)))
const l2 = new Node(1, new Node(3, new Node(4)))
const mergedList = mergeLists(l1, l2);
printList(mergedList);

// ============= Activity 5 : Valid Parentheses ============= //

// --> task - 5 <-- //
const validParentheses = (str) => {
    const stack = [];
    const paras = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (const char of str) {
        if (paras[char]) {
            stack.push(char);
        } else {
            const last = stack.pop();
            if (paras[last] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log(validParentheses("()[{()}()]"));
console.log(validParentheses("()"));
console.log(validParentheses("()[{}")); 