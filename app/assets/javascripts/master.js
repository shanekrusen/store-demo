
$(document).ready(function() {
    $('.remove').click(function() {
        var order = $.parseJSON( Cookies.get("order") );
        var index = $(event.target).attr('id')
        order.splice(index, 1);
        var new_order = JSON.stringify( order );
        Cookies.set('order', new_order, { expires: 0.042 });
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

// $(document).ready(function(){
// 	$('.items-box').hide();
// 	$('.cat-dropdown').click(function(){
// 		$(this).find('.items-box').slideToggle();
// 	});
// 	$('.item').click(function(){
// 		location.href = ('/order_cookies/add_to_order?item=' + ($(this).text()) )
// 	});
// });

// var acc = document.getElementsByClassName("accordion"); //Grab accordion elements
// var i;
// //Run this code for each element
// for (i = 0; i < acc.length; i++) {
//   acc[i].onclick = function () {
//     // Toggle active class to select button that controls panel
//     this.classList.toggle("active");
    
//     /* Toggle hiding and showing active panel. If at max height, close by removing height. Otherwise, scroll to max height */
//     var panel = this.nextElementSibling; // panel is sibling to accordion
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";  
//     }
//   }
// }
