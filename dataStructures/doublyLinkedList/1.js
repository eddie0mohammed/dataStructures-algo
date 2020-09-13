
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
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
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
        }else{
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
            this.head.previous = null;
            current.previous = null;
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

        let count;
        let current;
        if (index < Math.ceil(this.length / 2)){
            current = this.head;
            count = 0;
            while (count < index){
                current = current.next;
                count++;
            }
        }else {
            current = this.tail;
            count = this.length -1;
            while (count > index){
                current = current.previous;
                count--;
            }
        }
        return current;
    }

    set = (index, value) => {
        if (index < 0 || index >= this.length) return null;
        
        let current = this.get(index);
        current.value = value;
        // this.print();
        return this;
    }

    insert = (index, value) => {
        if (index < 0 || index > this.length) return null;
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);

        let previousElem = this.get(index - 1);
        let currentElem = this.get(index);
        let newNode = new Node(value);

        previousElem.next = newNode;
        newNode.previous = previousElem;
        newNode.next = currentElem;
        currentElem.previous = newNode;
        this.length = this.length + 1;
        this.print();
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
        this.print();
        return currentElem;
    }

    reverse = () => {

        this.tail = this.head;
        let previousElem = null;
        let currentElem = this.head;
        let nextElem;

        while (currentElem.next !== null){
            nextElem = currentElem.next;
            currentElem.next = previousElem;
            previousElem = currentElem;
            currentElem.previous = nextElem;
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