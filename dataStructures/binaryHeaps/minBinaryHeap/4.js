
class MinBinaryHeap {
    constructor(){
        this.values = [];
    }

    insert = (val) => {
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp = () => {
        let currentIndex = this.values.length - 1;
        let currentElem = this.values[currentIndex];
        while (currentIndex > 0){
            let parentIndex = Math.floor((currentIndex - 1) / 2);
            let parentElement = this.values[parentIndex];
            if (currentElem < parentElement){
                this.values[currentIndex] = parentElement;
                this.values[parentIndex] = currentElem;
                currentIndex = parentIndex;
            }else {
                break;
            }
        }
    }

    extractMin = () => {
        if (this.values.length === 0) return null;
        let min = this.values[0];
        let last = this.values.pop();
        if (this.values.length > 0){
            this.values[0] = last;
            this.sinkDown();
        }
        return min;
    }

    sinkDown = () => {
        let currentIndex = 0;
        let currentElem = this.values[currentIndex];
        const length = this.values.length;
        while (true){
            let leftChildIndex = 2 * currentIndex + 1;
            let rightChildIndex = 2 * currentIndex + 2;
            let leftChild;
            let rightChild;
            let swap = null;

            if (leftChildIndex < length){
                leftChild = this.values[leftChildIndex];
                if (leftChild < currentElem){
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length){
                rightChild = this.values[rightChildIndex];
                if (swap === null && rightChild < currentElem ||
                    swap !== null && rightChild < leftChild){
                        swap = rightChildIndex;
                    }
            }

            if (swap){
                this.values[currentIndex] = this.values[swap];
                this.values[swap] = currentElem;
                currentIndex = swap;
            }else {
                break;
            }
        }
    }
}

const heap = new MinBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);

heap.insert(55);
heap.insert(199);
heap.insert(45);


heap.extractMin();
heap.extractMin();
heap.extractMin();
heap.extractMin();


console.log(heap);