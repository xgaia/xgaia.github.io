google.charts.load('current', {'packages':['corechart', 'line']});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawBarChart);
google.charts.setOnLoadCallback(drawBarChartDSK);
google.charts.setOnLoadCallback(drawComparisonBarChart);
function drawChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('number', 'Number of executors');

  data.addColumn('timeofday', 'DS1');
  data.addColumn({id:'i', type:'timeofday', role:'interval'});
  data.addColumn({id:'i', type:'timeofday', role:'interval'});
  data.addColumn({id:'i', type:'timeofday', role:'interval'});

  data.addColumn('timeofday', 'DS2');
  data.addColumn({id:'i', type:'timeofday', role:'interval'});
  data.addColumn({id:'i', type:'timeofday', role:'interval'});
  data.addColumn({id:'i', type:'timeofday', role:'interval'});

  data.addColumn('timeofday', 'DS3');
  data.addColumn({id:'i', type:'timeofday', role:'interval'});
  data.addColumn({id:'i', type:'timeofday', role:'interval'});
  data.addColumn({id:'i', type:'timeofday', role:'interval'});

  let row = {}


// 20 -------------------------------------------------------------------------------
  row = {'n_exec': 20,
         'mean1': [00, 46, 13], 
         'ds1_1': [00, 45, 55],
         'ds1_2': [00, 46, 52],
         'ds1_3': [00, 45, 52],

         'mean2': [01, 38, 26], 
         'ds2_1': [01, 38, 10],
         'ds2_2': [01, 38, 14],
         'ds2_3': [01, 38, 54],

         'mean3': [03, 09, 39], 
         'ds3_1': [03, 09, 48],
         'ds3_2': [03, 09, 31],
         'ds3_3': [03, 09, 33]
        }
  data.addRow([row['n_exec'], row['mean1'], row['ds1_1'], row['ds1_2'], row['ds1_3'],
                              row['mean2'], row['ds2_1'], row['ds2_2'], row['ds2_3'],
                              row['mean3'], row['ds3_1'], row['ds3_2'], row['ds3_3']]
  )

// 40 -------------------------------------------------------------------------------
  row = {'n_exec': 40,
         'mean1': [00, 25, 22], 
         'ds1_1': [00, 25, 00],
         'ds1_2': [00, 25, 25],
         'ds1_3': [00, 25, 41],

         'mean2': [00, 54, 16], 
         'ds2_1': [00, 54, 15],
         'ds2_2': [00, 53, 55],
         'ds2_3': [00, 54, 37],

         'mean3': [01, 45, 09], 
         'ds3_1': [01, 42, 48],
         'ds3_2': [01, 49, 58],
         'ds3_3': [01, 42, 44]
        }
  data.addRow([row['n_exec'], row['mean1'], row['ds1_1'], row['ds1_2'], row['ds1_3'],
                              row['mean2'], row['ds2_1'], row['ds2_2'], row['ds2_3'],
                              row['mean3'], row['ds3_1'], row['ds3_2'], row['ds3_3']]
  )

// 60 -------------------------------------------------------------------------------
  row = {'n_exec': 60,
         'mean1': [00, 18, 43], 
         'ds1_1': [00, 18, 09],
         'ds1_2': [00, 18, 52],
         'ds1_3': [00, 19, 07],

         'mean2': [00, 38, 38], 
         'ds2_1': [00, 37, 54],
         'ds2_2': [00, 39, 03],
         'ds2_3': [00, 38, 58],

         'mean3': [01, 12, 21], 
         'ds3_1': [01, 12, 17],
         'ds3_2': [01, 12, 28],
         'ds3_3': [01, 12, 17]
        }
  data.addRow([row['n_exec'], row['mean1'], row['ds1_1'], row['ds1_2'], row['ds1_3'],
                              row['mean2'], row['ds2_1'], row['ds2_2'], row['ds2_3'],
                              row['mean3'], row['ds3_1'], row['ds3_2'], row['ds3_3']]
  )

// 80 -------------------------------------------------------------------------------
  row = {'n_exec': 80,
         'mean1': [00, 15, 26], 
         'ds1_1': [00, 15, 00],
         'ds1_2': [00, 15, 28],
         'ds1_3': [00, 15, 50],

         'mean2': [00, 31, 08], 
         'ds2_1': [00, 30, 34],
         'ds2_2': [00, 30, 43],
         'ds2_3': [00, 32, 07],

         'mean3': [00, 56, 53], 
         'ds3_1': [00, 56, 04],
         'ds3_2': [00, 57, 20],
         'ds3_3': [00, 57, 15]
        }
  data.addRow([row['n_exec'], row['mean1'], row['ds1_1'], row['ds1_2'], row['ds1_3'],
                              row['mean2'], row['ds2_1'], row['ds2_2'], row['ds2_3'],
                              row['mean3'], row['ds3_1'], row['ds3_2'], row['ds3_3']]
  )

