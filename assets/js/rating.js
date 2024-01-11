// JS Functions that convert a 5-star rating integer into stars
var IconOptions = [
  "☆☆☆☆☆", // 0 stars
  "½☆☆☆☆", // 0.5 stars
  "★☆☆☆☆", // 1 star
  "★½☆☆☆", // 1.5 stars
  "★★☆☆☆", // 2 stars
  "★★½☆☆", // 2.5 stars
  "★★★☆☆", // 3 stars
  "★★★½☆", // 3.5 stars
  "★★★★☆", // 4 stars
  "★★★★½", // 4.5 stars
  "★★★★★", // 5 stars
]

document.addEventListener('DOMContentLoaded', function() {  
  // Init range 
  rangeStars();

  // Set comment rating elements
  var ratingList = document.getElementsByClassName('rating');
  for(var i = 0; i < ratingList.length; i++){
    var rating = ratingList[i];
    var value = parseFloat(rating.innerHTML);
    rating.innerHTML = IconOptions[value * 2];
  }
});

// Function that updates the stars on the range form element
function rangeStars(){
  // Update range element
  var range = parseFloat(document.getElementById('ratingInput').value);
  document.getElementById('ratingOutput').innerHTML = IconOptions[range * 2];
}

