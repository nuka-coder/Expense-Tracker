//prevent submit button push from refreshing page
//declare variable for form
var form = document.getElementById("form");
//add event listener to form
form.addEventListener("submit", submitPushed);

//declare function for submitPushed
function submitPushed(event) {

//Goal: When name input value is submitted create new td node with input value and append it to a table row...

                                      //For Name Input
  //declare variable for new table row that will house all submitted inputs in one row
  var newRow = document.createElement("TR");
  //declare variable for tableBody within HTML page that the table row will append to
  var tableBody = document.getElementById("tableBody");
  //append newRow to tableBody
  tableBody.appendChild(newRow);
  //declare variable for td element to place name input value to
  var nameTd = document.createElement("TD");
  //declare variable for the name input
  var nameInput = document.getElementById("name");
  //assign name td element name input value
  nameTd.innerHTML= nameInput.value;
  //append td to newRow
  newRow.appendChild(nameTd);
  //assign class and class value to newRow
  newRow.setAttribute("class", "rowData");

  //clear input text box
  nameInput.value="";

                                            //For Date Input
  //declare variable for td element to place date input value to
  var dateTd = document.createElement("TD");
  //declare variable for the date input
  var dateInput = document.getElementById("date");
  //assign date td element date input value
  dateTd.innerHTML= dateInput.value;
  //append td to newRow
  newRow.appendChild(dateTd);

  //clear input text box
  dateInput.value="";

                                        //For Amount Input
  //declare variable for td element to place amount input value to
  var amountTd = document.createElement("TD");
  //declare variable for the amount input
  var amountInput = document.getElementById("amount");
  //assign amount td element amount input value
  amountTd.innerHTML= "$" + amountInput.value;
  //append td to newRow
  newRow.appendChild(amountTd);

  //clear input text box
  amountInput.value="";


//create button Element
var deleteBtn = document.createElement("BUTTON");
//set X for value of Button
deleteBtn.innerHTML="X";
//append deleteBtn to newRow
newRow.appendChild(deleteBtn);
//assign class and class value to deleteBtn
deleteBtn.setAttribute("class", "btnDel");
document.querySelector(".deleteHeading").style.border="1px solid black";

//Goal: delete row content onclick of deleteBtn...

//addEventListener to delete button
deleteBtn.addEventListener("click", deleteRow);
//declare function for deleteRow to delete a row
function deleteRow() {
  document.getElementById("table").deleteRow(1);
}
console.log(tableBody);

//prevent default refresh of page on submit
  event.preventDefault();
}

// //delete row content onclick of deleteBtn
// //addEventListener to delete button
// deleteBtn.addEventListener("click", deleteRow);
// //declare function deleteRow
// function deleteRow() {
//   document.getElementById("table").deleteRow(1);
// }
