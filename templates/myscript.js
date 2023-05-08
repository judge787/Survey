// Function to handle file input change event
function handleFile(e) {
    var file = e.target.files[0];
    readXlsxFile(file).then(function (rows) {
      autofillForm(rows);
    });
  }
  
  // Function to autofill form fields
  function autofillForm(rows) {
    var headerRow = rows[0]; // Assuming the first row contains the column headers
    var dataRow = rows[1]; // Assuming the second row contains the data
    var nameIndex = headerRow.indexOf("Name");
    var emailIndex = headerRow.indexOf("Email");
    var ageIndex = headerRow.indexOf("Age");
    document.getElementById("name").value = dataRow[nameIndex];
    document.getElementById("email").value = dataRow[emailIndex];
    document.getElementById("age").value = dataRow[ageIndex];
  }
  
  // Bind the handleFile function to file input change event
  document.getElementById("excelFile").addEventListener("change", handleFile, false);
  