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
    removeItem(itemNumber) {
        let itemNum = itemNumber - 1;
        for(let i = 0; i < this.arrayList.length; i++) {
            if (i === itemNum) {
                let spliced = this.arrayList.splice(i, 1); 
            }
        }
    }
    removeSpecificItem(itemName) {
        for(let i = 0; i < this.arrayList.length; i++) {
            if (this.arrayList[i] === itemName) {
                let spliced = this.arrayList.splice(i, 1);
            }
        }
    }
    getLength() {
        return this.arrayList.length;
    }
}

const newArray = ['Eggs', 'Milk', 'Bananas'];
const testList = new List(newArray);

//testList.removeSpecificItem('Eggs');
//testList.removeItem(2.0);
testList.addItem('Cookies');
testList.printList();
console.log(testList.getLength());