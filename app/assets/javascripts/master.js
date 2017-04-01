$(document).ready(function() {
    $('.remove').click(function() {
        var order = $.parseJSON( Cookies.get("order") );
        var index = order.indexOf( $(this).parent().find('h3') );
        if ( index > -1 ) {
            order.splice(index, 1);
        } else if ( index === -1 ) {
            order.pop();
        };
        var new_order = JSON.stringify( order );
        Cookies.set('order', new_order);
        location.reload();
    });
});

//Navbar jquery/javascript

$(document).ready(function(){
 $('.burgerbar').hide();
 $('.navbar-burger').click(function(){
 	$('.burgerbar').slideToggle();
 });
 $(".notice, .alert").click(function() {
 	$(event.target).slideToggle();
 });
  if (!document.cookie) {
  	location.href = '/order_cookies/new_order';
  }
  $('.delete_order').click(function() {
  	location.href = '/order_cookies/delete_order';
  });
});

//Category Dropdown Code

$(document).ready(function(){
	$('.items-box').hide();
	$('.cat-dropdown').click(function(){
		$(this).find('.items-box').slideToggle();
	});
	$('.item').click(function(){
		location.href = ('/order_cookies/add_to_order?item=' + ($(this).text()) )
	});
});