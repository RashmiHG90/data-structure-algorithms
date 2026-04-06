class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null; // head is reference or pointer to first node. Initially it is null because there is no node
        this.size=0; //size is zero coz there is no node in linked list
    }

    append(data){
        const newNode = new Node(data); // object created with value 10 or 20
        //if(!this.head) this.head = newNode; // if head is null then assign new node to head
        if(this.head === null){
            this.head = newNode; //first node with value 10 is assigned to head
        } else {
            let current = this.head; //current node value is 10
            while(current.next){
                current = current.next;
            }
            current.next = newNode; // new node with value 20 is assigned to next of current node which is 10
        }
        this.size++;   //size 1, 2
    }

    prepend(data){
        const newNode = new Node(data); // object created with value 5 
        newNode.next = this.head; // next of new node with value 5 is assigned to head which is 10
        this.head = newNode;  // head is assigned to new node with value 5
        this.size++;
    }

    printList(){
        let current = this.head;
        while(current){
            console.log(current.data); // it will print 5, 10, 20, 30
            current = current.next; // current node value is 10,20,30,null
        }
    }
}                //Node {data: 10, next: Node{data: 20, next: [Node]}}

let list = new SinglyLinkedList();
list.append(10);
list.append(20);
list.append(30);
console.log(list);
list.prepend(5);
console.log(list);
list.printList();
console.log( "Head:" +list.head.data);