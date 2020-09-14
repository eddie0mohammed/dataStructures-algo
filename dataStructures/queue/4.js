
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue = (val) => {
        let newNode = new Node(val);
        if (!this.first){
            this.first = newNode;
            this.last = newNode;
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size = this.size + 1;
        return this;
    }

    dequeue = () => {
        if (!this.first) return null;
        let current = this.first;

        this.first = current.next;
        current.next = null;
        this.size = this.size - 1;
        if (this.size === 0){
            this.first = null;
            this.last = null;
        }
        return current;
    }
}

