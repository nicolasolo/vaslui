$(function () {
  $('meta[name*=":title"]').attr('id','1') 
  $('link[media="all"]')
    .after('<link rel="stylesheet" href="css/phone.min.css" media="2">')
  showViewPortSize(true);
isDocumentInFullScreenMode(true)
$(window).on('mousewheel', function(e) {
  e.prevetDefault();
  
})
  
});
function isDocumentInFullScreenMode() {
    return document.fullscreen;
  }
function showViewPortSize(display) {
  if (display) {
    var height = window.innerHeight;
    var width = window.innerWidth;
    styleSheet();
    $('body')
      .prepend('<div id="viewportsize" style="z-index:9999;position:fixed;bottom:0px;left:0px;color:#fff;background:#000;padding:10px">Height: ' + height + '<br>Width: ' + width + '</div>');
    $(window)
      .resize(function () {
        styleSheet();
        height = window.innerHeight;
        width = window.innerWidth;
        $('#viewportsize')
          .html('Height: ' + height + '<br>Width: ' + width);
      });
  }
}

function styleSheet() {
  if (window.matchMedia("(max-width: 500px)").matches) {
    /* the viewport is less than or exactly 500 pixels wide */
    console.log('500px');
    $('link[media="2"]')
      .removeAttr('href')
      .attr('href','css/phone.min.css');
  }
  else if (window.matchMedia("(max-width: 640px)").matches) {
    /* the viewport is less than or exactly 500 pixels wide */
    console.log('640px');
    $('link[media="2"]')
      .removeAttr('href')
      .attr('href','css/tablet.min.css');

  }
  else {
    /* the viewport is more than 500 pixels wide */
    console.log('else than 500px');
    $('link[media="2"]')
      .removeAttr('href');
  }
}

