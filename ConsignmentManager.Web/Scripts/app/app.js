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
               templateUrl: "Views/analytics/charts.html",
               controller: "DailySalesController",
               resolve: {
                 analyticsResource: "analyticsResource",
                 analytics: function (analyticsResource) {
                   return analyticsResource.query(
                     function (response) { }).$promise;
                 }
               }
             },
             "dailyTotals@analytics": {
               templateUrl: "Views/analytics/charts.html",
               controller: "DailyTotalsController",
               resolve: {
                 analyticsResource: "analyticsResource",
                 analytics: function (analyticsResource) {
                   return analyticsResource.query(
                     function (response) { }).$promise;
                 }
               }
             },
             "dailyTable@analytics": {
               templateUrl: "Views/analytics/table.html",
               controller: "DailyTableController",
               resolve: {
                 analyticsResource: "analyticsResource",
                 analytics: function (analyticsResource) {
                   return analyticsResource.query(
                     function (response) { }).$promise;
                 }
               }
             }
           }
         })
     }]);
}());