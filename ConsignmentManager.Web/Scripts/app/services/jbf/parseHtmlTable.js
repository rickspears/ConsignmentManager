(function (htmlTable) {
  "use strict";
  //http://stackoverflow.com/questions/9250545/javascript-domparser-access-innerhtml-and-other-properties
  //TODO: Import string data
  //var exportData = "<html></html>" 
  var doc = new DOMParser().parseFromString(exportData, "text/html");
  var columns = doc.getElementsByTagName('th');
  var rows = doc.getElementsByTagName('tr');

  var data = { 'header': [], 'rows': [] }

  for (i = 0; i < columns.length; ++i) {
    data['header'].push(columns[i].innerText);
  }

  for (i = 0; i < rows.length; ++i) {
    var row = [];
    var tdDescendants = rows[i].descendants('td');
    for (tdDesc = 0; tdDesc < tdDescendants.length; ++tdDesc) {
      var spanDescendants = tdDescendants[tdDesc].descendants('span');
      if (spanDescendants.length > 0) {
        row.push(spanDescendants.innerText);
      }
      else {
        row.push(tdDescendants[tdDesc].innerText);
      }
    }
    data[rows].push(row);
  }
  return data;
}(htmlTable));

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