// 100 -------------------------------------------------------------------------------
  row = {'n_exec': 100,
         'mean1': [00, 13, 44], 
         'ds1_1': [00, 14, 01],
         'ds1_2': [00, 13, 29],
         'ds1_3': [00, 13, 41],

         'mean2': [00, 27, 09], 
         'ds2_1': [00, 27, 18],
         'ds2_2': [00, 26, 38],
         'ds2_3': [00, 27, 30],

         'mean3': [00, 48, 39], 
         'ds3_1': [00, 48, 02],
         'ds3_2': [00, 49, 27],
         'ds3_3': [00, 48, 28]
        }
  data.addRow([row['n_exec'], row['mean1'], row['ds1_1'], row['ds1_2'], row['ds1_3'],
                              row['mean2'], row['ds2_1'], row['ds2_2'], row['ds2_3'],
                              row['mean3'], row['ds3_1'], row['ds3_2'], row['ds3_3']]
  )


// 150 -------------------------------------------------------------------------------
  row = {'n_exec': 150,
         'mean1': [00, 12, 31], 
         'ds1_1': [00, 12, 43],
         'ds1_2': [00, 12, 25],
         'ds1_3': [00, 12, 25],

         'mean2': [00, 22, 55], 
         'ds2_1': [00, 22, 55],
         'ds2_2': [00, 23, 01],
         'ds2_3': [00, 22, 48],

         'mean3': [00, 45, 35], 
         'ds3_1': [00, 43, 22],
         'ds3_2': [00, 47, 40],
         'ds3_3': [00, 45, 43]
        }
  data.addRow([row['n_exec'], row['mean1'], row['ds1_1'], row['ds1_2'], row['ds1_3'],
                              row['mean2'], row['ds2_1'], row['ds2_2'], row['ds2_3'],
                              row['mean3'], row['ds3_1'], row['ds3_2'], row['ds3_3']]
  )




  var options = {
    width: 800,
    height: 500,
    pointSize: 3,
    hAxis: {
      title: 'Number of executors',
      // scaleType: 'log'
    },
    curveType: 'function',
    vAxis: {
      title: 'Time (HH:MM)',
      // scaleType: 'log'
    },
    intervals: {'color': 'black' },
  };

  var chart = new google.visualization.LineChart(document.getElementById('spark_benchmark'));

  chart.draw(data, options);
}




function drawBarChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Program');

  data.addColumn('timeofday', 'RDD');
  data.addColumn({id:'i', type:'timeofday', role:'interval'});
  data.addColumn({id:'i', type:'timeofday', role:'interval'});
  data.addColumn({id:'i', type:'timeofday', role:'interval'});

  data.addColumn('timeofday', 'DF');
  data.addColumn({id:'i', type:'timeofday', role:'interval'});
  data.addColumn({id:'i', type:'timeofday', role:'interval'});
  data.addColumn({id:'i', type:'timeofday', role:'interval'});




  data.addRow(
    ['String', [01, 53, 57], [01, 56, 05], [01, 52, 37], [01, 53, 09],  //RDD
               [01, 14, 47], [01, 15, 00], [01, 13, 54], [01, 15, 28]   //DF
    ]);

  data.addRow(
    ['Binary', [00, 47, 19], [00, 46, 23], [00, 48, 30], [00, 47, 19],  //RDD
               [00, 22, 55], [00, 23, 01], [00, 22, 48], [00, 22, 55]   //DF
    ]);

  var options = {
    width: 800,
    height: 400,
    intervals: {'color': 'black' },
    vAxis: {
      title: 'Time (HH:MM)'
    },
  };

  var chart = new google.visualization.ColumnChart(
  document.getElementById('benchmark_spark_histogram'));

  chart.draw(data, options);
}




function drawBarChartDSK() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Number of executors');

  data.addColumn('timeofday', 'DS1');
  data.addColumn({id:'i', type:'timeofday', role:'interval'});
  data.addColumn({id:'i', type:'timeofday', role:'interval'});
  data.addColumn({id:'i', type:'timeofday', role:'interval'});

  data.addColumn('timeofday', 'DS2');
  data.addColumn({id:'i', type:'timeofday', role:'interval'});
  data.addColumn({id:'i', type:'timeofday', role:'interval'});
  data.addColumn({id:'i', type:'timeofday', role:'interval'});

  data.addColumn('timeofday', 'DS3');
  data.addColumn({id:'i', type:'timeofday', role:'interval'});
  data.addColumn({id:'i', type:'timeofday', role:'interval'});
  data.addColumn({id:'i', type:'timeofday', role:'interval'});

  let row = {}


