(function () {
  "use strict";
  angular
    .module("consignmentManager")
    .controller("CategorySalesController",
                    ["$scope",
                     "analytics",
                     "cmService",
                     CategorySalesController]);

  function CategorySalesController($scope, analytics, cmService) {
    $scope.title = "Analytics";
    $scope.chartType = 'bar';
    var chartData = [];
    var categories = [];

    for (var i = 0; i < analytics.length; i++) {
      if (analytics[i].sold) {
        var category = analytics[i].category.split("-")[0];
        var soldPrice = analytics[i].soldPrice;

        if (category in categories) {
          categories[category] += soldPrice;
        }
        else {
          categories[category] = soldPrice;
        }
      }
    }
    var keys = Object.keys(categories).sort();

    keys.forEach(function (key) {
      chartData.push({
        x: key,
        y: [categories[key]]
      });
    });

    $scope.data = {
      series: ["Totals"],
      data: chartData
    };

    $scope.config = {
      title: "Sales by Category",
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