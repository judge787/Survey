// Read all excel cells and assign them to input ids
function readExcelAndAutofill(event) {
  var fileInput = event.target;
  var file = fileInput.files[0];
  var reader = new FileReader();
  reader.onload = function (e) {
    var data = new Uint8Array(e.target.result);
    var workbook = XLSX.read(data, { type: "array" });
    var worksheet = workbook.Sheets[workbook.SheetNames[0]]; // Choose first workbook sheet in excel

    // If else statements to figure out which bill your working with
    if (worksheet.A1 ? worksheet.A1.v : "" == "Account Number") { // Enbridge Bill
      var cellData = {
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
  
        q14d1: extractYear(worksheet.E5.v),
        q14d2: extractMonth(worksheet.E5.v),
        q14d3: extractDay(worksheet.E5.v),
        q14d4: extractYear(worksheet.F5.v),
        q14d5: extractMonth(worksheet.F5.v),
        q14d6: extractDay(worksheet.F5.v),
        q14d7: worksheet.J5.v,

        q14e1: extractYear(worksheet.E6.v),
        q14e2: extractMonth(worksheet.E6.v),
        q14e3: extractDay(worksheet.E6.v),
        q14e4: extractYear(worksheet.F6.v),
        q14e5: extractMonth(worksheet.F6.v),
        q14e6: extractDay(worksheet.F6.v),
        q14e7: worksheet.J6.v,  

        q14f1: extractYear(worksheet.E7.v),
        q14f2: extractMonth(worksheet.E7.v),
        q14f3: extractDay(worksheet.E7.v),
        q14f4: extractYear(worksheet.F7.v),
        q14f5: extractMonth(worksheet.F7.v),
        q14f6: extractDay(worksheet.F7.v),
        q14f7: worksheet.J7.v,  

        q14g1: extractYear(worksheet.E8.v),
        q14g2: extractMonth(worksheet.E8.v),
        q14g3: extractDay(worksheet.E8.v),
        q14g4: extractYear(worksheet.F8.v),
        q14g5: extractMonth(worksheet.F8.v),
        q14g6: extractDay(worksheet.F8.v),
        q14g7: worksheet.J8.v, 

        q14h1: extractYear(worksheet.E9.v),
        q14h2: extractMonth(worksheet.E9.v),
        q14h3: extractDay(worksheet.E9.v),
        q14h4: extractYear(worksheet.F9.v),
        q14h5: extractMonth(worksheet.F9.v),
        q14h6: extractDay(worksheet.F9.v),
        q14h7: worksheet.J9.v,  

        q14i1: extractYear(worksheet.E10.v),
        q14i2: extractMonth(worksheet.E10.v),
        q14i3: extractDay(worksheet.E10.v),
        q14i4: extractYear(worksheet.F10.v),
        q14i5: extractMonth(worksheet.F10.v),
        q14i6: extractDay(worksheet.F10.v),
        q14i7: worksheet.J10.v, 

        q14j1: extractYear(worksheet.E11.v),
        q14j2: extractMonth(worksheet.E11.v),
        q14j3: extractDay(worksheet.E11.v),
        q14j4: extractYear(worksheet.F11.v),
        q14j5: extractMonth(worksheet.F11.v),
        q14j6: extractDay(worksheet.F11.v),
        q14j7: worksheet.J11.v,  

        q14k1: extractYear(worksheet.E12.v),
        q14k2: extractMonth(worksheet.E12.v),
        q14k3: extractDay(worksheet.E12.v),
        q14k4: extractYear(worksheet.F12.v),
        q14k5: extractMonth(worksheet.F12.v),
        q14k6: extractDay(worksheet.F12.v),
        q14k7: worksheet.J12.v
      };
    } else if (worksheet.A7 ? worksheet.A7.v : "" == "Month") { // Hydro One Bill
      
      var cellData = {
        q15a1: extractYear(worksheet.A8.v),
        q15a2: extractMonth(worksheet.A8.v),
        q15a3: "1",
        q15a4: extractYear(worksheet.A8.v),
        q15a5: extractMonth(worksheet.A8.v),
        q15a6: extractDay(extractMonth(worksheet.A8.v).toString()),
        q15a7: worksheet.B8.v,

        q15b1: extractYear(worksheet.A9.v),
        q15b2: extractMonth(worksheet.A9.v),
        q15b3: "1",
        q15b4: extractYear(worksheet.A9.v),
        q15b5: extractMonth(worksheet.A9.v),
        q15b6: extractDay(extractMonth(worksheet.A9.v).toString()),
        q15b7: worksheet.B9.v,

        q15c1: extractYear(worksheet.A10.v),
        q15c2: extractMonth(worksheet.A10.v),
        q15c3: "1",
        q15c4: extractYear(worksheet.A10.v),
        q15c5: extractMonth(worksheet.A10.v),
        q15c6: extractDay(extractMonth(worksheet.A10.v).toString()),
        q15c7: worksheet.B10.v,

        q15d1: extractYear(worksheet.A11.v),
        q15d2: extractMonth(worksheet.A11.v),
        q15d3: "1",
        q15d4: extractYear(worksheet.A11.v),
        q15d5: extractMonth(worksheet.A11.v),
        q15d6: extractDay(extractMonth(worksheet.A11.v).toString()),
        q15d7: worksheet.B11.v,
        
        q15e1: extractYear(worksheet.A12.v),
        q15e2: extractMonth(worksheet.A12.v),
        q15e3: "1",
        q15e4: extractYear(worksheet.A12.v),
        q15e5: extractMonth(worksheet.A12.v),
        q15e6: extractDay(extractMonth(worksheet.A12.v).toString()),
        q15e7: worksheet.B12.v,

        q15f1: extractYear(worksheet.A13.v),
        q15f2: extractMonth(worksheet.A13.v),
        q15f3: "1",
        q15f4: extractYear(worksheet.A13.v),
        q15f5: extractMonth(worksheet.A13.v),
        q15f6: extractDay(extractMonth(worksheet.A13.v).toString()),
        q15f7: worksheet.B13.v,

        q15g1: extractYear(worksheet.A14.v),
        q15g2: extractMonth(worksheet.A14.v),
        q15g3: "1",
        q15g4: extractYear(worksheet.A14.v),
        q15g5: extractMonth(worksheet.A14.v),
        q15g6: extractDay(extractMonth(worksheet.A14.v).toString()),
        q15g7: worksheet.B14.v,
        
        q15h1: extractYear(worksheet.A15.v),
        q15h2: extractMonth(worksheet.A15.v),
        q15h3: "1",
        q15h4: extractYear(worksheet.A15.v),
        q15h5: extractMonth(worksheet.A15.v),
        q15h6: extractDay(extractMonth(worksheet.A15.v).toString()),
        q15h7: worksheet.B15.v,

        q15i1: extractYear(worksheet.A16.v),
        q15i2: extractMonth(worksheet.A16.v),
        q15i3: "1",
        q15i4: extractYear(worksheet.A16.v),
        q15i5: extractMonth(worksheet.A16.v),
        q15i6: extractDay(extractMonth(worksheet.A16.v).toString()),
        q15i7: worksheet.B16.v,

        q15j1: extractYear(worksheet.A17.v),
        q15j2: extractMonth(worksheet.A17.v),
        q15j3: "1",
        q15j4: extractYear(worksheet.A17.v),
        q15j5: extractMonth(worksheet.A17.v),
        q15j6: extractDay(extractMonth(worksheet.A17.v).toString()),
        q15j7: worksheet.B17.v,

        q15k1: extractYear(worksheet.A18.v),
        q15k2: extractMonth(worksheet.A18.v),
        q15k3: "1",
        q15k4: extractYear(worksheet.A18.v),
        q15k5: extractMonth(worksheet.A18.v),
        q15k6: extractDay(extractMonth(worksheet.A18.v).toString()),
        q15k7: worksheet.B18.v,
        
        q15l1: extractYear(worksheet.A19.v),
        q15l2: extractMonth(worksheet.A19.v),
        q15l3: "1",
        q15l4: extractYear(worksheet.A19.v),
        q15l5: extractMonth(worksheet.A19.v),
        q15l6: extractDay(extractMonth(worksheet.A19.v).toString()),
        q15l7: worksheet.B19.v
      };
    } // Add other else if statements if want to be accessible for other bill types


    autofillInputs(cellData);
  };
  reader.readAsArrayBuffer(file);
}

