document.addEventListener("DOMContentLoaded",function(){
    var trangthai = "duoi150";
    var menu = document.querySelector('.navbar');
    var hienbang = document.querySelector('._1khoi .tel .icon img');

    var bang = document.querySelector('.bang');
    var closebang = document.querySelector('.bang .nutclose');
    var test = document.querySelector('body');


    window.addEventListener('scroll',function(){
        if(this.window.pageYOffset >150)
        {
            if(trangthai = "duoi150")
            {
                trangthai = "tren150";
                menu.classList.add('giunguyen')

            }
        }
        else if(window.pageYOffset <=150)
        {
            if(trangthai="tren150")
            {
                menu.classList.remove('giunguyen');
                trangthai="duoi150";
            }
        }
    })

    hienbang.onclick = function() {
        // test2.classList.add('black');
        bang.classList.add('hienbang1');
        test.classList.add('black');
        // bang.classList.remove('black');

    };
    closebang.onclick = function (){ 
        bang.classList.remove('hienbang1');
        test.classList.remove('black');

    };



},false)