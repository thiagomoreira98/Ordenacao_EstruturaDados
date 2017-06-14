function main() {

    // 100 Cem
    cron = new Cronometro();
    cron.start();
    bubbleSort(bubbleSort100);
    cron.finish();
    bubbleSortData.data.push(cron.total());
    

    cron = new Cronometro();
    cron.start();
    selectionSort(selectionSort100);
    cron.finish();
    selectionSortData.data.push(cron.total());
    

    cron = new Cronometro();
    cron.start();
    insertionSort(insertionSort100);
    cron.finish();
    insertionSortData.data.push(cron.total());
    

    cron = new Cronometro();
    cron.start();
    quickSort(quickSort100,0,quickSort100.length-1);
    cron.finish();
    quickSortData.data.push(cron.total());
    










    // 550
    cron = new Cronometro();
    cron.start();
    bubbleSort(bubbleSort550);
    cron.finish();
    bubbleSortData.data.push(cron.total());
    

    cron = new Cronometro();
    cron.start();
    selectionSort(selectionSort550);
    cron.finish();
    selectionSortData.data.push(cron.total());
    

    cron = new Cronometro();
    cron.start();
    insertionSort(insertionSort550);
    cron.finish();
    insertionSortData.data.push(cron.total());
    

    cron = new Cronometro();
    cron.start();
    quickSort(quickSort550,0,quickSort550.length-1);
    cron.finish();
    quickSortData.data.push(cron.total());
    
    // 550








   // 1.000
    cron = new Cronometro();
    cron.start();
    bubbleSort(bubbleSort1000);
    cron.finish();
    bubbleSortData.data.push(cron.total());
    

    cron = new Cronometro();
    cron.start();
    selectionSort(selectionSort1000);
    cron.finish();
    selectionSortData.data.push(cron.total());
    

    cron = new Cronometro();
    cron.start();
    insertionSort(insertionSort1000);
    cron.finish();
    insertionSortData.data.push(cron.total());
    

    cron = new Cronometro();
    cron.start();
    quickSort(quickSort1000,0,quickSort1000.length-1);
    cron.finish();
    quickSortData.data.push(cron.total());
    
    //1.000

    // 5500
    cron = new Cronometro();
    cron.start();
    bubbleSort(bubbleSort5500);
    cron.finish();
    bubbleSortData.data.push(cron.total());
    

    cron = new Cronometro();
    cron.start();
    selectionSort(selectionSort5500);
    cron.finish();
    selectionSortData.data.push(cron.total());
    

    cron = new Cronometro();
    cron.start();
    insertionSort(insertionSort5500);
    cron.finish();
    insertionSortData.data.push(cron.total());
    

    cron = new Cronometro();
    cron.start();
    quickSort(quickSort5500,0,quickSort5500.length-1);
    cron.finish();
    quickSortData.data.push(cron.total());
    
    // 5500



    // 10.000
    cron = new Cronometro();
    cron.start();
    bubbleSort(bubbleSort10000);
    cron.finish();
    bubbleSortData.data.push(cron.total());
    

    cron = new Cronometro();
    cron.start();
    selectionSort(selectionSort10000);
    cron.finish();
    selectionSortData.data.push(cron.total());
    

    cron = new Cronometro();
    cron.start();
    insertionSort(insertionSort10000);
    cron.finish();
    insertionSortData.data.push(cron.total());
    

    cron = new Cronometro();
    cron.start();
    quickSort(quickSort10000,0,quickSort10000.length-1);
    cron.finish();
    quickSortData.data.push(cron.total());
    
    //10.000



    // 55.000
    cron = new Cronometro();
    cron.start();
    bubbleSort(bubbleSort55000);
    cron.finish();
    bubbleSortData.data.push(cron.total());
    

    cron = new Cronometro();
    cron.start();
    selectionSort(selectionSort55000);
    cron.finish();
    selectionSortData.data.push(cron.total());
    

    cron = new Cronometro();
    cron.start();
    insertionSort(insertionSort55000);
    cron.finish();
    insertionSortData.data.push(cron.total());
    

    cron = new Cronometro();
    cron.start();
    quickSort(quickSort55000,0,quickSort55000.length-1);
    cron.finish();
    quickSortData.data.push(cron.total());
    
    // 55.000



// 100.000
    cron = new Cronometro();
    cron.start();
    bubbleSort(bubbleSort100000);
    cron.finish();
    bubbleSortData.data.push(cron.total());
    

    cron = new Cronometro();
    cron.start();
    selectionSort(selectionSort100000);
    cron.finish();
    selectionSortData.data.push(cron.total());
    

    cron = new Cronometro();
    cron.start();
    insertionSort(insertionSort100000);
    cron.finish();
    insertionSortData.data.push(cron.total());
    

    cron = new Cronometro();
    cron.start();
    quickSort(quickSort100000,0,quickSort100000.length-1);
    cron.finish();
    quickSortData.data.push(cron.total());
    
    //100.000

gerarGrafico();
}