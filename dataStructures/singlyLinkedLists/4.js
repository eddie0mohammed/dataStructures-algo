

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
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length = this.length + 1;
        return this;
    }

    pop = () => {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next !== null){
            newTail = current;
            current = current.next;
        }

        newTail.next = null;
        this.tail = newTail;
        this.length = this.length - 1;
        if (this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift = () => {
        if (!this.head) return undefined;

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

        newNode.next = this.head;
        this.head = newNode;
        this.length = this.length + 1;
        return this;
    }

    get = (index) => {
        if (index === this.length || index > this.length || index < 0)
        return null;

        let count = 0;
        let current = this.head;
        while (count < index){
            current = current.next;
            count++;
        }
        return current;
    }

    set = (index, val) => {
        if (index === this.length || index > this.length || index < 0)
        return null;

        let current = this.head;
        let count = 0;
        while (count < index){
            count++;
            current = current.next;
        }
        current.value = val;
        return this;
    }

    insert = (index, value) => {
        if (index < 0 || index > this.length){
            return null;
        }
        if (index === this.length){
            return !!(this.push(value));
        }
        if (index === 0){
            return !!(this.unshift(value));
        }
        let newNode = new Node(value);
        let nextElem = this.get(index);
        let previousElem = this.get(index - 1);
        newNode.next = nextElem;
        previousElem.next = newNode;
        this.length = this.length + 1;
        return true;
    }
 
    remove = (index) => {
        if (index < 0 || index >= this.length) return null;

        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let prevElem = this.get(index - 1);
        let nextElem = this.get(index + 1);
        console.log(prevElem);
        console.log(nextElem);
        let current = prevElem.next;
        prevElem.next = nextElem;
        this.length = this.length - 1;
        return current;
    }

    reverse = () => {

        this.tail = this.head;
        let current = this.head;
        let previous = null;

        while (current.next !== null){
            let temp = current.next;
            current.next = previous;
            previous = current;
            current = temp;
        }

        this.head = current;
        this.head.next = previous;
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


const list = new SinglyLinkedList();

console.log(list);
console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));


// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());

// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);


// console.log(list.unshift(10));
// console.log(list.unshift(20));
// console.log(list.unshift(30));
// console.log(list.push(4));


// console.log(list.get(6));
// console.log(list.set(0, 2000));

// console.log(list.insert(7, 'xxx'));
// console.log(list.remove(1));
// console.log(list);

console.log(list.reverse());