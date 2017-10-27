var pieChartData = [
  {
    "alert-type": "Networks",
    "value": 2
  },
  {
    "alert-type": "Threshhold",
    "value": 9
  },
  {
    "alert-type": "VMs",
    "value": 10
  },
  {
    "alert-type": "Hosts",
    "value": 6
  }
];

var chart = AmCharts.makeChart("pie-chart", {
  type: "pie",
  theme: "light",
  dataProvider: pieChartData,
  valueField: "value",
  titleField: "alert-type",
  outlineAlpha: 0.4,
  balloon: {
    fixedPosition: true
  },
  export: {
    enabled: true
  }
});
