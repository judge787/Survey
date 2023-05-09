function convertToJSON() {
  var fileInput = document.getElementById("xlsFile");
  var file = fileInput.files[0];
  var reader = new FileReader();
  reader.onload = function (e) {
    var data = new Uint8Array(e.target.result);
    var workbook = XLSX.read(data, { type: "array" });
    var worksheet = workbook.Sheets[workbook.SheetNames[0]];
    var jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    displayOutput(jsonData);
  };
  reader.readAsArrayBuffer(file);
}

function displayOutput(jsonData) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = JSON.stringify(jsonData, null, 2);
}




// // Function to handle file input change event
// function handleFile(e) {
//     var file = e.target.files[0];
//     readXlsxFile(file).then(function (rows) {
//       autofillForm(rows);
//     });
//   }
  
//   // Function to autofill form fields
//   function autofillForm(rows) {
//     var headerRow = rows[0]; // Assuming the first row contains the column headers
//     var dataRow = rows[1]; // Assuming the second row contains the data
//     var nameIndex = headerRow.indexOf("Name");
//     var emailIndex = headerRow.indexOf("Email");
//     var ageIndex = headerRow.indexOf("Age");
//     document.getElementById("name").value = dataRow[nameIndex];
//     document.getElementById("email").value = dataRow[emailIndex];
//     document.getElementById("age").value = dataRow[ageIndex];
//   }
  
//   // Bind the handleFile function to file input change event
//   document.getElementById("excelFile").addEventListener("change", handleFile, false);
  