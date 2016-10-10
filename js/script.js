$(function(){
var gambar_smt;

function setImg(src, id) {
  $(".main").attr("src",src);
  var path = "text/"+id+".txt";
  $.get(path,function(data){
    $("#text-pict p").html(data);
  });
}

  $("#portfolio img").click(function(){
    var src = $(this).attr("src");
    var id = $(this).attr("id");
    gambar_smt = $(this).parent();
    setImg(src, id);
    $("#frame").fadeIn("slow");
    $("#overlay").fadeIn("fast");
  });

  $("#overlay").click(function(){
    $("#frame").fadeOut();
    $(this).toggle();
  });

  $(".next").click(function() {
    if (gambar_smt.is(":last-child")){
      var li_berikut = $("#portfolio li").first();
    }else{
      var li_berikut = gambar_smt.next();
    }

    var dapat_src = li_berikut.children("img").attr("src");
    var dapat_id = li_berikut.children("img").attr("id");
    setImg(dapat_src, dapat_id);
    $("#frame").fadeIn("slow");
    $("#overlay").fadeIn("fast");
    gambar_smt = li_berikut;
  });

  $(".prev").click(function(){
    if(gambar_smt.is(":first-child")){
      var li_sebelum = $("#portfolio li").last();
    }else{
      var li_sebelum = gambar_smt.prev();
    }
    var src_dapat = li_sebelum.children("img").attr("src");
    var id_dapat = li_sebelum.children("img").attr("id");
    setImg(src_dapat, id_dapat);
    $("#frame").fadeIn("slow");
    $("#overlay").fadeIn("fast");
    gambar_smt = li_sebelum;
  });

  $(".prev, .next").mouseover(function(){
    $(this).css("opacity", "0.85");
  });
  $(".prev, .next").mouseleave(function(){
    $(this).css("opacity", "0.5");
  });
});