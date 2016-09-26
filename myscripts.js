var $ = function (id) {
    return document.getElementById(id);
}

var timer;
var currentSlide = 0;
var image = new Image();// creates an image object


// declaring arrays
var images = ["images/fence.jpg","images/fountain.jpg", "images/gazebo.jpg","images/lexi.jpg", "images/school.jpg","images/sky.jpg","images/tombydam.jpg","images/tomsleeping.jpg","images/treeline.jpg","images/yellow_flowers.jpg"];
var titles = ["Rustic Country Fence","Naturally Framed Fountain", "Looking Up", "My Fur-Baby!", "Inviting Corridor", "Lovely Sky", "A day at the dam", "Is he really sleeping?", "Line and Form Project", "This says it is summertime"];
var captions = ["This lovely scene was found at the entrance to Morraine Hills State Park in McHenry.", "The fountain is framed by a pine tree. Located nearby in my subdivision.","A pleasant surprise when looking up at the ceiling of a gazebo.","Lexi is anything but ordinary. I am so lucky that she picked me to be her mom.", "This is the corridor by Registration at MCC. So bright and expansive. Very welcoming.", "Blue sky and fluffy white clouds.  What a beautiful summer day.", "A nice shot of my friend Tom, sitting by the McHenry Dam.", "My friend Tom being cute and pretending to be sleeping.  Or, maybe he really is?", "This shot was to capture line and form.", "Just some pretty summertime flowers.  I have a soft spot in my soul for flowers."];

var count = images.length;// will change if we add more items to the image array

// preloading the images for the slide show
var preload = function()
{
    for (var i=0; i< count; i++)
    {
        image.src = images[i];
        images.push(image);
    }
}



//changing the play / pause settings
var slidecontrol = function ()
{
    var path=$("control").src;
    //alert (path);
    var testState = new RegExp("play");
    if(testState.test(path))
    {
        $("control").src = "images/pause.png";
        displayImage();
    }
    else
    {
        $("control").src = "images/play.png";
        clearTimeout(timer);
    }

}


var displayImage = function()
{
    if (currentSlide > 9)
    {
        currentSlide = 0;
    }
    $("main_image").src = images[currentSlide];
    $("title").innerHTML =titles[currentSlide];
    $("caption").innerHTML =captions[currentSlide];

    currentSlide++;
    timer = setTimeout(displayImage, 5000);
}




window.onload = function()
{
    preload();

}