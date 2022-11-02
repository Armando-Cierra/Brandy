$(document).ready(function () {
    //Iniciación de posiciones
    setTimeout(()=>{
        $('.work-item .info').css({'display':'flex'})
    $('.work-item .info').slideUp('fast');
    }, 10)

    //Efecto slideup y down con toggle
    btnCover = $('.work-item .cover .content button');
    btnCover.click(function(){
        var idNumber = $(this).attr('data-id');
        var id = 'info'+idNumber;
        
        $('#'+id).slideToggle();

        if($(this).hasClass('show')){
            $(this).removeClass('show');
            $(this).addClass('hide');
            $(this).text('See Less');
        } else {
            $(this).removeClass('hide');
            $(this).addClass('show');
            $(this).text('See More');
        }
    });
});