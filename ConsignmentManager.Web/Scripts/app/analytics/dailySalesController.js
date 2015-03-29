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
    var chartDataAmount = [];
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
      chartDataAmount.push({
        x: key,
        y: [dailySum[key]]
      });
    });

    $scope.dataAmount = {
      series: ["Sum"],
      data: chartDataAmount
    };

    $scope.configAmount = {
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