/*
Name: Ryan Politis
Email: Ryan_Politis@student.uml.edu
File: mult_table.js
Date: 11/27/23
GUI Assignment: Implement a multiplication table using forms and javascript
What the file does: Clears exisiting table, grabs inputs, checks for invalid inputs, then makes a dynamic multiplication table
*/
$.validator.setDefaults({
  submitHandler: function() {
    document.getElementById("multi_table").innerHTML = "";            // Clears the multiplication table to allow it to be regenerated

    var min_x = document.getElementById("min_x").value;               // Gets the minimum x-value from the first input
    var max_x = document.getElementById("max_x").value;               // Gets the maximum x-value from the second input
    
    var min_y = document.getElementById("min_y").value;               // Gets the minimum y-value from the third input
    var max_y = document.getElementById("max_y").value; 

    var table = document.getElementById('multi_table');               // Grab the multiplication table and put it inside a table variable

    var header_row = table.insertRow();                               // Insert a row for the header of the muliplication table
    header_row.insertCell();                                          // Insert an empty cell in the top left corner
  
    // Main multiplication table loops
    for (var i = min_x; i <= max_x; i++) {                            // Loop to insert column cells into the header row
      var cell = header_row.insertCell();
      cell.textContent = i;                                           // Insert content of cells; numbers should be from minimum x-values to maximum x-values
    }
  
    for (var j = min_y; j <= max_y; j++) {                            // Loop to insert rows of the multiplication table
      var new_row = table.insertRow();
  
      var row_header_cell = new_row.insertCell();                     // Create header row in first column of table
      row_header_cell.textContent = j;                                // Insert content of header row in first column
  
      for (var k = min_x; k <= max_x; k++) {                          // Loop to input multiplication table content
        var cell = new_row.insertCell();                              // Insert cells
        cell.textContent = j * k;                                     // Multiply and insert the content into the cells of table
      }
    }
  }
});

// New validator method to check that max value is greater than min value
$.validator.addMethod('greater_than', function (value, element, param) {
  return this.optional(element) || parseInt(value) >= parseInt($(param).val());
});

$().ready(function() {
  $("#input_form").validate({                                         // Validate submitted inputs
    rules: {
      min_x: {
        required: true,                                               // Require a value to be sumbimitted
        number: true,                                                 // Value inputted must be a number
        min: -50,                                                     // Check if value is below minimum amount
        max: 50,                                                      // Check if value is above maximum amount
      },
      max_x: {
        required: true,
        number: true,
        min: -50,
        max: 50,
        greater_than: '#min_x'                                         // Check if minimum x-value is greater than maximum x-value
      },
      min_y: {
        required: true,
        number: true,
        min: -50,
        max: 50
      },
      max_y: {
        required: true,
        number: true,
        min: -50,
        max: 50,
        greater_than: "#min_y"                                         // Check if minimum y-value is greater than maximum y-value
      }
    },
    messages: {
      min_x: {
        required: "Please enter a number!",                           // Error message for if a number is not entered
        number: "Input must be a number!",                            // Error message for if input is not a number
        min: "Your number must be greater than -50!",                 // Error message for if minimum x-value is below minumum bound
        max: "Your number must be less than 50!"                      // Error message for if minimum x-value is above maximum bound
      },
      max_x: {
        required: "Please enter a number!",
        number: "Input must be a number!",
        min: "Your number must be greater than -50!",
        max: "Your number must be less than 50!",
        greater_than: "Maximum X-value must be greater than minimum!"  // Error message if maximum x-value is not greater than minimum x-value
      },
      min_y: {
        required: "Please enter a number!",
        number: "Input must be a number!",
        min: "Your number must be greater than -50!",
        max: "Your number must be less than 50!"
      },
      max_y: {
        required: "Please enter a number!",
        number: "Input must be a number!",
        min: "Your number must be greater than -50!",
        max: "Your number must be less than 50!",
        greater_than: "Maximum Y-value must be greater than minimum!"
      }
    }
  });
});
