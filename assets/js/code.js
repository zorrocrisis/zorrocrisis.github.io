var numSliders = 10;
var slideList = [];

for(var l = 0; l < numSliders; l++)
{
    slideList[l] = l * 3; /* assuming 3 pictures per slider*/
}


for(var l = 0; l < slideList.length; l++)
{
    SlideShow(l);
}


function plusSlides(n, setIndex) {
    slideList[setIndex] = slideList[setIndex] + n;
    SlideShow(setIndex);
}


//  images controls
function currentSlide(n) {
  SlideShow(n, 0);
}

function SlideShow(index) {
    var i;
    var slides = document.getElementsByClassName("Containers");

    var lowerBound = index * 3;
    var upperBound = lowerBound + 2;

    if (slideList[index] > upperBound) {slideList[index] = lowerBound}
    if (slideList[index] < lowerBound) {slideList[index] = upperBound}
    
    for (i = lowerBound; i < upperBound + 1; i++) {
        slides[i].style.display = "none";
    }

    slides[slideList[index]].style.display = "block";

} 