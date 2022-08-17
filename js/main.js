document.addEventListener("DOMContentLoaded",function(){
    var trangthai = "duoi150";
    var menu = document.querySelector('.navbar');
    var hienbang = document.querySelector('._1khoi .tel .icon img');
    var bang = document.querySelector('.bang');

    console.log(hienbang);

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
        bang.classList.add('hienbang1');

    }



},false)