(function () {
  "use strict";

  var app = angular.module(
    "consignmentManager",
    ["resource",
     "ui.router",
     "ui.mask",
     "ui.bootstrap",
     "angularCharts"]);

  app.config(
    ["$stateProvider",
     "$urlRouterProvider",
     function ($stateProvider, $urlRouterProvider) {
       $urlRouterProvider.otherwise("/");
     
       $stateProvider
         .state("home", {
           url: "/",
           templateUrl: "Views/welcome.html"
         })
         .state("analytics", {
           url: "/analytics",
           views: {
             "": {
               templateUrl: "Views/analytics/analytics.html"
             },
             "dailySales@analytics": {
               templateurl: "Views/analytics/charts.html",
               controller: "dailySalesController"
             },
             "dailyTotals@analytics": {
               templateurl: "Views/analytics/charts.html",
               controller: "dailyTotalsController"
             },
             "dailyTable@analytics": {
               templateurl: "Views/analytics/table.html",
               controller: "dailyTableController"
             }
           }
           
         })
     }
    ])
}());