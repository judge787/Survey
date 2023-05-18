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

    // q11: q11,
    // q12: q12,
   
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