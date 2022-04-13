class List {
    arrayList;
    constructor(inputArray) {
        if(!arguments.length) {
            this.arrayList = [];
        }
        else {
            this.arrayList = inputArray;
        }
    }
    printList() {
        let j = 0;
        for(let i = 0; i < this.arrayList.length; i++) { 
            j += 1;
            console.log(`${j}. ${this.arrayList[i]}`);
        }
    }
    addItem(itemName) {
        this.arrayList.push(itemName);
    }
    
}

const newArray = ['Eggs', 'Milk', 'Bananas'];
const testList = new List(newArray);

testList.addItem('Cereal');
testList.printList();