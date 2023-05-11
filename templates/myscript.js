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
  

// prints the user inputs to a json file and allows the user to download it 
function printUserInputs() {
  var q1 = document.getElementById('q1').value;
  var q2 = document.getElementById('q2').value;
  var q2other = document.getElementById('q2other-input').value;
  var q3 = document.getElementById('q3').value;
  var q4 = document.getElementById('q4').value;
  var q4other = document.getElementById('q4other-input').value;
  var q5 = document.getElementById('q5').value;
  var q5other = document.getElementById('q5other-input').value;
  var q6 = document.getElementById('q6').value; 
  var q6other = document.getElementById('q6other-input').value;
  var q7 = document.getElementById('q7').value;
  var q7other = document.getElementById('q7other-input').value;
  var q8 = document.getElementById('q8').value;
  var q8other = document.getElementById('q8other-input').value;
  var q9 = document.getElementById('q9').value;
  var q9other = document.getElementById('q9other-input').value;

  
  var q14a1 = document.getElementById('q14a1').value;
  var q14a2 = document.getElementById('q14a2').value;
  var q14a3 = document.getElementById('q14a3').value;
  var q14a4 = document.getElementById('q14a4').value;
  var q14a5 = document.getElementById('q14a5').value;
  var q14a6 = document.getElementById('q14a6').value;
  var q14a7 = document.getElementById('q14a7').value;

  var q14a = [q14a1, q14a2, q14a3, q14a4, q14a5, q14a6, q14a7].join(', ');
  // var q14b1 = document.getElementById('q14b1').value;
  // var q14b2 = document.getElementById('q14b2').value;
  // var q14b3 = document.getElementById('q14b3').value;
  // var q14b4 = document.getElementById('q14b4').value;
  // var q14b5 = document.getElementById('q14b5').value;
  // var q14b6 = document.getElementById('q14b6').value;
  // var q14b7 = document.getElementById('q14b7').value;
  // var q14c1 = document.getElementById('q14c1').value;
  // var q14c2 = document.getElementById('q14c2').value;
  // var q14c3 = document.getElementById('q14c3').value;
  // var q14c4 = document.getElementById('q14c4').value;
  // var q14c5 = document.getElementById('q14c5').value;
  // var q14c6 = document.getElementById('q14c6').value;
  // var q14c7 = document.getElementById('q14c7').value;
  // var q14d1 = document.getElementById('q14d1').value;
  // var q14d2 = document.getElementById('q14d2').value;
  // var q14d3 = document.getElementById('q14d3').value;
  // var q14d4 = document.getElementById('q14d4').value;
  // var q14d5 = document.getElementById('q14d5').value;
  // var q14d6 = document.getElementById('q14d6').value;
  // var q14d7 = document.getElementById('q14d7').value;
  // var q14e1 = document.getElementById('q14e1').value;
  // var q14e2 = document.getElementById('q14e2').value;
  // var q14e3 = document.getElementById('q14e3').value;
  // var q14e4 = document.getElementById('q14e4').value;
  // var q14e5 = document.getElementById('q14e5').value;
  // var q14e6 = document.getElementById('q14e6').value;
  // var q14e7 = document.getElementById('q14e7').value;
  // var q14f1 = document.getElementById('q14f1').value;
  // var q14f2 = document.getElementById('q14f2').value;
  // var q14f3 = document.getElementById('q14f3').value;
  // var q14f4 = document.getElementById('q14f4').value;
  // var q14f5 = document.getElementById('q14f5').value;
  // var q14f6 = document.getElementById('q14f6').value;
  // var q14f7 = document.getElementById('q14f7').value;
  // var q14g1 = document.getElementById('q14g1').value;
  // var q14g2 = document.getElementById('q14g2').value;
  // var q14g3 = document.getElementById('q14g3').value;
  // var q14g4 = document.getElementById('q14g4').value;
  // var q14g5 = document.getElementById('q14g5').value;
  // var q14g6 = document.getElementById('q14g6').value;
  // var q14g7 = document.getElementById('q14g7').value;
  // var q14h1 = document.getElementById('q14h1').value;
  // var q14h2 = document.getElementById('q14h2').value;
  // var q14h3 = document.getElementById('q14h3').value;
  // var q14h4 = document.getElementById('q14h4').value;
  // var q14h5 = document.getElementById('q14h5').value;
  // var q14h6 = document.getElementById('q14h6').value;
  // var q14h7 = document.getElementById('q14h7').value;
  // var q14i1 = document.getElementById('q14i1').value;
  // var q14i2 = document.getElementById('q14i2').value;
  // var q14i3 = document.getElementById('q14i3').value;
  // var q14i4 = document.getElementById('q14i4').value;
  // var q14i5 = document.getElementById('q14i5').value;
  // var q14i6 = document.getElementById('q14i6').value;
  // var q14i7 = document.getElementById('q14i7').value;
  // var q14j1 = document.getElementById('q14j1').value;
  // var q14j2 = document.getElementById('q14j2').value;
  // var q14j3 = document.getElementById('q14j3').value;
  // var q14j4 = document.getElementById('q14j4').value;
  // var q14j5 = document.getElementById('q14j5').value;
  // var q14j6 = document.getElementById('q14j6').value;
  // var q14j7 = document.getElementById('q14j7').value;
  // var q14k1 = document.getElementById('q14k1').value;
  // var q14k2 = document.getElementById('q14k2').value;
  // var q14k3 = document.getElementById('q14k3').value;
  // var q14k4 = document.getElementById('q14k4').value;
  // var q14k5 = document.getElementById('q14k5').value;
  // var q14k6 = document.getElementById('q14k6').value;
  // var q14k7 = document.getElementById('q14k7').value;
  // var q14l1 = document.getElementById('q14l1').value;
  // var q14l2 = document.getElementById('q14l2').value;
  // var q14l3 = document.getElementById('q14l3').value;
  // var q14l4 = document.getElementById('q14l4').value;
  // var q14l5 = document.getElementById('q14l5').value;
  // var q14l6 = document.getElementById('q14l6').value;
  // var q14l7 = document.getElementById('q14l7').value;

 

  //
  function logOtherInputHandling(questionId, questionValue, otherInputValue) {
    
    console.log(`Before if statement: ${questionId} =`, questionValue, `\n${questionId}other =`, otherInputValue);
    if (questionValue === 'other' && otherInputValue !== '') {
      questionValue = otherInputValue;
    }
    console.log(`After if statement: ${questionId} =`, questionValue);

    return questionValue;
  }
  
  q2 = logOtherInputHandling('q2', q2, q2other);
  q4 = logOtherInputHandling('q4', q4, q4other);
  q5 = logOtherInputHandling('q5', q5, q5other);
  q6 = logOtherInputHandling('q6', q6, q6other);
  q7 = logOtherInputHandling('q7', q7, q7other);
  q8 = logOtherInputHandling('q8', q8, q8other);
  q9 = logOtherInputHandling('q9', q9, q9other);
  


// console.log("Before if statement: q2 =", q2, "\nq2other =", q2other);
//   if (q2 == 'other') {
//     q2 = q2other;
//   }
// console.log("After if statement: q2 =", q2);

  
  
  var formData = {
    q1: q1,
    q2: q2,
    q3: q3,
    q4: q4,
    q5: q5,
    q6: q6,
    q7: q7,
    q8: q8,
    q9: q9,


    q14a: q14a,
   
  };

   alert(JSON.stringify(formData, null, 2));
    console.log(formData);
  
    // Convert formData to JSON string
    var jsonData = JSON.stringify(formData, null, 1);
  
    // Create a Blob with the JSON data and specify the MIME type as 'application/json'
    var blob = new Blob([jsonData], { type: 'application/json' });
  
    // Create an anchor element to add the download attribute
    var downloadLink = document.createElement('a');
    downloadLink.download = 'formData.json'; // Set the file name
    downloadLink.href = URL.createObjectURL(blob); // Create a URL for the Blob
    downloadLink.style.display = 'none'; // Hide the link element
  
    // Add the download link to the DOM, click it, and remove it afterward
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

// the code below is responsible for hiding and displaying the "other" input field when users selet "other" from the dropdown menu
//it automates this: 
                                                                                                                                                  // var q2 = document.getElementById("q2");
                                                                                                                                                  // var q2other = document.getElementById("q2other");
                                                                                                                                                  // q2.addEventListener("change", function() {
                                                                                                                                                  //   if (q2.value == "other") {
                                                                                                                                                  //     q2other.style.display = "flex";
                                                                                                                                                  //     document.getElementById("q2other").setAttribute("name", "q2other");
                                                                                                                                                  //   } else {
                                                                                                                                                  //     q2other.style.display = "none";
                                                                                                                                                  //     document.getElementById("q2other").removeAttribute("name");
                                                                                                                                                  //   }
                                                                                                                                                  // });
      

  function handleOtherOption(selectId, otherInputId) {
    var selectElement = document.getElementById(selectId);
    var otherInputElement = document.getElementById(otherInputId).parentNode;
  
    selectElement.addEventListener("change", function () {
      if (selectElement.value == "other") {
        otherInputElement.style.display = "flex";
        document.getElementById(otherInputId).setAttribute("name", otherInputId);
      } else {
        otherInputElement.style.display = "none";
        document.getElementById(otherInputId).removeAttribute("name");
      }
    });
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
  
  document.addEventListener("DOMContentLoaded", function () {
    handleOtherOption("q2", "q2other-input");
    handleOtherOption("q4", "q4other-input");
    handleOtherOption("q5", "q5other-input");
    handleOtherOption("q6", "q6other-input");
    handleOtherOption("q7", "q7other-input");
    handleOtherOption("q8", "q8other-input");
    handleOtherOption("q9", "q9other-input");
  });
