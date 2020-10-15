
class Node {
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor(){
        this.nodes = [];
    }

    enqueue = (val, priority) => {
        const newNode = new Node(val, priority);
        this.nodes.push(newNode);
        this.bubbleUp();
    }

    bubbleUp = () => {
        let currentIndex = this.nodes.length - 1;
        let currentNode = this.nodes[currentIndex];
        while (currentIndex > 0){
            let parentIndex = Math.floor((currentIndex - 1) / 2);
            let parentNode = this.nodes[parentIndex];
            if (currentNode.priority < parentNode.priority){
                this.nodes[currentIndex] = parentNode;
                this.nodes[parentIndex] = currentNode;
                currentIndex = parentIndex;
            }else {
                break;
            }
        }
    }

    dequeue = () => {
        if (this.nodes.length === 0) return null;
        let elem = this.nodes[0];
        let last = this.nodes.pop();
        if (this.nodes.length > 0){
            this.nodes[0] = last;
            this.sinkDown();
        }
        return elem;
    }

    sinkDown = () => {
        let currentIndex = 0;
        let currentNode = this.nodes[currentIndex];
        const length = this.nodes.length;
        while (true){
            let leftChildIndex = 2 * currentIndex + 1;
            let rightChildIndex = 2 * currentIndex + 2;
            let leftChild;
            let rightChild;
            let swap = null;

            if (leftChildIndex < length){
                leftChild = this.nodes[leftChildIndex];
                if (leftChild.priority < currentNode.priority){
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length){
                rightChild = this.nodes[rightChildIndex];
                if (swap === null && rightChild.priority < currentNode.priority || 
                    swap !== null && rightChild.priority < leftChild.priority){
                        swap = rightChildIndex;
                }
            }

            if (swap){
                this.nodes[currentIndex] = this.nodes[swap];
                this.nodes[swap] = currentNode;
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