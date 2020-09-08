
class Node {
    constructor(value) {
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push = (val) => {
        const newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else {
            newNode.previous = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length = this.length + 1;
        // this.print();
        return this;
    }

    pop = () => {
        if (!this.head) return null;
        let current = this.tail;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        }else {
            this.tail = current.previous;
            this.tail.next = null;
            current.previous = null;
        }
        this.length = this.length - 1;
        this.print();
        return current;
    }

    shift = () => {
        if (!this.head) return null;

        let current = this.head;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = this.head.next;
            this.head.previous = null;
            current.next = null;
        }
        this.length = this.length - 1;
        this.print();
        return current;
    }

    unshift = (val) => {
        let newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.head.previous = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length = this.length + 1;
        return this;
    }

    get = (index) => {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) { return this.head;}
        if (index === this.length - 1) return this.tail;

        if (index < Math.ceil(this.length / 2)){
            let current = this.head;
            let count = 0;
            while (count < index){
                count++;
                current = current.next;
            }
            return current;
        }else{
            let current = this.tail;
            let count = this.length - 1;
            while (count > index){
                count--;
                current = current.previous;
            }
            return current;
        }
    }

    set = (index, value) => {
        if (index < 0 || index >= this.length) return null;

        let current = this.get(index);
        current.value = value;
        return this;
    }

    insert = (index, value) => {
        if (index < 0 || index > this.length) return null;
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);

        let newNode = new Node(value);
        let current = this.get(index);
        let previousElem = this.get(index - 1);

        previousElem.next = newNode;
        newNode.previous = previousElem;
        newNode.next = current;
        current.previous = newNode;
        this.length = this.length + 1;
        this.print();
        return this;
    }

    remove = (index) => {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let previousElem = this.get(index - 1);
        let nextElem = this.get(index + 1);
        let currentElem = this.get(index);
        currentElem.next = null;
        currentElem.previous = null;
        previousElem.next = nextElem;
        nextElem.previous = previousElem;
        this.length = this.length - 1;
        this.print();
        return this;
    }

    print = () => {
        let current = this.head;
        while (current.next){
            console.log(current.value);
            current = current.next;
        }
        console.log(current.value);
    }
}

const list = new DoublyLinkedList;
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);

// list.pop();
// list.shift();
// list.unshift(10);
// console.log(list.get(2));
// console.log(list.set(6, 'aaa'));

// list.insert(7, 'aaa');
list.remove(6);
// console.log(list);





