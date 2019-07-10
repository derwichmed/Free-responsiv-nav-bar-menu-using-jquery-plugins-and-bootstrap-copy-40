$(function (){
    $('.drop_down').mouseover(function (){
       $('.drop_down .drop_down_menu:visible').hide();
       $(this).find('.drop_down_menu').show();
    });
    
    $('body > header .nav_two .nav_bar .nav_bar_item').mouseover(function (){
       $('body > header .nav_thwo .nav_bar .nav_bar_item > div > .sub_menu:visible').hide();
       $(this).find('> div > .sub_menu').show();
       
       $('body > header .nav_two .nav_bar .nav_bar_item .mega_menu:visible').hide();
       $(this).find('.mega_menu').show();
   });
   
   $('body > header .nav_three .nav_bar .nav_bar_item').mouseover(function (){
       $('body > header .nav_three .nav_bar .nav_bar_item .sub_menu:visible').hide();
       $(this).find('.sub_menu').show();
   });
   
   $('#nav_two_icon').click(function (){
      $('#mobile_nav_effect').show();
      $('body > header .nav_two').fadeIn("slow");
   });
   
   $('#nav_three_icon').click(function (){
      $('#mobile_nav_effect').show();
      $('body > header .nav_three').fadeIn("slow");
   });
   
   $('#mobile_nav_effect').click(function (){
      $('body > header .nav_three').fadeOut("slow");
      $('body > header .nav_two').fadeOut("slow");
      $('#mobile_nav_effect').hide();
   });
   
   $('.body').mouseover(function (){
       $('.drop_down .drop_down_menu:visible').hide();
       $('body > header .nav_three .nav_bar .nav_bar_item .sub_menu:visible').hide();
       $('body > header .nav_two .nav_bar .nav_bar_item .mega_menu:visible').hide();
   });
});
