(function () {
  "use strict";
  angular
    .module("consignmentManager")
    .controller("ReadFileController",
                    ["$scope",
                      "$http",
                      ReadFileController]);

  function ReadFileController($scope, $http) {
    $scope.showContent = function ($fileContent) {
      $scope.content = $fileContent;
    };

    var data = parseHtmlTable($scope.content);

    $http.post(
      "api/analytics/add",
      JSON.stringify(data),
      {
        headers:
          {
            "Content-Type": "application/json"
          }
      }).success(function (data) {
        $scope.content = $fileContent;
      });
  }
}());