//prevent submit button push from refreshing page
//declare variable for form
var form = document.getElementById("form");
//add event listener to form
form.addEventListener("submit", submitPushed);

//declare function for submitPushed
function submitPushed(event) {
  //When name input value is submitted create new td node with Name value and append it to

  //For Name Input
  //declare variable for td cellName for all Name entries
  var nameNode = document.getElementById("cellName");
  //declare variable for Name input
  var nameValue = document.getElementById("name");
  //set innerHTML of nameNode to input balue
  nameNode.innerHTML+= nameValue.value + "<br>";
  //clear input text box
  nameValue.value="";

  //For Date Input
  //declare variable for td cellDate for all Date entries
  var dateNode = document.getElementById("cellDate");
  //declare variable for Date input
  var dateValue = document.getElementById("date");
  //set innerHTML of dateNode to input
  dateNode.innerHTML+= dateValue.value + "<br>";
  //clear input text box
  dateValue.value="";

  //For Number Input
  //declare variable for td cellAmount for all Amount entries
  var amountNode = document.getElementById("cellAmount");
  //declare variable for Date input
  var amountValue = document.getElementById("amount");
  //set innerHTML of dateNode to input
  amountNode.innerHTML+= "$" + amountValue.value + "<br>";
  //clear input text box
  amountValue.value="";

//create button Element
var deleteBtn = document.createElement("BUTTON");
//set X for value of Button
deleteBtn.innerHTML="X";
//declare variable for td delete element
var deleteNode = document.getElementById("delete");
//append deleteBtn to deleteNode
deleteNode.appendChild(deleteBtn);
//createElement for <br>
var br = document.createElement("BR");
//append <br> to deleteNode
deleteNode.appendChild(br);
//adjust styling of delete th so that it appears
deleteNode.style.backgroundColor="grey";
document.querySelector(".deleteHeading").style.border="1px solid black";



  event.preventDefault();
}
