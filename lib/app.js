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
      distance: 227,
      townSize: 25,
      latitude: 40.71,
      percentage: 20
    },
    {
      date: "2012-01-02",
      distance: 371,
      townSize: 14,
      latitude: 38.89,
      percentage: 30
    },
    {
      date: "2012-01-03",
      distance: 433,
      townSize: 6,
      latitude: 34.22,
      percentage: 60
    },
    {
      date: "2012-01-04",
      distance: 345,
      townSize: 7,
      latitude: 30.35,
      percentage: 77
    },
    {
      date: "2012-01-05",
      distance: 480,
      townSize: 10,
      latitude: 25.83,
      percentage: 12
    },
    {
      date: "2012-01-06",
      distance: 386,
      townSize: 7,
      latitude: 30.46,
      percentage: 55
    },
    {
      date: "2012-01-07",
      distance: 348,
      townSize: 10,
      latitude: 29.94,
      percentage: 96
    },
    {
      date: "2012-01-08",
      distance: 238,
      townSize: 16,
      latitude: 29.76,
      percentage: 2
    },
    {
      date: "2012-01-09",
      distance: 218,
      townSize: 17,
      latitude: 32.8,
      percentage: 32
    },
    {
      date: "2012-01-10",
      distance: 349,
      townSize: 11,
      latitude: 35.49,
      percentage: 35
    },
    {
      date: "2012-01-11",
      distance: 603,
      townSize: 10,
      latitude: 39.1,
      percentage: 41
    },
    {
      date: "2012-01-12",
      distance: 534,
      townSize: 18,
      latitude: 39.74,
      percentage: 66
    },
    {
      date: "2012-01-13",
      townSize: 12,
      distance: 425,
      percentage: 67,
      latitude: 40.75,
      dashLength: 8,
      alpha: 0.4
    },
    {
      date: "2012-01-14",
      latitude: 36.1,
      percentage: 88,
    }
  ],
  valueAxes: [
    {
      id: "distanceAxis",
      axisAlpha: 0,
      gridAlpha: 0,
      position: "left",
      title: "Percentage",
      autoGridCount: false,
      maximum: 100,
      minimum: 0
    },
    {
      id: "latitudeAxis",
      axisAlpha: 0,
      gridAlpha: 0,
      labelsEnabled: false,
      position: "right"
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
      valueField: "distance",
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
      valueField: "latitude",
      valueAxis: "distanceAxis"
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
      valueAxis: "distanceAxis"
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
