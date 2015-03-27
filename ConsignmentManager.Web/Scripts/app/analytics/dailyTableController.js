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
    var chartDataAmount = [];
    for (var i = 0; i < analytics.length; i++) {
      chartDataAmount.push({
        x: analytics[i].itemDescription,
        y: [analytics[i].price]
      });
    }

    $scope.dataAmount = {
      series: ["Test"],
      data: chartDataAmount
    };

    $scope.configAmount = {
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