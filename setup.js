$(window).resize(function(){
  // Bottom graffiti
  $("#bottom").css("top",$("#content").offset().top+$("#content").height()+100);

  // Compartment heading backgrounds
  $(".heading").each(function(){
    var yOff=-325+$(this).height();
    $(this).css("background-position","-500px "+yOff+"px");
  });
});

$(document).ready(function(){
  // Sidebar positioning
  $(".side .button").click(function(){
    $(".side .button").attr("lock",function(){
      return $(".side .button").attr("lock")=="true"?"false":"true";
    });
  });
  $(".side").mouseenter(function(){
    $(".side").removeClass("closed");
  });
  $("#content").mouseenter(function(){
    if($(".side .button").attr("lock")=="false"){
      $(".side").addClass("closed");
    }
  });
  $("#content").mouseleave(function(e){
    if(e.pageX<$("#content").offset().left+100){
      if($(".side .button").attr("lock")=="false"){
        $(".side").removeClass("closed");
      }
    }
  });

  // Sidebar content
  $(".mid a").each(function(){
    const target=$(this).attr("target");
    $(this).click(function(){
      $("html,body").animate({scrollTop:$(target).offset().top-50},250);
    });
  });
  $(".mid").css("--content-height",$(".mid").outerHeight());

  $(window).trigger("resize");
});
