class List {
    arrayList;
    counter;
    constructor(inputArray) {
        this.counter = inputArray.length;
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
        this.counter++;
    }
    removeItem(itemNumber) {
        let itemNum = itemNumber - 1;
        for(let i = 0; i < this.arrayList.length; i++) {
            if (i === itemNum) {
                let spliced = this.arrayList.splice(i, 1); 
            }
        }
        this.counter--;
    }
    removeSpecificItem(itemName) {
        for(let i = 0; i < this.arrayList.length; i++) {
            if (this.arrayList[i] === itemName) {
                let spliced = this.arrayList.splice(i, 1);
            }
        }
        this.counter--;
    }
    getLength() {
        return this.counter;
    }
    combineLists(list2) {
        // get array from list 2
        let newArr = list2.arrayList
        // newArr = merge this.array with list 2 array
        newArr = [].concat(this.arrayList, list2.arrayList) 
        // set this.array to newArr
        this.arrayList = newArr;
        // return should be combined list
    }
}

const newArray = ['Eggs', 'Milk', 'Bananas'];
const newArray2 = ['Cereal', 'Lemonade', 'Brownies'];
const list1 = new List(newArray);
const list2 = new List(newArray2);

//testList.removeSpecificItem('Eggs');
//testList.removeItem(2.0);
list1.addItem('Cookies');

// console.log(list1.getLength());

list1.combineLists(list2);
list1.printList();