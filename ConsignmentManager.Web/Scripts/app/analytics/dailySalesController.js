(function () {
  "use strict";
  angular
    .module("consignmentManager")
    .controller("DailySalesController",
                    ["$scope",
                     "analytics",
                     DailySalesController]);

  function DailySalesController($scope, analytics) {
    $scope.title = "Analytics";
    $scope.chartType = 'pie';
    var chartDataAmount = [];
    var dailySum = [];

    function getYearMonthDay(dateString) {
      var date = new Date(dateString);
      var ymd = date.toLocaleDateString();
      return ymd;
    }

    for (var i = 0; i < analytics.length; i++) {
      if (analytics[i].sold) {
        var date = getYearMonthDay(analytics[i].soldDate);

        if (date in dailySum) {
          dailySum[date] += analytics[i].price;
        }
        else {
          dailySum[date] = analytics[i].price;
        }
      }
    }

    for (var key in dailySum) {
      chartDataAmount.push({
        x: key,
        y: [dailySum[key]]
      });
    }

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