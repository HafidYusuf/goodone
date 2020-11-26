var rect = $('#scene')[0].getBoundingClientRect();
var mouse = {x: 0, y: 0, moved: false};

$("#scene").mousemove(function(e) {
  mouse.moved = true;
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});
 
// Ticker event will be called on every frame
TweenLite.ticker.addEventListener('tick', function(){
  if (mouse.moved){    
    parallaxIt(".one", -10);
    parallaxIt(".two", -30);
    parallaxIt(".three", -80);
  }
  mouse.moved = false;
});

function parallaxIt(target, movement) {
  TweenMax.to(target, 0.5, {
    x: (mouse.x - rect.width / 2) / rect.width * movement,
    y: (mouse.y - rect.height / 2) / rect.height * movement
  });
}

$(window).on('resize scroll', function(){
  rect = $('#scene')[0].getBoundingClientRect();
});


//full page nav
$(".hamburger").click(function() {
  $(".hidden-nav").addClass("showup");
});
$(".close").click(function() {
  $(".hidden-nav").removeClass("showup");
})