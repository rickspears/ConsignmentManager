(function () {
  "use strict";
  angular
    .module("consignmentManager")
    .controller("DailySalesController",
                    ["$scope",
                     "analytics",
                     "cmService",
                     DailySalesController]);

  function DailySalesController($scope, analytics, cmService) {
    $scope.title = "Analytics";
    $scope.chartType = 'pie';
    var chartData = [];
    var dailySum = [];

    for (var i = 0; i < analytics.length; i++) {
      if (analytics[i].sold) {
        var date = cmService.getYearMonthDay(analytics[i].soldDate);

        if (date in dailySum) {
          dailySum[date] += analytics[i].price;
        }
        else {
          dailySum[date] = analytics[i].price;
        }
      }
    }

    var keys = Object.keys(dailySum).sort();

    keys.forEach(function (key) {
      chartData.push({
        x: key,
        y: [dailySum[key]]
      });
    });

    $scope.data = {
      series: ["Sum"],
      data: chartData
    };

    $scope.config = {
      title: "Daily Sales Profit",
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