// Function that validates the comments form,
// additionally sending an alert if an issue is found
function checkForm(){
  var name = document.getElementById('name').value;
  // rating is pre set and bound to 0 -> 5, no need for processing or checking
  var comment = document.getElementById('comment').value;

  // Check empty:
  if(name == "" || comment == ""){
    alert("Please fill all form fields before submission");
    return false;
  }
  return true;
}