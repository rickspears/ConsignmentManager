(function () {
  "use strict";
  angular
    .module("consignmentManager")
    .controller("ReadFileController",
                    ["$scope",
                      "$http",
                      "jbfService",
                      ReadFileController]);

  function ReadFileController($scope, $http, jbfService) {
    $scope.showContent = function ($fileContent) {
      var data = jbfService.convertHtmlTableToJson($fileContent);
      $scope.content = $fileContent;

      $http.post(
        "api/analytics/add",
        JSON.stringify(data),
        {
          headers:
            {
              "Content-Type": "application/json"
            }
        }).success(function ($fileContent) {
          $scope.content = $fileContent;
        });
    };
  }
}());