var chart = AmCharts.makeChart("pie-chart", {
  type: "pie",
  theme: "light",
  dataProvider: [
    {
      title: "VM",
      value: 260
    },
    {
      title: "Cluster",
      value: 201
    },
    {
      title: "Zone",
      value: 65
    },
    {
      title: "Host",
      value: 39
    },
    {
      title: "Pod",
      value: 10
    },
    {
      title: "Snapshot",
      value: 110
    },
    {
      title: "Template",
      value: 25
    },
    {
      title: "Volume",
      value: 10
    }
  ],
  valueField: "value",
  titleField: "title",
  outlineAlpha: 0.4,
  balloon: {
    fixedPosition: true
  },
  export: {
    enabled: true
  }
});
