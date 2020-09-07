
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    print = () => {
        if (!this.head) return null;
        let current = this.head;
        while (current.next !== null){
            console.log(current.value);
            current =  current.next;
        }
        console.log(current.value);
    }

    push = (val) => {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length = this.length + 1;
        return this;
    }

    pop = () => {
        if (!this.head) return null;
        let current = this.head;
        let previous = current;
        while (current.next !== null){
            previous = current;
            current = current.next;
        }
        this.tail = previous;
        this.tail.next = null;
        this.length = this.length - 1;
        return current;
    }

    shift = () => {
        if (!this.head) return null;
        let current = this.head;
        this.head = current.next;
        this.length = this.length - 1;
        if (this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    unshift = (val) => {
        let newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length = this.length + 1;
        return this;
    }

    get = (index) => {
        if (index < 0 || index >= this.length) return null;
        let count = 0;
        let current = this.head;
        while (count < index){
            count++;
            current = current.next;
        }
        return current;
    }

    set = (index, val) => {
        if (index < 0 || index >= this.length) return null;
        let currentElem = this.get(index);
        currentElem.value = val;
        return this;
    }

    insert = (index, val) => {
        if (index < 0 || index > this.length) return null;
        if (index === 0) return this.unshift(val);
        if (index === this.length) return this.push(val);

        let previousElem = this.get(index - 1);
        let current = this.get(index);
        let newNode = new Node(val);
        previousElem.next = newNode;
        newNode.next = current;
        this.length = this.length + 1;
        return this;
    }

    remove = (index) => {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let previous = this.get(index - 1);
        let next = this.get(index + 1);
        previous.next = next;
        this.length = this.length - 1;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return this;
    }

    reverse = () => {

        let tail = this.head;
        let previous = null;
        let current = this.head;
        let nextElem = current.next;
        
        while (current.next !== null){
            nextElem = current.next;
            current.next = previous;
            previous = current;
            current = nextElem;
        }
        this.head = current;
        this.head.next = previous;
        this.print();
        return this;
    }
    
}


const list = new SinglyLinkedList;
list.push(1);
list.push(2);
list.push(3);

list.reverse();



