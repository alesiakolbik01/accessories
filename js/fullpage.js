/*slider main page*/

 $(document).ready(function() {
     $('#fullpage').fullpage();
 });

/*buttons main page*/
$(document).on('click', '#move-to-top', function(){
    $.fn.fullpage.moveTo('#sec0');
});

$(document).on('click', '#move-to-crowns-down', function(){
    $.fn.fullpage.moveSectionDown();
});
$(document).on('click', '#move-to-hoops-down', function(){
    $.fn.fullpage.moveSectionDown();
});
$(document).on('click', '#move-to-brooches-down', function(){
    $.fn.fullpage.moveSectionDown();
});
$(document).on('click', '#move-to-tassels-down', function(){
    $.fn.fullpage.moveSectionDown();
});
$(document).on('click', '#move-to-crowns-up', function(){
    $.fn.fullpage.moveSectionUp();
});
$(document).on('click', '#move-to-hoops-up', function(){
    $.fn.fullpage.moveSectionUp();
});



