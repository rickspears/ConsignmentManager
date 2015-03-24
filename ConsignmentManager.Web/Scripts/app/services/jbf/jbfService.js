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

      var data = { 'header': [], 'rows': [] }

      for (var i = 0; i < columns.length; ++i) {
        data['header'].push(columns[i].innerText);
      }

      for (var i = 1; i < rows.length; ++i) {
        var row = [];
        var rowChildren = rows[i].children;
        for (var rowIterator = 0; rowIterator < rowChildren.length; ++rowIterator) {
          if (rowChildren[rowIterator].nodeName != 'TD') { continue; }
          if (rowChildren[rowIterator].childElementCount > 0) {
            var tdChildren = rowChildren[rowIterator].children;
            row.push(tdChildren[0].innerText);
          }
          else {
            row.push(rowChildren[rowIterator].innerText);
          }
        }
        data['rows'].push(row);
      }
      return data;
    }
    return {
      convertHtmlTableToJson: convertHtmlTableToJson
    }
  }
}());

/*
  public class HTMLParser
  {
    public HTMLParser(string html)
    {
      Html = html;
    }

    public string Html { get; set; }

    public DataTable ParseHtml()
    {
      var result = new DataTable();
      var document = new HtmlDocument();
      document.LoadHtml(Html);

      var table = document.DocumentNode.Descendants("table").ElementAt(0);
      var rows = table.Descendants("tr");
      var header = rows.Take(1).First();
      foreach (var column in header.Descendants("th"))
      {
        result.Columns.Add(new DataColumn(column.InnerText, typeof(string)));
      }
      foreach (var row in rows.Skip(1))
      {
        var data = new List<string>();
        foreach (var column in row.Descendants("td"))
        {
          var span = column.Descendants("span");
          if (span.Count() > 0)
          {
            data.Add(span.ElementAt(0).InnerText);
          }
          else
          {
            data.Add(column.InnerText);
          }
        }
        result.Rows.Add(data.ToArray());
      }
      return result;
    }
  }
}
*/