// 20 -------------------------------------------------------------------------------
  row = {'n_exec': '20',
         'mean1': [00, 27, 45], 
         'ds1_1': [00, 28, 04],
         'ds1_2': [00, 27, 33],
         'ds1_3': [00, 27, 38],

         'mean2': [00, 54, 03], 
         'ds2_1': [01, 53, 41],
         'ds2_2': [01, 54, 28],
         'ds2_3': [01, 54, 00],

         'mean3': [01, 43, 40], 
         'ds3_1': [01, 43, 32],
         'ds3_2': [01, 43, 32],
         'ds3_3': [01, 43, 40]
        }
  data.addRow([row['n_exec'], row['mean1'], row['ds1_1'], row['ds1_2'], row['ds1_3'],
                              row['mean2'], row['ds2_1'], row['ds2_2'], row['ds2_3'],
                              row['mean3'], row['ds3_1'], row['ds3_2'], row['ds3_3']]
  )


// 30 -------------------------------------------------------------------------------
  row = {'n_exec': '30',
         'mean1': [00, 31, 36], 
         'ds1_1': [00, 31, 34],
         'ds1_2': [00, 30, 31],
         'ds1_3': [00, 32, 44],

         'mean2': [00, 58, 51], 
         'ds2_1': [00, 54, 40],
         'ds2_2': [00, 56, 35],
         'ds2_3': [01, 05, 19],

         'mean3': [01, 44, 27], 
         'ds3_1': [01, 50, 15],
         'ds3_2': [01, 43, 51],
         'ds3_3': [01, 39, 16]
        }
  data.addRow([row['n_exec'], row['mean1'], row['ds1_1'], row['ds1_2'], row['ds1_3'],
                              row['mean2'], row['ds2_1'], row['ds2_2'], row['ds2_3'],
                              row['mean3'], row['ds3_1'], row['ds3_2'], row['ds3_3']]
  )  

// 40 -------------------------------------------------------------------------------
  row = {'n_exec': '40',
         'mean1': [00, 30, 55], 
         'ds1_1': [00, 30, 40],
         'ds1_2': [00, 31, 10],
         'ds1_3': [00, 30, 54],

         'mean2': [00, 55, 42], 
         'ds2_1': [00, 57, 09],
         'ds2_2': [00, 56, 23],
         'ds2_3': [00, 53, 33],

         'mean3': [01, 40, 36], 
         'ds3_1': [01, 47, 08],
         'ds3_2': [01, 46, 20],
         'ds3_3': [01, 28, 19]
        }
  data.addRow([row['n_exec'], row['mean1'], row['ds1_1'], row['ds1_2'], row['ds1_3'],
                              row['mean2'], row['ds2_1'], row['ds2_2'], row['ds2_3'],
                              row['mean3'], row['ds3_1'], row['ds3_2'], row['ds3_3']]
  )


  var options = {
    width: 800,
    height: 500,
    pointSize: 3,
    hAxis: {
      title: 'Number of cores',
      // scaleType: 'log'
    },
    curveType: 'function',
    vAxis: {
      title: 'Time (HH:MM)'
    },
    intervals: {'color': 'black' },
  };

  var chart = new google.visualization.LineChart(document.getElementById('benchmark_dsk_histogram'));

  chart.draw(data, options);
}





function drawComparisonBarChart() {

  var data = new google.visualization.DataTable();

  data.addColumn('string', 'Ressources');
  data.addColumn('timeofday', 'DSK');
  data.addColumn({id:'i', type:'timeofday', role:'interval'});
  data.addColumn({id:'i', type:'timeofday', role:'interval'});
  data.addColumn({id:'i', type:'timeofday', role:'interval'});
  data.addColumn('timeofday', 'DSparK');
  data.addColumn({id:'i', type:'timeofday', role:'interval'});
  data.addColumn({id:'i', type:'timeofday', role:'interval'});
  data.addColumn({id:'i', type:'timeofday', role:'interval'});



  data.addRow(['Same ressources (40 cores/executors)', [00, 40, 00], [00, 40, 00], [00, 40, 00], [00, 40, 00], // DSK
                                                       [00, 54, 16], [00, 54, 15], [00, 53, 55], [00, 54, 37]  // DSparK, 40 cores
              ]);

  data.addRow(['Best execution times', [00, 40, 00], [00, 40, 00], [00, 40, 00], [00, 40, 00],  // DSK
                                       [00, 22, 55], [00, 23, 01], [00, 22, 48], [00, 22, 55]   // DSparK, 150 cores
              ]);







  var options = {
    width: 800,
    height: 400,
    intervals: {'color': 'black' },
    vAxis: {
      title: 'Time (HH:MM)'
    },
  };

  var chart = new google.visualization.ColumnChart(
  document.getElementById('comparison_benchmark'));

  chart.draw(data, options);
}