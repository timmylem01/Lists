class List {
    arrayList;
    constructor(inputArray) {
        if(!arguments.length) {
            this.arrayList = [];
        }
        else if(arguments.length > 1) {
            this.arrayList = [];
            console.log('Warning: Empty list created. Too many arguments.')
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
    removeLastItem() {
        this.arrayList.pop();
    }
    removeSpecificItem(itemName) {
        for(let i = 0; i < this.arrayList.length; i++) {
            if (this.arrayList[i] === itemName) {
                let spliced = this.arrayList.splice(i, 1);
                console.log(`Removed item: ${spliced}`)
            }
        }
    }
}

const newArray = ['Eggs', 'Milk', 'Bananas'];
const testList = new List(newArray);

testList.removeSpecificItem('Eggs');
testList.printList();