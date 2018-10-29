var SiteContent=function(){};

SiteContent.prototype.init=function(){
  var json=this.getContent();
  var compartments=Object.keys(json);
  for(c in compartments){
    var div=$("#"+compartments[c]);
    for(e in json[compartments[c]]){
      div.append(json[compartments[c]][e]);
    }
  }
}
SiteContent.prototype.flatten=function(obj){
  if(typeof(obj)=="object"){
    var s=$("<span>");
    s.append(obj);
    obj=s.html();
  }
  return obj;
}

SiteContent.prototype.mediaIcon=function(name,icon,link){
  return $("<a href=\""+link+"\" title=\""+name+"\" target=\"_blank\">"+
  "<img class=\"icon\" src=\"res/icons/"+icon+"\"></a>");
}
SiteContent.prototype.browserIcon=function(name,icon){
  return $("<img class=\"browser\" title=\""+name+"\" src=\"res/icons/"+icon+"\">");
}
SiteContent.prototype.twoColumns=function(first,second){
  this.flatten(first);
  this.flatten(second);
  return $("<div class=\"row\">"+
    "<div class=\"col-md-6\">"+first+"</div>"+
    "<div class=\"col-md-6\">"+second+"</div></div>");
}
SiteContent.prototype.bulleted=function(items){
  var text="";
  for(i in items){
    text+="• "+this.flatten(items[i])+"<br>";
  }
  return text;
}
SiteContent.prototype.link=function(name,href){
  return $("<a href=\""+href+"\" target=\"_blank\">"+name+"</a>");
}
SiteContent.prototype.heading=function(text){
  return $("<div class=\"row heading\">"+text+"</div>");
}
SiteContent.prototype.br=function(){
  return $("<br>");
}
