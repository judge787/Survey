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





let q13a2Value;
let q13b2Value;
let q13c2Value;
let q13d2Value;
let q13e2Value;
let q13f2Value;
let q13g2Value;
let q13h2Value; 
let q13i2Value;
let q13j2Value;

document.addEventListener('DOMContentLoaded', function () {
  //excel part
  document.getElementById("excelFile").addEventListener("change", readExcelAndAutofill, false);
  document.getElementById("excelFile2").addEventListener("change", readExcelAndAutofill, false);

  //INPUT OUTPUT PART
  const q13a1 = document.getElementById('q13a1');
  const q13a2 = document.getElementById('q13a2');

  q13a1.addEventListener('change', function () {
    if (q13a1.checked) {
      q13a2.style.display = 'block';
    } else {
      q13a2.style.display = 'none';
    }
  });
  
  const q13a2Input = document.getElementById('q13a2-input');
  q13a2Input.addEventListener('input', function () {
    q13a2Value = q13a2Input.value;
    console.log(q13a2Value);
  });

  q13b1.addEventListener('change', function () {
    if (q13b1.checked) {
      q13b2.style.display = 'block';
    } else {
      q13b2.style.display = 'none';
    }
  });
  
  const q13b2Input = document.getElementById('q13b2-input');
  q13b2Input.addEventListener('input', function () {
    q13b2Value = q13b2Input.value;
    console.log(q13b2Value);
  });
});




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
  
  var q10a = document.getElementById('q10a').checked;
  var q10b = document.getElementById('q10b').checked;
  var q10c = document.getElementById('q10c').checked;
  var q10d = document.getElementById('q10d').checked;
  var q10e = document.getElementById('q10e').value;

  var q11 = document.getElementById('q11').value;
  var q12 = document.getElementById('q12').value;


  // var q13a1 = document.getElementById('q13a1').checked;
  // if (q13a1 == true){
  //   var q13a1 = document.getElementById('q13a1').value;
  //   var q13a2 = document.getElementById('q13a2').value; }

  // var q13b1 = document.getElementById('q13b1').checked;
  // if (q13b1 == true){
  //   var q13b1 = document.getElementById('q13b1').value;
  //   var q13b2 = document.getElementById('q13b2').value; }

  // Declare the variables before the if statements
      // var q13a1 = document.getElementById('q13a1').checked;
      // var q13a2 = '';
      // if (q13a1 == true){
      //     q13a1 = document.getElementById('q13a1').value;
      //     q13a2 = document.getElementById('q13a2').value; 
      // }

      var q13a1 = document.getElementById('q13a1').checked;
      var q13b1 = document.getElementById('q13b1').checked;
      // var q13a2Input = document.getElementById('q13a2-input');
      
      // if (q13a1 == true){
      //     q13a1 = document.getElementById('q13b1').value;
      //     q13a2Input = document.getElementById('q13b2Input').value; 
      // }

        

      //   console.log('q13a1:', q13a1);
      //   console.log('q13a2:', q13a2);
      //   console.log('q13b1:', q13b1);
      //   console.log('q13b2:', q13b2);

  var q16 = document.getElementById('q16').value;
  
  var q14a1 = document.getElementById('q14a1').value;
  var q14a2 = document.getElementById('q14a2').value;
  var q14a3 = document.getElementById('q14a3').value;
  var q14a4 = document.getElementById('q14a4').value;
  var q14a5 = document.getElementById('q14a5').value;
  var q14a6 = document.getElementById('q14a6').value;
  var q14a7 = document.getElementById('q14a7').value;



  var q14a = [q14a1, q14a2, q14a3, q14a4, q14a5, q14a6, q14a7].join(', ');

  
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
    q10a: q10a,
    q10b: q10b,
    q10c: q10c,
    q10d: q10d,
    q10e: q10e,
    

    q11: q11,
    q12: q12,
   
    q13a1: q13a1,
    q13a2Value: q13a2Value,
    q13b1: q13b1,
    q13b2Value:  q13b2Value,

    // q13b1: q13b1,
    // q13b2: q13b2,

    q14a: q14a,

    q16: q16,
   
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

document.addEventListener("DOMContentLoaded", function () {
  q13a2Value = "";
  if (document.getElementById('q13a1').checked == true){
    q13a2Value = document.getElementById('q13a2Value').value;
  }
  q13b2Value = "";
  if (document.getElementById('q13b1').checked == true){
    q13b2Value = document.getElementById('q13b2Value').value;
  }
 
  handleOtherOption("q2", "q2other-input");
  handleOtherOption("q4", "q4other-input");
  handleOtherOption("q5", "q5other-input");
  handleOtherOption("q6", "q6other-input");
  handleOtherOption("q7", "q7other-input");
  handleOtherOption("q8", "q8other-input");
  handleOtherOption("q9", "q9other-input");
});