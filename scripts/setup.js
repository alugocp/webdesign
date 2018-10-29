$(window).resize(function(){
  // bottom graffiti
  $("#bottom").css("top",$("#content").offset().top+$("#content").height()+100);

  // compartment heading backgrounds
  $(".heading").each(function(){
    var yOff=-325+$(this).height();
    $(this).css("background-position","-500px "+yOff+"px");
  });
});

$(document).ready(function(){
  // sidebar positioning
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

  // site content
  var content=new SiteContent();
  content.init();

  // sidebar content
  var span=$("<div></div>");
  $(".heading").each(function(i){
    var h=$(this);
    span.append($("<a href=\"#"+h.parent().attr("id")+"\">"+h.text()+"</a>"));
    if(i!=$(".heading").length-1){
      span.append("<hr>");
    }
  });
  $(".mid").html(span.html());
  $(".mid").css("--content-height",$(".mid").outerHeight());

  $(window).trigger("resize");
});
