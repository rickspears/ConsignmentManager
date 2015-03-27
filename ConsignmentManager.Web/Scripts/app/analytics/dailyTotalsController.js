(function () {
  "use strict";
  angular
    .module("consignmentManager")
    .controller("DailyTotalsController",
                    ["$scope",
                     "analytics",
                     DailyTotalsController]);

  function DailyTotalsController($scope, analytics) {
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
      series: ["Count"],
      data: chartDataAmount
    };

    $scope.configAmount = {
      title: "Daily Sales Count",
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