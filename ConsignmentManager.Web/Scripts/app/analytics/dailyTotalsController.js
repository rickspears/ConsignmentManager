(function () {
  "use strict";
  angular
    .module("consignmentManager")
    .controller("DailyTotalsController",
                    ["$scope",
                     "analytics",
                     "cmService",
                     DailyTotalsController]);

  function DailyTotalsController($scope, analytics, cmService) {
    $scope.title = "Analytics";
    $scope.chartType = 'bar';
    var chartDataAmount = [];
    var dailyCount = [];
    for (var i = 0; i < analytics.length; i++) {
      if (analytics[i].sold) {
        var date = cmService.getYearMonthDay(analytics[i].soldDate);

        if (date in dailyCount) {
          dailyCount[date]++;
        }
        else {
          dailyCount[date] = 1;
        }
      }
    }
    var keys = Object.keys(dailyCount).sort();

    keys.forEach(function (key) {
      chartDataAmount.push({
        x: key,
        y: [dailyCount[key]]
      });
    });

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