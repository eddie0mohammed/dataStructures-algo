
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    } 
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue = (value) => {
        let newNode = new Node(value);

        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size = this.size + 1;
        this.print();
        return this;
    }

    dequeue = () => {
        if (!this.first) return null;
        let current = this.first;
        if (this.length === 1){
            this.first = null;
            this.tail = null;
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
        if (!current) return null;
        while (current.next){
            console.log(current.value);
            current = current.next;
        }
        console.log(current.value);
    }
}


const q = new Queue();

console.log('Enqueue--------------');
q.enqueue(1);
console.log('Enqueue--------------');
q.enqueue(2);
console.log('Enqueue--------------');
q.enqueue(3);
console.log('Enqueue--------------');
q.enqueue(4);


console.log('--------------');

console.log('Dqueue--------------');
q.dequeue();
console.log('Dqueue--------------');
q.dequeue();
console.log('Dqueue--------------');
q.dequeue();
console.log('Dqueue--------------');
q.dequeue();