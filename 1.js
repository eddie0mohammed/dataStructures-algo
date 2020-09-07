
// linked list


class Node {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push = (val) => {

        const newNode = new Node(val, null);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length = this.length + 1;
        return this;
    }
}

const list = new SinglyLinkedList();

console.log(list.push(1));
console.log(list.push(10));
console.log(list.push(100));
console.log(list.push(1000));
