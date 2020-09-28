
class MaxBinaryHeaps {
    constructor(){
        this.values = [];
    }

    insert = (val) => {
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp = () => {
        const elemIndex = this.values.length - 1;
        const elem = this.values[elemIndex];
        while (index > 0){
            let parentIndex = Math.floow((elemIndex - 1) / 2);
            let parentElem = this.values[parentElem];
            if (parentElem < elem){
                this.values[parentIndex] = elem;
                this.values[elemIndex] = parentElem;
                parentIndex = elemIndex;
            }else {
                break;
            }
        }
    }

    extractMax = () => {
        if (this.values.length === 0) return null;
        let max = this.values[0];
        let lastElem = this.values.pop();
        this.values[0] = lastElem;
        this.sinkDown();
        return max;
    }

    sinkDown = () => {
        let currentIndex = 0;
        const length = this.values.length - 1;
        const currentElem = this.values[currentIndex];
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
                if ((swap === null && rightChild > currentElem) ||
                (swap !== null && rightChild > leftChild)){
                    swap = rightChildIndex;
                }
            }

            if (swap){
                this.values[currentIndex] = this.values[swap];
                this.values[swap] = currentElem;
            }else {
                break;
            }
        }
    }
}