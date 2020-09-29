
class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }

    insert = (val) => {
        this.values.push(val);
        this.bubbleUp();
    }
    
    bubbleUp = () => {
        let elemIndex = this.values.length - 1;
        let elem = this.values[elemIndex];
        let parentIndex;
        let parentElem;
        while (elemIndex > 0){
            parentIndex = Math.floor((elemIndex - 1) / 2);
            parentElem = this.values[parentIndex];
            if (parentElem < elem){
                this.values[parentIndex] = elem;
                this.values[elemIndex] = parentElem;
                elemIndex = parentIndex;
            }else {
                break;
            }
        }
    }

    extractMax = () => {
        if (this.values.length === 0) return null;
        let max = this.values[0];
        let last = this.values.pop();
        if (this.values.length > 0){
            this.values[0] = last;
            this.sinkDown();
        }
        return max;
    }

    sinkDown = () => {
        let currentIndex = 0;
        let currentElem = this.values[currentIndex];
        const length = this.values.length;
        let leftChildIndex;
        let rightChildIndex;
        let leftChild;
        let rightChild;
        let swap = null;
        while (true){
            leftChildIndex = 2 * currentIndex + 1;
            rightChildIndex = 2 * currentIndex + 2;
            if (leftChildIndex < length){
                leftChild = this.values[leftChildIndex];
                if (leftChild > currentElem){
                    swap = leftChildIndex;
                }
            } 

            if (rightChildIndex < length){
                rightChild = this.values[rightChildIndex];
                if (swap === null && rightChild > currentElem ||
                    (swap !== null && rightChild > leftChild)){
                        swap = rightChildIndex;
                    }
            }

            if (swap){
                this.values[currentIndex] = this.values[swap];
                this.values[swap] = currentElem;
                currentIndex = swap;
            }else{
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
heap.insert(45);
// [199, 55, 41, 39, 27, 12, 33, 18]

heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();

console.log(heap);