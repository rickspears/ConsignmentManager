(function () {
  "use strict";

  angular
    .module("resource")
    .factory("cmService",
              cmService)

  function cmService() {
    function getYearMonthDay(dateString) {
      var date = new Date(dateString);
      var ymd = date.toLocaleDateString();
      return ymd;
    }

    return {
      getYearMonthDay: getYearMonthDay
    }
  }
}());