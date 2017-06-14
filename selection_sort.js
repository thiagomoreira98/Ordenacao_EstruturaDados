//Metodo Selection Sort
function selectionSort(input) {
  for (var i = 0; i < input.length; i++) {
 
    // assume the item in the first position is the smallest
    var smallestPosition = i;
 
    // go through the unsorted region
    for (var j = i + 1; j < input.length; j++) {
 
      if (input[j] < input[smallestPosition]) {
        // a new smallest number is found
        smallestPosition = j
      }
    }
 
    // swap the min value if it changed
    if (smallestPosition != i) {
      var temp = input[smallestPosition];
      input[smallestPosition] = input[i];
      input[i] = temp;
    }
  }
}