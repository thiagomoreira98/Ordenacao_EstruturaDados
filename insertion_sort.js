//Metodo Insertion Sort
function insertionSort(vet) {
    for (i = 0; i < vet.length; i++) {
        for (j = i + 1; j < vet.length; j++) {
            if (vet[j] < vet[i]) {
                aux = vet[j];
                vet[j] = vet[i];
                vet[i] = aux;
            }
        }
    }
}