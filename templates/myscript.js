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
  // var heatingSystem = document.getElementById('heating-system').value;

  console.log("Before if statement: q2 =", q2, "\nq2other =", q2other);
  if (q2 == 'other') {
    q2 = q2other;
  }
  console.log("After if statement: q2 =", q2);

  console.log("Before if statement: q4 =", q4, "\nq4other =", q4other);
  if (q4 == 'other') {
    q4 = q4other;
  }
  console.log("After if statement: q4 =", q4);
  
  var formData = {
    q1: q1,
    q2: q2,
    q3: q3,
    q4: q4,
    q5: q5,
    // heatingSystem: heatingSystem,
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


  // document.addEventListener("DOMContentLoaded", function() { // ensures that the DOM is loaded before the code below is executed
    
  //   var q2 = document.getElementById("q2");
  //   var q2other = document.getElementById("q2other");

  //   q2.addEventListener("change", function() {
  //     if (q2.value == "other") {
  //       q2other.style.display = "flex";
  //       document.getElementById("q2other").setAttribute("name", "q2other");
  //     } else {
  //       q2other.style.display = "none";
  //       document.getElementById("q2other").removeAttribute("name");
  //     }
  //   });
  // });

