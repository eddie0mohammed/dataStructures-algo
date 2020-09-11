
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
        this.length = null;
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
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }else {
            this.tail = current.previous;
            this.tail.next = null;
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
            current.next = null;
            this.head.previous = null;
        }
        this.length = this.length - 1;
        this.print();
        return this;
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
        this.print();
        return this;
    }

    get = (index) => {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) return this.head;
        if (index === this.length - 1) return this.tail;
        
        let current;
        let count;
        if (index < Math.ceil(this.length / 2)){
            current = this.head;
            count = 0;
            while (count < index){
                current = current.next;
                count++;
            }
        }else{
            current = this.tail;
            count = this.length - 1;
            while (count > index){
                current = current.previous;
                count--;
            }
        }
        return count;
    }

    set = (index, value) => {
        if (index < 0 || index >= this.length) return null;
        
        let currentElem = this.get(index);
        currentElem.value = value;
        return this;
    }

    insert = (index, value) => {
        if (index < 0 || index > this.length) return null;
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);

        let newNode = new Node(value);
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

        if (this.length === 1){
            let current = this.head;
            this.head = null;
            this.tail = null
            return current;
        }
        let previousElem = this.get(index - 1);
        let currentElem = this.get(index);
        let nextElem = this.get(index + 1);

        previousElem.next = currentElem.next;
        nextElem.previous = currentElem.previous;
        currentElem.next = null;
        currentElem.previous = null;
        this.length = this.length - 1;
        return current;
    }

    reverse = () => {

        let tail = this.head;
        let previousElem = null;
        let currentElem = this.head;
        let nextElem = currentElem.next;

        while (currentElem.next !== null){
            currentElem.next = previousElem;
            currentElem.previous = nextElem;
            previousElem = currentElem;
            currentElem = nextElem;
            nextElem = currentElem.next;
        }

        this.head = currentElem;
        this.head.next = previousElem;
        this.head.previous = null;
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


list.unshift(10);
