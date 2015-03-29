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
    $scope.chartType = 'bar';
    var chartData = [];
    var dailySoldPrice = [];
    var dailyPrice = [];
    var dailyAdjustedPrice = [];

    for (var i = 0; i < analytics.length; i++) {
      if (analytics[i].sold) {
        var date = cmService.getYearMonthDay(analytics[i].soldDate);

        if (date in dailySoldPrice) {
          dailyPrice[date] += analytics[i].price;
          dailySoldPrice[date] += analytics[i].soldPrice;
          dailyAdjustedPrice[date] += analytics[i].soldPrice * 0.7;
        }
        else {
          dailyPrice[date] = analytics[i].price;
          dailySoldPrice[date] = analytics[i].soldPrice;
          dailyAdjustedPrice[date] = analytics[i].soldPrice * 0.7;
        }
      }
    }

    var keys = Object.keys(dailySoldPrice).sort();

    keys.forEach(function (key) {
      chartData.push({
        x: key,
      });
    });

    $scope.data = {
      series: ["List Price", "Sold Price", "Adjusted Price"],
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