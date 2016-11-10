$(document).ready(function() {
    $('.show-image').click(function(){

        $('.modal-body').empty();
        var title = $(this).parent('a').attr("title");
        $('.modal-title').html(title);
        $($(this).parent('div').parent('div').html()).appendTo('.modal-body');
        $('#myModal').modal({show:true});
    });
});

$(".navbar-nav li a").on('click', function(){
    $(".navbar-collapse").collapse('hide');
    alert("Test");//bootstrap 3.x by Richard
});

   $('li > a').click(function() {
        $('li').removeClass();
        $(this).parent().addClass('active');
    });




$('.nav .navbar-toggle').on('click', function(){
    $('.navbar-toggle').click();
    alert("Test");//bootstrap 3.x by Richard
});



