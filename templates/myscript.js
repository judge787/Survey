function readExcelAndAutofill() {
  var fileInput = document.getElementById("excelFile");
  var file = fileInput.files[0];
  var reader = new FileReader();
  reader.onload = function (e) {
    var data = new Uint8Array(e.target.result);
    var workbook = XLSX.read(data, { type: "array" });
    var worksheet = workbook.Sheets[workbook.SheetNames[0]];

    // Checks worksheet and cell A1 to check what is contained in it
    var cellA1 = worksheet.A1 ? worksheet.A1.v : "";

    // var cellData1 = {};
    // var blocks = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
    // var rows = [1, 2, 3, 4, 5, 6, 7];
    
    // for (var block of blocks) {
      
    //   for (var row of rows) {
    //     var cellBase = worksheet['E' + 2].v;
    //     var cellDataKeyBase = 'q14' + block + row;
    
    //     cellData1[cellDataKeyBase] = extractYear(cellBase);
    //     cellData1[cellDataKeyBase] = extractMonth(cellBase);
    //     cellData1[cellDataKeyBase] = extractDay(cellBase);
    
    //     var cellBase2 = worksheet['F' + 2].v;
    //     cellData1[cellDataKeyBase] = extractYear(cellBase2);
    //     cellData1[cellDataKeyBase] = extractMonth(cellBase2);
    //     cellData1[cellDataKeyBase] = extractDay(cellBase2);
    
    //     cellData1[cellDataKeyBase] = worksheet['J' + 2].v;
    //   }
    // }
    var cellData1 = {
      // Block 1
      q14a1: extractYear(worksheet.E2.v),
      q14a2: extractMonth(worksheet.E2.v),
      q14a3: extractDay(worksheet.E2.v),
      q14a4: extractYear(worksheet.F2.v),
      q14a5: extractMonth(worksheet.F2.v),
      q14a6: extractDay(worksheet.F2.v),
      q14a7: worksheet.J2.v,
      
      q14b1: extractYear(worksheet.E3.v),
      q14b2: extractMonth(worksheet.E3.v),
      q14b3: extractDay(worksheet.E3.v),
      q14b4: extractYear(worksheet.F3.v),
      q14b5: extractMonth(worksheet.F3.v),
      q14b6: extractDay(worksheet.F3.v),
      q14b7: worksheet.J3.v, 

      q14c1: extractYear(worksheet.E4.v),
      q14c2: extractMonth(worksheet.E4.v),
      q14c3: extractDay(worksheet.E4.v),
      q14c4: extractYear(worksheet.F4.v),
      q14c5: extractMonth(worksheet.F4.v),
      q14c6: extractDay(worksheet.F4.v),
      q14c7: worksheet.J4.v, 

      q14d1: "b" + 1,
      q14d7: worksheet.J5.v,  
      q14e7: worksheet.J6.v,  
      q14f7: worksheet.J7.v,  
      q14g7: worksheet.J8.v,  
      q14h7: worksheet.J9.v,  
      q14i7: worksheet.J10.v,  
      q14j7: worksheet.J11.v,  
      q14k7: worksheet.J12.v
      // Add more cells as needed
    };

    var cellData2 = {
      q14a1: worksheet.C1 ? worksheet.C1.v : "",
      q14a5: worksheet.G1 ? worksheet.G1.v : "",
      q14a6: worksheet.H1 ? worksheet.H1.v : "",
      q14a7: worksheet.I1 ? worksheet.I1.v : "",
    };

    var cellData = cellA1 === "Account Number" ? cellData1 : cellData2;

    autofillInputs(cellData);
  };
  reader.readAsArrayBuffer(file);
}

function extractDay(dateValue) {
  var dateObj = new Date((dateValue) * 24 * 60 * 60 * 1000); // Subtract 1 day to account for Excel's date origin
  return dateObj.getDate();
}

function extractMonth(dateValue) {
  var dateObj = new Date((dateValue - 1) * 24 * 60 * 60 * 1000); // Subtract 1 day to account for Excel's date origin
  var month = dateObj.getMonth() + 1; // Adding 1 as month index is zero-based
  return month;
}

function extractYear(dateValue) {
  var dateObj = new Date((dateValue - 1) * 24 * 60 * 60 * 1000); // Subtract 1 day to account for Excel's date origin
  var year = dateObj.getFullYear() - 70; // Subtract 70 for some reason
  return year;
}


function autofillInputs(cellData) {
  for (var key in cellData) {
    var input = document.getElementById(key);
    if (input) {
      input.value = cellData[key];
    }
  }
}

// Bind the readExcelAndAutofill function to file input change event
document.getElementById("excelFile").addEventListener("change", readExcelAndAutofill, false);




// Try number 2 JSON
// function convertToJSON() {
//   var fileInput = document.getElementById("xlsFile");
//   var file = fileInput.files[0];
//   var reader = new FileReader();
//   reader.onload = function (e) {
//     var data = new Uint8Array(e.target.result);
//     var workbook = XLSX.read(data, { type: "array" });
//     var worksheet = workbook.Sheets[workbook.SheetNames[0]];
//     var jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
//     displayOutput(JSON.stringify(jsonData, null, 2));
//   };
//   reader.readAsArrayBuffer(file);
// }

// function displayOutput(jsonData) {
//   var outputDiv = document.getElementById("output");
//   outputDiv.innerHTML = "<pre>" + jsonData + "</pre>";
// }






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
  