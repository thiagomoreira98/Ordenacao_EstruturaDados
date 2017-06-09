
dadosQuickSorrt100=[];
dadosQuickSorrt1000=[];
dadosQuickSorrt10000=[];
dadosQuickSorrt100000=[];

dadosSelectionSorrt100=[];
dadosSelectionSorrt1000=[];
dadosSelectionSorrt10000=[];
dadosSelectionSorrt100000=[];

dadosInsertionSorrt100=[];
dadosInsertionSorrt1000=[];
dadosInsertionSorrt10000=[];
dadosInsertionSorrt100000=[];

dadosBobbleSorrt100=[];
dadosBobbleSorrt1000=[];
dadosBobbleSorrt10000=[];
dadosBobbleSorrt100000=[];


var matriz = [];
for(i=0;i<100000;i++){
    if(i==100){
        dadosQuickSorrt100 = matriz.slice();
        dadosSelectionSorrt100 = matriz.slice();
        dadosInsertionSorrt100 = matriz.slice();
        dadosBobbleSorrt100 = matriz.slice();
    }
  matriz.push(Math.floor((Math.random() * 900000) + 1) );
}
var elementosMetodo1 = matriz.slice();