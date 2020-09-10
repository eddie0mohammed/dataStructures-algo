
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push = (value) => {
        let newNode = new Node(value);
        if (!this.head){
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
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        }else {
            this.tail = current.previous;
            this.tail.next = null
            current.previous = null;
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
            this.head.previous = null;
            current.next = null;
        }
        this.length = this.length - 1;
        return current;
    }

    unshift = (val) => {
        let newNode = new Node(val);
        if (!this.head) {
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
        if (index === this.tail - 1) return this.tail;

        let current;
        let count;
        if (index < Math.ceil(this.length / 2)){
            current = this.head;
            count = 0;
            while (count < index){
                count++;
                current = current.next;
            }
        }else{
            current = this.tail;
            count = this.length - 1;
            while (count > index){
                count--;
                current = current.previous;
            }
        }
        return current;
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

        let newNode = newNode(value);
        let previousElem = this.get(index - 1);
        let currentElem = this.get(index);
        previousElem.next = newNode;
        newNode.previous = previousElem;
        newNode.next = currentElem;
        currentElem.previous = newNode;
        this.length = this.length + 1;
        return this;
    }

    remove = (index) => {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let previousElem = this.get(index - 1);
        let currentElem = this.get(index);
        let nextElem = this.get(index + 1);

        previousElem.next = nextElem;
        nextElem.previous = previousElem;
        currentElem.next = null;
        currentElem.previous = null;
        this.length = this.length - 1;
        return currentElem;
    }

    reverse = () => {

        let tail = this.head;
        let previousElem = null;
        let currentElem = this.head;
        let nextElem = currentElem.next;

        while (currentElem.next !== null){
            currentElem.previous = nextElem;
            currentElem.next = previousElem;
            previousElem = currentElem;
            currentElem = nextElem;
            nextElem = currentElem.next;
        }

        this.head = currentElem;
        currentElem.previous = null;
        currentElem.next = previousElem;
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

const list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);

list.reverse();