class Queue{
    constructor(){
        this.queue = []; // array implementation
    }

    enqueue(data){
        if(this.size()<5){
            this.queue.push(data);
            console.log("Data added to queue:" + data)
        }else{
            console.log("Queue is full oroverflow");
        }
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is empty or underflow");
        } else{
            let removedData = this.queue.shift();
            console.log("Data removed from queue: " + removedData);
            //return removedData;   
        }
    }

    peek(){
        return this.isEmpty() ? "Queue is empty" : this.queue[0];
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    size(){
        return this.queue.length;
    }
}

let qq = new Queue();
console.log(qq.dequeue()) // queue underflow
qq.enqueue(100);
qq.enqueue(200);
qq.enqueue(300);
qq.enqueue(400);
qq.enqueue(500);
qq.enqueue(600);
console.log("Size of queue: " + qq.size());
console.log(qq.queue);
qq.dequeue();
qq.dequeue();
console.log("Size of queue: " + qq.size());
console.log(qq.queue);
console.log("Front element in queue: " + qq.peek());
console.log("Size of queue: " + qq.size());


//front = 0, rear = -1
//enqueue operation
//queue[++rear]=100, rear = 0
//queue[++rear]=200, rear = 1
//queue[++rear]=300, rear = 2
//queue[++rear]=400, rear = 3
//queue[++rear]=500, rear = 4
//queue[++rear]=600, rear = 5, queue is full or overflow

//dequeue operation
//queue[front++], front = 1, queue[0] is removed

//100,200,300,400,500 at this point rear is 4 and front is 0
//once we do dequeue operation we increment front++
//front =1