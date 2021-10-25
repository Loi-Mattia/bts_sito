
$(document).ready(function(){

    $(".w1 .dropdown-item").on("click", function(event){
       
        var damage = $(event.target).attr("damage");
        var price = $(event.target).attr("price");
        var image = $(event.target).attr("image");
        var story = $(event.target).attr("story");

        $("#w1p").html(price + "VP")
        $("#w1d").html(damage)
        $("#w1t").html("<h2>" + event.target.text + "</h2><hr>" + story )
        $("#w1i").attr("src",image);
    });

    $(".w2 .dropdown-item").on("click", function(event){
       
        var damage = $(event.target).attr("damage");
        var price = $(event.target).attr("price");
        var image = $(event.target).attr("image");
        var story = $(event.target).attr("story");

        $("#w2p").html(price + "VP")
        $("#w2d").html(damage)
        $("#w2t").html("<h2>" + event.target.text + "</h2><hr>" + story )
        $("#w2i").attr("src",image);
    });


  });