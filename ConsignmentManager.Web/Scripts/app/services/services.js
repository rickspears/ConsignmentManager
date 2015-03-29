(function () {
  "use strict";

  angular
    .module("resource")
    .factory("cmService",
              cmService)

  function cmService() {
    function getYearMonthDay(dateString) {
      var date = new Date(dateString).restoreTimeZoneOffset();
      var ymd = date.toLocaleDateString();
      return ymd;
    }

    Date.prototype.restoreTimeZoneOffset = function () {
      if (this.dst()) {
        this.addHours(7);
      }
      else {
        this.addHours(8);
      }
      return this;
    }

    Date.prototype.addHours = function(hours){
      this.setHours(this.getHours()+hours);
      return this;
    }
    
    Date.prototype.stdTimezoneOffset = function() {
      var jan = new Date(this.getFullYear(), 0, 1);
      var jul = new Date(this.getFullYear(), 6, 1);
      return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
    }
    
    Date.prototype.dst = function () {
      return this.getTimezoneOffset() < this.stdTimezoneOffset();
    }

    return {
      getYearMonthDay: getYearMonthDay
    }
  }
}());