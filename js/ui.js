$(document).ready(function(){
  $('.right.menu.open').on("click",function(e){
    e.preventDefault();
    $('.ui.vertical.menu').toggle();
  });
    
  $('.ui.dropdown').dropdown();
	$('.ui.sticky')
	  .sticky({
	    context: '#example1'
	  })
	;
});
