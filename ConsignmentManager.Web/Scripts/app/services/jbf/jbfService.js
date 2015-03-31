(function () {
  "use strict";

  angular
    .module("resource")
    .factory("jbfService",
              jbfService)

  function jbfService() {
    function convertHtmlTableToJson(table) {
      //http://stackoverflow.com/questions/9250545/javascript-domparser-access-innerhtml-and-other-properties
      if (!table) {
        return null;
      }
      var doc = new DOMParser().parseFromString(table, "text/html");
      var columns = doc.getElementsByTagName('th');
      var rows = doc.getElementsByTagName('tr');

      var header = []
      var data = []

      for (var i = 0; i < columns.length; ++i) {
        header.push(columns[i].innerText.replace(" ", ""));
      }

      for (var i = 1; i < rows.length; ++i) {
        var row = {};
        var rowChildren = rows[i].children;
        for (var rowIterator = 0; rowIterator < rowChildren.length; ++rowIterator) {
          if (rowChildren[rowIterator].nodeName != 'TD') { continue; }
          if (rowChildren[rowIterator].childElementCount > 0) {
            var tdChildren = rowChildren[rowIterator].children;
            row[header[rowIterator]] = tdChildren[0].innerText.replace(/^\s|^\$/, "");
          }
          else {
            row[header[rowIterator]] = rowChildren[rowIterator].innerText.replace(/^\s|^\$/, "");
          }
        }
        data.push(row);
      }
      return data;
    }
    return {
      convertHtmlTableToJson: convertHtmlTableToJson
    }
  }
}());