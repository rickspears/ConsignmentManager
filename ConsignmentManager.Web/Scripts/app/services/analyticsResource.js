(function () {
  "use strict";

  angular
      .module("resource")
      .factory("analyticsResource",
              ["$resource",
               analyticsResource]);

  function analyticsResource($resource) {
    return $resource("/api/analytics")
  }

}());