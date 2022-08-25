document.addEventListener("DOMContentLoaded",function(){
    var trangthai = "duoi150";
    var menu = document.querySelector('.navbar');
    var nut = document.querySelector('.pushdy-widget-button.pd-tel');
    var nut2 = document.querySelector('.pushdy-widget-button.pd-mail');
    var noidunghienlen = document.querySelector('.pd-overlay');
    console.log(noidunghienlen);
    var noidunghienlen2 = document.getElementById('pd-popupMail-container');
    console.log(noidunghienlen2);

    var tatnoidung = document.querySelectorAll('.pd-close-tawk');
    console.log(tatnoidung);


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
        console.log('nut1 ne');
        noidunghienlen.style.display = 'block';
    });
    nut2.addEventListener('click',function(){
        console.log('nut2 ne');
        noidunghienlen2.style.display = 'block';
    });

    // if(noidunghienlen.style.display == 'block')
    // {

    //     tatnoidung[0].onclick = function() {
    //         noidunghienlen.style.display = 'none';
        
    //     }
    // }
    // else if(noidunghienlen2.style.display == 'block') {
    //     tatnoidung[1].onclick = function() {
    //         noidunghienlen.style.display = 'none';

    //     }
    // }
    tatnoidung[0].onclick = function() {
        noidunghienlen.style.display = 'none';
    }
    tatnoidung[1].onclick = function() {
        noidunghienlen2.style.display = 'none';
    }




},false)