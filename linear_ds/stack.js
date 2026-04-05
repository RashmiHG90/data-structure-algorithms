class Stack{
    constructor(){
        this.stack = []; // array implementation
    }

    push(data){
        if(this.stack.length<5){
            this.stack.push(data);
            console.log("Data added to stack: " + data);
        } else{
            console.log("Stack overflow");
        }
    }

    pop(){
        if(this.isEmpty()){
            console.log("Stack is empty or underflow");
        } else{
            let removedData = this.stack.pop();
            console.log("Data removed from stack: " + removedData);
            //return removedData;
        }
    }

    isEmpty(){
        return this.stack.length === 0;
    }

     peek(){
        if(this.isEmpty()){
            console.log("Stack is empty or underflow");
        } else{
            let topData = this.stack[this.stack.length - 1];
            console.log("Top data in stack: " + topData);
            //return topData;
        }
    }

    size(){
        return this.stack.length;
    }

}

let ss = new Stack();
ss.pop(); // stack underflow
ss.push(10);
ss.push(20);
ss.push(30);
ss.push(40);
ss.push(50);
ss.push(60);
console.log(ss.stack)
ss.pop();

console.log(ss.stack)
console.log("Top most element in stack: " + ss.peek())
console.log("Size of stack: " + ss.size())