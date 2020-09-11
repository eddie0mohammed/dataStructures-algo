
class Node {
    constructor(value) {
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
        const newNode = new Node(val);
        if (!this.first){
            this.first = newNode;
            this.last = newNode;
        }else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length = this.length + 1;
        // this.print();
        return this;
    }

    dequeue = () => {
        if (!this.first) return null;
        let current = this.first;
        if (this.length === 1){
            this.first = null;
            this.last = null;
        }else {
            this.first = current.next;
            current.next = null;
        }
        this.length = this.length - 1;
        this.print();
        return current;
    }

    print = () => {
        let current = this.first;
        while (current.next){
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

q.dequeue();
q.dequeue();
q.dequeue();
