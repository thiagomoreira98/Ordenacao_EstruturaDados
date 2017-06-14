function bubbleSort(vet) {
    for (i = 1; i < vet.length; i++) {
        for (j = 0; j < vet.length - 1; j++) {
            if (vet[j] > vet[j + 1]) {
                aux = vet[j];
                vet[j] = vet[j + 1];
                vet[j + 1] = aux;
            }
        }
    }
}