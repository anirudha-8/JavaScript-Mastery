// ============= Activity 1 : Linked List ============= //

// --> task - 1 <-- //
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// --> task - 1 <-- //
class LinkedList {
    constructor() {
        this.head = null;
    }
    addEnd(item) {
        const newNode = new Node(item);
        if (!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next
            }
            curr.next = newNode;
        }
    }
    removeEnd() {
        if (!this.head) {
            return "Empty Linked List";
        } else if (!this.head.next) {
            const removedVal = this.head.value;
            this.head = null;
            return removedVal;
        } else {
            let curr = this.head;
            while (curr.next.next) {
                curr = curr.next
            }
            const removedVal = curr.next.value;
            curr.next = null;
            return removedVal;
        }
    }
    display() {
        let curr = this.head;
        let elements = [];
        while (curr) {
            elements.push(curr.value);
            curr = curr.next;
        }
        return `Linked List Elements are:- ${elements.join('->')}`;
    }
}
const list = new LinkedList();
list.addEnd(1);
list.addEnd(2);
list.addEnd(3);
list.addEnd(4);
list.addEnd(5);
console.log(list.display());
list.removeEnd()
console.log(list.display());

// ============= Activity 2 : Stack ============= //

// --> task - 3 <-- //
class Stack {
    constructor() {
        this.stackList = [];
    }
    push(item) {
        this.stackList.push(item);
    }
    pop() {
        if (this.stackList.length === 0) return `Stack Underflow`;
        return this.stackList.pop();
    }
    peek() {
        if (this.stackList.length === 0) return `Stack Underflow`;
        return `Peek element is: ${this.stackList[this.stackList.length - 1]}`;
    }
    // additional method
    display() {
        return `Stack elements are:- ${this.stackList.join(' ')}`;
    }
}
const stackList = new Stack();
stackList.push(1);
stackList.push(2);
stackList.push(3);
stackList.push(4);
stackList.push(5);
console.log(stackList.display());
stackList.pop();
console.log(stackList.display());
console.log(stackList.peek());

// --> task - 4 <-- //

function reverseStringUsingStack(str) {
    const stack = new Stack();
    for (const character of str) {
        stack.push(character);
    }
    let reversedStr = "";
    for (let i = 0; i < str.length; i++) {
        reversedStr += stack.pop();
    }
    return reversedStr;
}
const originalStr = "anirudha";
console.log(`Original String is: ${originalStr}\nReversed String is: ${reverseStringUsingStack(originalStr)}`);

// ============= Activity 3 : Queue ============= //

// --> task - 5 <-- //
class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(item) {
        this.queue.push(item);
    }
    dequeue() {
        if (!this.queue.length) return `Queue Underflow`;
        return this.queue.shift();
    }
    front() {
        if (!this.queue.length) return `Queue Underflow`;
        return `Front element is:- ${this.queue[0]}`;
    }
    // additional method
    display() {
        // return this.queue;
        return `Queue elements are:- ${this.queue.join(' ')}`;
    }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.display());
queue.dequeue();
console.log(queue.display());
console.log(queue.front());

// --> task - 6 <-- //
function simplePrinter(...tasks) {
    const printer = new Queue();
    for (const task of tasks) {
        printer.enqueue(task);
    }
    return printer.display();
}
console.log(simplePrinter("task1", "task2", "task3", "task4"));

// ============= Activity 4 : Binary Tree ============= //

// --> task - 7 <-- //
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// --> task - 8 <-- //
class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    inOrder(node = this.root, result = []) {
        if (node) {
            this.inOrder(node.left, result);
            result.push(node.value);
            this.inOrder(node.right, result);
        }
        return result;
    }
}
const tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);
tree.insert(8);
console.log("Binary Tree nodes are:- ", tree.inOrder());

// ============= Activity 5 : Graph ============= //

// --> task - 9 <-- //
// --> task - 10 <-- //
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex1).push(vertex2);
            this.adjacencyList.get(vertex2).push(vertex1);
        }
    }
    bfs(startingNode) {
        const visited = new Set();
        const queue = [startingNode];
        const result = [];
        visited.add(startingNode);
        while (queue.length > 0) {
            const currentNode = queue.shift();
            result.push(currentNode);

            const neighbors = this.adjacencyList.get(currentNode);
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        return result;
    }
    findShortestPath(start, end) {
        const visited = new Set();
        const queue = [[start]];

        while (queue.length > 0) {
            const path = queue.shift();
            const node = path[path.length - 1];

            if (node === end) {
                return path;
            }

            if (!visited.has(node)) {
                visited.add(node);
                const neighbors = this.adjacencyList.get(node);

                for (const neighbor of neighbors) {
                    const newPath = [...path, neighbor];
                    queue.push(newPath);
                }
            }
        }
        return null;
    }
}
const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);
console.log(graph.bfs(1));
console.log(graph.findShortestPath(1, 4)); 