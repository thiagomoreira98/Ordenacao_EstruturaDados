function gerarGrafico() {
    Highcharts.chart('container', {
        chart: {
        type: 'line'
        },
        title: {
            text: 'Tempo de execução algoritmos de ordenação, 2017-06'
        },

        subtitle: {
            text: 'Fonte: Thiago Moreira & Tiago D Cipriano'
        }, xAxis: {
            categories: ['100',550, '1000','5500', '10000','55000', '100000']
        }
        ,
        yAxis: {
            title: {
                text: 'Tempo milesegundos'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
             line: {
                dataLabels: {
                    enabled: true
                }
            },
            enableMouseTracking: false
        },

        series: [ bubbleSortData,  insertionSortData,selectionSortData, quickSortData ]

    });

}