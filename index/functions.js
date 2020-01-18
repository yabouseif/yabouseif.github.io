
var images = new Array();
images[0] = "index/2.jpg";
images[1] = "index/1.jpg";
images[2] = "index/3.png";
images[3] = "index/4.jpg";



images.onclick = function() {
    window.location.href = 'http://google.com/';
};


var index = 1;
function rotateImage()
{
  $('#myImage').fadeOut('fast', function()
  {
    $(this).attr('src', images[index]);
 
    $(this).fadeIn('fast', function()
    {
      if (index == images.length-1)
      {
        index = 0;
      }
      else
      {
        index++;
      }
    });
  });
}
 
$(document).ready(function()
{
  setInterval (rotateImage, 2500);
});

function rotateLinks()
{
  $('#myLink').fadeOut('fast', function()
  {
    $(this).attr('href', links[index]);
 
    $(this).fadeIn('fast', function()
    {
      if (index == links.length-1)
      {
        index = 0;
      }
      else
      {
        index++;
      }
    });
  });
}
 
$(document).ready(function()
{
  setInterval (rotateLinks, 2500);
});


