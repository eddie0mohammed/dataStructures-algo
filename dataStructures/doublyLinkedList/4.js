
class Node {
    constructor(value){
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
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        this.length = this.length + 1;
        return this;
    }

    pop = () => {
        if (!this.head) return null;
        let current = this.tail;
        if (length === 1){
            this.head = null;
            this.tail = null;
        }else {
            this.tail = current.previous;
            current.previous = null;
            this.tail.next = null;
        }
        this.length = this.length - 1;
        return current;
    }

    shift = () => {
        if (!this.head) return null;
        let current = this.head;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        }else {
            this.head = current.next;
            current.next = null;
            this.head.previous = null;
        }
        this.length = this.length - 1;
        return current;
    }

    unshift = (val) => {
        let newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else {
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        }
        this.length = this.length + 1;
        return this;
    }

    get = (index) => {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) return this.head;
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
            while (count > index) {
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

        let previousElem = this.get(index - 1);
        let current = this.get(index);
        let newNode = newNode(value);

        newNode.previous = previousElem;
        newNode.next = current;
        previousElem.next = newNode;
        current.previous = newNode;
        this.length = this.length + 1;
        return this;
    }

    remove = (index) => {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        
        let current = this.get(index);
        currentElem.next = null;
        currentElem.previous = null;
        let previousElem = this.get(index - 1);
        let nextElem = this.get(index + 1);
        previousElem.next = nextElem;
        nextElem.previous = previousElem;
        this.length = this.length - 1;
        return current;
    }

    reverse = () => {

        this.tail = this.head;
        let currentElem = this.head;
        let previousElem = null;
        let nextElem = this.head.next;

        while (currentElem.next !== null){
            nextElem = currentElem.next;
            currentElem.next = previousElem;
            currentElem.previous = nextElem;
            previousElem = currentElem;
            currentElem = nextElem;
        }

        this.head = currentElem;
        this.head.next = previousElem;
        this.head.previous = null;
        this.print();
        return this;
    }

    print = () => {
        let current = this.head;
        while (current.next !== null){
            console.log(current.value);
            current = current.next;
        }
        console.log(current.value);
    }
}

const list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);

// console.log(list.get(5));
list.reverse();



