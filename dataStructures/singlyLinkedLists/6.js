
class Node {
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

    push = (val) => {
        let newNode = new Node(val);
        if (this.head === null){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length = this.length + 1;
        this.print();
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
        previous.next = null;
        this.tail = previous;
        this.length = this.length - 1;
        if (this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift = () => {
        if (!this.head) return null;

        let current = this.head;
        current = current.next;
        this.head = current;
        this.length = this.length - 1;
        if (this.length === 0){
            this.head = null;
            this.tail = null;
        }
        this.print();
        return this;
    }

    unshift = (val) => {
        let newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length = this.length + 1;
        this.print();
        return this;
    }

    get = (index) => {
        if (index < 0 || index >= this.length) return null;

        let count = 0;
        let current = this.head;
        while(count < index){
            count++;
            current = current.next;
        }
        return current;
    }

    set = (index, val) => {
        if (index < 0 || index >= this.length) return null;

        let current = this.get(index);
        current.value = val;
        this.print();
        return this;
    }

    insert = (index, value) => {
        if (index < 0 || index > this.length){
            return null;
        }
        if (index === 0) {
            return this.unshift(value);
        }
        if (index === this.length) {
            return this.push(value);
        }

        let newNode = new Node(value);
        let previous = this.get(index - 1);
        let nextElem = this.get(index);
        previous.next = newNode;
        newNode.next = nextElem;
        this.length = this.length + 1;
        this.print();
        return this;
    }

    remove = (index) => {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let previous = this.get(index - 1);
        let nextElemt = this.get(index + 1);
        previous.next = nextElemt;
        this.length = this.length - 1;
        if (this.length === 0){
            this.head = null;
            this.tail = null;
        }
        this.print();
        return this;
    }
    
    reverse = () => {
        if (!this.head) return null;

        this.tail = this.head;
        let previous = null;
        let currentElem = this.head;
        let nextElem;

        while (currentElem.next !== null){
            nextElem = currentElem.next;
            currentElem.next = previous;
            previous = currentElem;
            currentElem = nextElem;
        }

        this.head = currentElem;
        this.head.next = previous;

        this.print();
        return this;
    }

    print = () => {
        if (!this.head) return null;
        let current = this.head;
        while (current.next){
            console.log(current.value);
            current = current.next;
        }
        console.log(current.value);
    }
}

const list = new SinglyLinkedList();

console.log(list);
console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));

// console.log(list.pop());
// console.log(list.shift());
// console.log(list.unshift(10));
// console.log(list.get(0));
// console.log(list.set(3, 'aaa'));
// console.log(list.insert(4 ,'x'));
// console.log(list.remove(4));
console.log(list.reverse());







