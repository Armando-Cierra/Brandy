$(document).ready(function () {
    let btnMenu = $('#btn-menu');
    let boxMenu = $('#box-menu');
    let menu = $('#box');

    btnMenu.click(action);
    $(document).click(identify);
    $(document).keyup(letra);

    function action(){
        boxMenu.css({'display':'flex'});
        if(boxMenu.hasClass('show')){
            enter();
        } else {
            out();
        }
    }

    function letra(item){
        if(item.keyCode === 27){
            out();
        }
    }

    function identify(item){
        let obj = item.target;
        if(obj.id == 'salida' || obj.id == 'box-menu' || obj.className == 'link'){
            out();
        }
    }

    function enter(){
        boxMenu.removeClass('show');
        boxMenu.addClass('hide');

        setTimeout(()=>{
            boxMenu.css({'opacity':'1'});
            setTimeout(()=>{
                menu.css({'margin-right': 0});
            }, 150)
        }, 10)
    }

    function out(){
        boxMenu.removeClass('hide');
        boxMenu.addClass('show');

        menu.css({'margin-right':'-100%'})
        setTimeout(()=>{
            boxMenu.css({'opacity':'0'})
            setTimeout(()=>{
                boxMenu.css({'display':'none'});
            }, 300)
        }, 200)
    }
});