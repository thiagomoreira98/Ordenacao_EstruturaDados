var vet = [];

var bubbleSortData = {
    name: 'Bobble',data:[]
};

var selectionSortData = {
    name: 'Selection',data:[]
};

var insertionSortData = {
    name: 'Insertion',data:[]
};

var quickSortData = {
    name: 'Quick',data:[]
};

var bubbleSort100 = [];
var bubbleSort550= [];
var bubbleSort1000 = [];
var bubbleSort5500= [];
var bubbleSort10000 = [];
var bubbleSort55000= [];
var bubbleSort100000 = [];

var selectionSort100 = [];
var selectionSort550 = [];
var selectionSort1000 = [];
var selectionSort5500 = [];
var selectionSort10000 = [];
var selectionSort55000 = [];
var selectionSort100000 = [];

var insertionSort100 = [];
var insertionSort550 = [];
var insertionSort1000 = [];
var insertionSort5500 = [];
var insertionSort10000 = [];
var insertionSort55000 = [];
var insertionSort100000 = [];

var quickSort100 = [];
var quickSort550 = [];
var quickSort1000 = [];
var quickSort5500 = [];
var quickSort10000 = [];
var quickSort55000 = [];
var quickSort100000 = [];

//Clonando Vetores
for (i = 0; i < 100000; i++) {
    vet.push(Math.floor((Math.random() * 100000)));

    if (i == 99) {
        bubbleSort100    = vet.slice();
        selectionSort100 = vet.slice();
        insertionSort100 = vet.slice();
        quickSort100     = vet.slice();
    }

    if (i == 549) {
        bubbleSort550    = vet.slice();
        selectionSort550 = vet.slice();
        insertionSort550 = vet.slice();
        quickSort550     = vet.slice();
    }

    if (i == 999) {
        bubbleSort1000    = vet.slice();
        selectionSort1000 = vet.slice();
        insertionSort1000 = vet.slice();
        quickSort1000     = vet.slice();
    }

    if (i == 5499) {
        bubbleSort5500    = vet.slice();
        selectionSort5500 = vet.slice();
        insertionSort5500 = vet.slice();
        quickSort5500     = vet.slice();
    }

    if (i == 9999) {
        bubbleSort10000    = vet.slice();
        selectionSort10000 = vet.slice();
        insertionSort10000 = vet.slice();
        quickSort10000     = vet.slice();
    }

    if (i == 54999){
        bubbleSort55000 = vet.slice();
        selectionSort55000 = vet.slice();
        insertionSort55000 = vet.slice();
        quickSort55000     = vet.slice();
    }
}

bubbleSort100000    = vet.slice();
selectionSort100000 = vet.slice();
insertionSort100000 = vet.slice();
quickSort100000     = vet.slice();