// Extract the day from dates
function extractDay(dateValue) {
  if (typeof dateValue === "string") {
    if (dateValue === "01" || dateValue === "03" || 
        dateValue === "05" || dateValue === "07" || 
        dateValue === "08" || dateValue === "10" || 
        dateValue === "12") { 
        return "31"; // For months with 31 days
    } else if (dateValue === "04" || dateValue === "06" || 
               dateValue === "09" || dateValue === "11") {
        return "30"; // For months with 30 days
    } else {
        return "28"; // for February
    }
  } else {
    var dateObj = new Date((dateValue) * 24 * 60 * 60 * 1000);
    return dateObj.getDate();
  }
}

// Extract the month from dates
function extractMonth(dateValue) {
  if (typeof dateValue === "string") {
    return dateValue.substr(0, 2);
  } else {
    var dateObj = new Date((dateValue - 1) * 24 * 60 * 60 * 1000); // Subtract 1 day to account for Excel's date origin
    var month = dateObj.getMonth() + 1; // Adding 1 as month index is zero-based
    return month;
  }
}

// Extract the year from dates
function extractYear(dateValue) {
  if (typeof dateValue === "string") {
    return dateValue.substr(3, 7);
  } else {
    var dateObj = new Date((dateValue - 1) * 24 * 60 * 60 * 1000); // Subtract 1 day to account for Excel's date origin
    return dateObj.getFullYear() - 70; // Subtract 70 for correct date;
  }
}

// Autofill input fields in HTML by iteration
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
document.getElementById("excelFile2").addEventListener("change", readExcelAndAutofill, false);
