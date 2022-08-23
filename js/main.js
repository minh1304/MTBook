document.addEventListener("DOMContentLoaded",function(){
    var trangthai = "duoi150";
    var menu = document.querySelector('.navbar');
    var nut = document.querySelector('.pushdy-widget-button.pd-tel');
    var noidunghienlen = document.querySelector('.pd-overlay');
    console.log(noidunghienlen);

    var tatnoidung = document.querySelector('.pd-close-tawk');


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


    nut.addEventListener('click',function(){
        console.log('ahihi');
        noidunghienlen.style.display = 'block';



    });
    tatnoidung.onclick = function() {
        noidunghienlen.style.display = 'none';

    }

},false)