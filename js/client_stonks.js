function StonksInit(){
    var panel = document.createElement("div");
    panel.className = "panel";
    document.getElementsByTagName("body")[0].appendChild(panel);

    var graph = document.createElement("canvas");
    graph.id = "graph";

    new Chart(graph, {
        type: 'line',
    data: {
      labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
      datasets: [{
        label: 'BitCoin value',
        data: [-12000, -19000, -3000, 15000, 22000, 30000, -5000, 10000],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          grid:{
             drawBorder: false,
             color: (context) =>{
                if(context.tick.value === 0){
                    return 'gray';
                }
             }
          }
        },
        x:{
            grid:{
                display: false,
                drawBorder: false
            }
        }
      },
      fill:{
        target: 'origin',
        below: 'rgba(222, 104, 80, 100)',
        above: 'rgba(93, 217, 139, 100)'
      }
    }
    });

    panel.appendChild(graph);
}