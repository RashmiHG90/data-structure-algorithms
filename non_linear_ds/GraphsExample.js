class FlightGraph{
    constructor(){
        this.adjacencyList = {}; //object type 
    }

    addVertex(airport){
        if(!this.adjacencyList[airport]){
            this.adjacencyList[airport] = []; //array object created
        }else{
            console.log("Airport already exists in graph");//duplicate entry check
        }
    }

    addEdge(airport1, airport2, price){
        if(this.adjacencyList[airport1] && this.adjacencyList[airport2]){
            this.adjacencyList[airport1].push({ airport: airport2, price });
            this.adjacencyList[airport2].push({ airport: airport1, price }); // for undirected graph
        }else{
            console.log("One or both airports do not exist in the graph");
        }
    }

    printGraph(){
        for(let airport in this.adjacencyList){
            console.log(`${airport} -> ${this.adjacencyList[airport].map(edge => `${edge.airport} (${edge.price})`).join(", ")}`);
        }
    }

    searchFlight(start,end,visited = new Set()){
        if(start === end){
            return true;
        }
        visited.add(start);
        const neighbors = this.adjacencyList[start];
        for(const neighbor of neighbors){
            if(!visited.has(neighbor.airport)){
                if(this.searchFlight(neighbor.airport, end, visited)){
                    return true;
                }
            }
        }
        return false;
    }

    searchflight(airport1, airport2){
        
        if(this.adjacencyList[airport1] && this.adjacencyList[airport2]){
            return this.searchFlight(airport1, airport2);
        }else{
            console.log("One or both airports do not exist in the graph");
            return false;
        }

    }
}

let flightGraph = new FlightGraph();
flightGraph.addVertex("New York");
flightGraph.addVertex("Los Angeles");
flightGraph.addVertex("Chicago");
//flightGraph.addVertex("Miami"); // Add Miami as a vertex
flightGraph.addEdge("New York", "Chicago", "$3000");
flightGraph.addEdge("Los Angeles", "Chicago", "$2000");
flightGraph.addEdge("New York", "Miami", "$4000"); // Error case: Miami not added as vertex
console.log(flightGraph.adjacencyList);
flightGraph.printGraph();