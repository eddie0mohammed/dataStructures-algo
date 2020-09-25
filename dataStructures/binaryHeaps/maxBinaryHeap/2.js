
class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }

    insert = (value) => {
        this.values.push(value);
        this.bubbleUp();
    }

    bubbleUp = () => {
        let elemIndex = this.values.length - 1;
        let elem = this.values[elemIndex];
        while (elemIndex > 0){
            let parentIndex = Math.floor((elemIndex - 1) / 2);
            let parentElem = this.values[parentIndex];
            if (elem > parentElem){
                this.values[elemIndex] = parentElem;
                this.values[parentIndex] = elem;
                elemIndex = parentIndex;
            }else {
                break;
            }
        }
    }

    extractMax = () => {
        if (this.values.length === 0) return null;
        const max = this.values[0];
        const last = this.values.pop();
        this.values[0] = last;
        this.sinkDown();
        return max; 
    }

    sinkDown = () => {
        let currentIndex = 0;
        const length = this.values.length;
        const currentElem = this.values[currentIndex];
        while (true){
            let leftChildIndex = 2 * currentIndex + 1;
            let rightChildIndex = 2 * currentIndex + 2;
            let leftChild;
            let rightChild;
            let swap = null;
            if (leftChildIndex < length){
                leftChild = this.values[leftChildIndex];
                if (leftChild > currentElem){
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length){
                rightChild = this.values[rightChildIndex];
                if (swap === null && rightChild > currentElem ||
                    swap !== null && rightChild > leftChild){
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

const heap = new MaxBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);

heap.insert(55);
heap.insert(199);

console.log(heap);

heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();

console.log(heap);
