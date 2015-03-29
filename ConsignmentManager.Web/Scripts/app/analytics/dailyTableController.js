(function () {
  "use strict";
  angular
    .module("consignmentManager")
    .controller("DailyTableController",
                    ["$scope",
                     "analytics",
                     DailyTableController]);

  function DailyTableController($scope, analytics) {
    $scope.title = "Analytics";
    $scope.chartType = 'bar';
    var chartData = [];
    for (var i = 0; i < analytics.length; i++) {
      chartData.push({
        x: analytics[i].itemDescription,
        y: [analytics[i].price]
      });
    }

    $scope.data = {
      series: ["Test"],
      data: chartData
    };

    $scope.config = {
      title: "This will be a table eventually",
      tooltips: true,
      labels: false,
      mouseover: function () { },
      mouseout: function () { },
      click: function () { },
      legend: {
        display: true,
        position: "right"
      }
    };
  };
}());