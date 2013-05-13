var imgArr=new Array('../images/baos.jpg','../images/soup.jpg');
var preloadArr = new Array();
var i;

for(i=0; i < imgArr.length; i++){
    preloadArr[i] = new Image();
    preloadArr[i].src = imgArr[i];
}

var currImg = 1;
var intID = setInterval(changeImg, 6000);
 
/* image rotator */
function changeImg(){
 $('#mast-head').animate({opacity: 0}, 1000, function(){
 $(this).css('background','url(' + preloadArr[currImg++%preloadArr.length].src +') top center no-repeat');
 }).animate({opacity: 1}, 1000);
}