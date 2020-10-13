
// lower priority value has more importance

class Node {
    constructor(val, priority){
        this.value = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor(){
        this.values = [];
    }

    enqueue = (val, priority) => {
        const newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp = () => {
        let currentIndex = this.values.length - 1;
        let currentNode = this.values[currentIndex];
        while (currentIndex > 0){
            let parentIndex = Math.floor((currentIndex - 1) / 2);
            let parentNode = this.values[parentIndex];

            if (currentNode.priority < parentNode.priority){
                this.values[currentIndex] = parentNode;
                this.values[parentIndex] = currentNode;
                currentIndex = parentIndex;
            }else {
                break;
            }
        }
    }

    dequeue = () => {
        if (this.values.length === 0) return null;
        let node = this.values[0];
        let lastNode = this.values.pop();
        if (this.values.length > 0){
            this.values[0] = lastNode;
            this.sinkDown();
        }
        return node;
    }

    sinkDown = () => {
        let currentIndex = 0;
        let currentNode = this.values[currentIndex];
        const length = this.values.length;
        while (true){
            let leftChildIndex = 2 * currentIndex + 1;
            let rightChildIndex = 2 * currentIndex + 2;
            let leftChild;
            let rightChild;
            let swap = null;

            if (leftChildIndex < length){
                leftChild = this.values[leftChildIndex];
                if (leftChild.priority < currentNode.priority){
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length){
                rightChild = this.values[rightChildIndex];
                if (swap === null && rightChild.priority < currentNode.priority ||
                    swap !== null && rightChild.priority < leftChild.priority){
                        swap = rightChildIndex;
                    }
            }

            if (swap){
                this.values[currentIndex] = this.values[swap];
                this.values[swap] = currentNode;
                currentIndex = swap;
            }else {
                break;
            }
        }
    }
}


const Q = new PriorityQueue();

Q.enqueue('light fever', 10);
Q.enqueue('broken arm', 5);
Q.enqueue('broken head', 3);
Q.enqueue('broken jaw', 4);
Q.enqueue('high fever', 2);
Q.enqueue('heart problems', 1);

Q.dequeue();
Q.dequeue();
Q.dequeue();
Q.dequeue();
Q.dequeue();
Q.dequeue();

console.log(Q);