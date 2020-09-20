
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
        if (!this.size){
            this.first = newNode;
            this.last = newNode;
        }else {
            this.last.next = newNode;
            this.last = newNode;
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
        if (!this.size){
            this.first = null;
            this.last = null;
        }
        return current;
    }

    print = () => {
        let current = this.first;
        while (current.next !== null){
            console.log(current.value);
            current = current.next;
        }
        console.log(current.value);
    }
}


const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);

q.dequeue();
// q.dequeue();
q.print();