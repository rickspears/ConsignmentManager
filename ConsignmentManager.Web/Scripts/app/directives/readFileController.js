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
      $scope.content = data;
    };

    var data = jbfService.convertHtmlTableToJson($scope.content);
    if (!data) { return; }

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