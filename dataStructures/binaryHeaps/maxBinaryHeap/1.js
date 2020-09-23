
class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }

    insert = (val) => {
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp = () => {
        let index = this.values.length - 1;
        let elem = this.values[index];
        while (index > 0){
            let parentIndex = Math.floor((index - 1) / 2);
            let parentElem = this.values[parentIndex];
            if (parentElem < elem){
                this.values[index] = parentElem;
                this.values[parentIndex] = elem;
                index = parentIndex;
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

// [199, 55, 41, 39, 27, 12, 33, 18]

console.log(heap);
