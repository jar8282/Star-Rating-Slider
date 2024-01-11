# Star-Rating-Slider
A very basic star rating system I created partially for my final project in Web & Mobile II, now standalone.

# How To Use:
All you need is the JavaScript rating.js file

Add the 'rating' class with a number (0, 0.5, 1, . . . 5) to display the rating

Or, use it in an html form with a range slider like so:
```
<input type='range' step='0.5' max='5' value='1' id='ratingInput' name='rating' oninput="rangeStars()">

<output id="ratingOutput"></output>
```