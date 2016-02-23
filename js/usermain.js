$('.videos').on("click", "div", function() {
  $(this).remove();
  // var xPos = window.screenX;
  // var yPos = window.screenY;
  // if(xPos < 10px || xPos > 90px) {
  //   $(this).remove(this);
  // };
  // if(yPos < 10px || yPos > 90px) {
  //   $(this).remove(this);
  // };
  // $(this).remove();
  console.log(this.node);
  console.log('hello');
  console.log(this);
});
