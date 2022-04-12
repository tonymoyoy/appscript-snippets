function getData() {
  let sheet = SpreadsheetApp.getActiveSpreadsheet();
  let range = sheet.getRange('A1:C13')
  let values = range.getValues();

  Logger.log(values);
}

