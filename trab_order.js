var vet = [];
var aux;

var bubbleSort100 = [];
var bubbleSort1000 = [];
var bubbleSort10000 = [];
var bubbleSort100000 = [];

var selectionSort100 = [];
var selectionSort1000 = [];
var selectionSort10000 = [];
var selectionSort100000 = [];

var insertionSort100 = [];
var insertionSort1000 = [];
var insertionSort10000 = [];
var insertionSort100000 = [];

var quickSort100 = [];
var quickSort1000 = [];
var quickSort10000 = [];
var quickSort100000 = [];

for(i = 0; i < 100000; i++){
	vet.push(Math.floor((Math.random() * 999998) + 1) );

	if(i == 100){
		bubbleSort100 = vet.slice();
		selectionSort100 = vet.slice();
		insertionSort100 = vet.slice();
		quickSort100 = vet.slice();
	}

	if(i == 1000){
		bubbleSort1000 = vet.slice();
		selectionSort1000 = vet.slice();
		insertionSort1000 = vet.slice();
		quickSort1000 = vet.slice();
	}

	if(i == 10000){
		bubbleSort10000 = vet.slice();
		selectionSort10000 = vet.slice();
		insertionSort10000 = vet.slice();
		quickSort10000 = vet.slice();
	}

	if(i == 100000){
		bubbleSort100000 = vet.slice();
		selectionSort100000 = vet.slice();
		insertionSort100000 = vet.slice();
		quickSort100000 = vet.slice();
	}
}

function start(){
	var start = performance.now();
	return start;
}

function finish(){
	var finish = performance.now();
	return finish;
}

function total(){
	var total = finish() - start();
	return total;
}

function bubbleSort(vet , aux){

	start();

	for(i = 0; i < vet.length; i++){
		for(j = 0; j < vet.length-1; j++){
			if(vet[j] > vet[j+1]){
				aux = vet[j];
				vet[j] = vet[j+1];
				vet[j+1] = aux;
			}
		}
		//console.log(vet);	
	}

	finish();
	console.log("vet:" +vet);
	console.log("\nTimer: " +total() + "ms");
}

function selectionSort(vet, aux){

	start();

	for(i = 0; i < vet.length; i++){
		for(j = i+1; j < vet.length; j++){
			if(vet[i] > vet[j]){
				aux = vet[i];
				vet[i] = vet[j];
				vet[j] = aux;
			}
		}
		//console.log(vet);		
	}

	finish();
	console.log("vet:" +vet);
	console.log("\nTimer: " +total() + "ms");
}

function insertionSort(vet, aux){

	start();

	for(i = 0; i < vet.length; i++){
		for(j = i+1; j <vet.length; j++){
			if(vet[j] < vet[i]){
				aux = vet[j];
				vet[j] = vet[i];
				vet[i] = aux;
			}
		}
		//console.log(vet);	
	}

	finish();
	console.log("vet:" +vet);
	console.log("\nTimer: " +total() + "ms");
}

function quickSort(vet, aux){

	start();



	finish();
	console.log("vet:" +vet);
	console.log("\nTimer: " +total() + "ms");

}

console.log("\nBubble Sort - 100 elementos\n");
bubbleSort(bubbleSort100, aux);
console.log("--------------------------------\n");
console.log("Selection Sort - 100 elementos\n");
selectionSort(selectionSort100,aux);
console.log("--------------------------------\n");
console.log("Insertion Sort - 100 elementos\n");
insertionSort(insertionSort100, aux);
console.log("--------------------------------\n");
/*console.log("Quick Sort - 100 elementos\n");
quickSort(quickSort100, aux);
console.log("--------------------------------\n");*/



console.log("\nBubble Sort - 1.000 elementos\n");
bubbleSort(bubbleSort1000, aux);
console.log("--------------------------------\n");
console.log("Selection Sort - 1.000 elementos\n");
selectionSort(selectionSort1000,aux);
console.log("--------------------------------\n");
console.log("Insertion Sort - 1.000 elementos\n");
insertionSort(insertionSort1000, aux);
console.log("--------------------------------\n");
/*console.log("Quick Sort - 1.000 elementos\n");
quickSort(quickSort1000, aux);
console.log("--------------------------------\n");*/



console.log("\nBubble Sort - 10.000 elementos\n");
bubbleSort(bubbleSort10000, aux);
console.log("--------------------------------\n");
console.log("Selection Sort - 10.000 elementos\n");
selectionSort(selectionSort10000,aux);
console.log("--------------------------------\n");
console.log("Insertion Sort - 100.00 elementos\n");
insertionSort(insertionSort10000, aux);
console.log("--------------------------------\n");
/*console.log("Quick Sort - 10.000 elementos\n");
quickSort(quickSort10000, aux);
console.log("--------------------------------\n");*/



console.log("\nBubble Sort - 100.000 elementos\n");
bubbleSort(bubbleSort100000, aux);
console.log("--------------------------------\n");
console.log("Selection Sort - 100.000 elementos\n");
selectionSort(selectionSort100000,aux);
console.log("--------------------------------\n");
console.log("Insertion Sort - 100.000 elementos\n");
insertionSort(insertionSort100000, aux);
console.log("--------------------------------\n");
/*console.log("Quick Sort - 100.000 elementos\n");
quickSort(quickSort100000, aux);
console.log("--------------------------------\n");*/
