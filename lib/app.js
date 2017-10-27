var chart = AmCharts.makeChart("line-chart", {
  type: "serial",
  theme: "none",
  legend: {
    equalWidths: false,
    useGraphSettings: true,
    valueAlign: "left",
    valueWidth: 120
  },
  dataProvider: [
    {
      date: "2012-01-01",
      memory_storage: 227,
      cpu_usage: 40.71,
      percentage: 20
    },
    {
      date: "2012-01-02",
      memory_storage: 371,
      cpu_usage: 38.89,
      percentage: 30
    },
    {
      date: "2012-01-03",
      memory_storage: 433,
      cpu_usage: 34.22,
      percentage: 60
    },
    {
      date: "2012-01-04",
      memory_storage: 345,
      cpu_usage: 30.35,
      percentage: 77
    },
    {
      date: "2012-01-05",
      memory_storage: 480,
      cpu_usage: 25.83,
      percentage: 12
    },
    {
      date: "2012-01-06",
      memory_storage: 386,
      cpu_usage: 30.46,
      percentage: 55
    },
    {
      date: "2012-01-07",
      memory_storage: 348,
      cpu_usage: 29.94,
      percentage: 96
    },
    {
      date: "2012-01-08",
      memory_storage: 238,
      cpu_usage: 29.76,
      percentage: 2
    },
    {
      date: "2012-01-09",
      memory_storage: 218,
      cpu_usage: 32.8,
      percentage: 32
    },
    {
      date: "2012-01-10",
      memory_storage: 349,
      cpu_usage: 35.49,
      percentage: 35
    },
    {
      date: "2012-01-11",
      memory_storage: 603,
      cpu_usage: 39.1,
      percentage: 41
    },
    {
      date: "2012-01-12",
      memory_storage: 534,
      cpu_usage: 39.74,
      percentage: 66
    },
    {
      date: "2012-01-13",
      memory_storage: 425,
      percentage: 67,
      cpu_usage: 40.75
    },
    {
      date: "2012-01-14",
      memory_storage: 100,
      cpu_usage: 36.1,
      percentage: 88,
    }
  ],
  valueAxes: [
    {
      id: "percentAxis",
      axisAlpha: 0,
      gridAlpha: 0,
      position: "left",
      title: "Percentage",
      autoGridCount: false,
      maximum: 100,
      minimum: 0
    },
    {
      id: "memoryAxis",
      axisAlpha: 0,
      gridAlpha: 0,
      position: "right",
      title: "Storage Memory (in GBs)"
    }
  ],
  graphs: [
    {
      alphaField: "alpha",
      balloonText: "[[value]] GB",
      dashLengthField: "dashLength",
      fillAlphas: 0.8,
      legendPeriodValueText: "total:[[value.sum]] GB",
      legendValueText: "[[value]] GB",
      title: "Storage Memory",
      type: "column",
      valueField: "memory_storage",
      valueAxis: "memoryAxis"
    },
    {
      balloonText: "[[value]] %",
      bullet: "round",
      bulletBorderAlpha: 1,
      useLineColorForBulletBorder: true,
      bulletColor: "#FFFFFF",
      bulletSizeField: "3",
      dashLengthField: "8",
      descriptionField: "",
      labelPosition: "right",
      labelText: "",
      legendValueText: "[[value]] %",
      title: "CPU Usage",
      fillAlphas: 0,
      valueField: "cpu_usage",
      valueAxis: "percentAxis"
    },
    {
      bullet: "square",
      balloonText: "[[value]] %",
      bulletBorderAlpha: 1,
      bulletBorderThickness: 1,
      dashLengthField: "8",
      legendValueText: "[[value]] %",
      title: "CPU Memory",
      fillAlphas: 0,
      valueField: "percentage",
      valueAxis: "percentAxis"
    }
  ],
  chartCursor: {
    categoryBalloonDateFormat: "DD",
    cursorAlpha: 0.1,
    cursorColor: "#000000",
    fullWidth: true,
    valueBalloonsEnabled: false,
    zoomable: false
  },
  dataDateFormat: "YYYY-MM-DD",
  categoryField: "date",
  categoryAxis: {
    dateFormats: [
      {
        period: "DD",
        format: "DD"
      },
      {
        period: "WW",
        format: "MMM DD"
      },
      {
        period: "MM",
        format: "MMM"
      },
      {
        period: "YYYY",
        format: "YYYY"
      }
    ],
    parseDates: true,
    autoGridCount: false,
    axisColor: "#555555",
    gridAlpha: 0.1,
    gridColor: "#FFFFFF",
    gridCount: 50
  },
  export: {
    enabled: true
  }
});
