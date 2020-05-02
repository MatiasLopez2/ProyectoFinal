$(document).ready(function(){
    $("#myCarousel").carousel();

    $(".prev-slide").click(function(){
        $("#myCarousel").carousel('prev');
    });

    $(".next-slide").click(function(){
        $("#myCarousel").carousel('next');
    });

    $('#blogCarousel').carousel({
        interval: 5000
    });
});





