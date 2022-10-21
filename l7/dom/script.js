$(function(){

    $('#menu-toggle').on('click', function(){
        
        if( !$('.off-canvas-menu').hasClass('open') ){

            $('.off-canvas-menu').addClass('open').animate({
                left:30
            },300).animate({
                left:0
            },100)

        }else{

            $('.off-canvas-menu').removeClass('open').animate({
                left:-300
            },300)

        }
        
    })

    $('#close-menu-toggle').on('click', function(){
        
        $('.off-canvas-menu').animate({
            left:-300
        },300)
        
    })


    $(document).on('scroll',function(){
        let top = $(window).scrollTop()
        console.log(top)
    })

})