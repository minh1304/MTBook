document.addEventListener("DOMContentLoaded",function(){
    var trangthai = "duoi150";
    var menu = document.querySelector('.navbar');
    var nut = document.querySelector('.pushdy-widget-button.pd-tel');
    var nut2 = document.querySelector('.pushdy-widget-button.pd-mail');
    var noidunghienlen = document.querySelector('.pd-overlay');
    var noidunghienlen2 = document.getElementById('pd-popupMail-container');
    var tatnoidung = document.querySelectorAll('.pd-close-tawk');
    var nutt = document.querySelectorAll('.pushdy-widget-button');
    var ndhl= document.querySelectorAll('.pd-overlay');

    var test0 = document.querySelector('.pushdy-widget-button.pd-tel');
    var test = document.querySelector('.pd-label.pd-tel.pd-tooltip-text');
    var test1 = document.querySelector('.pushdy-widget-button.pd-mail');
    var test2 = document.querySelector('.pd-label.pd-mail.pd-tooltip-text');
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

    //Hiện nội dung thanh bên phải (tel vs amil)

    nutt[0].addEventListener('click', () =>{
        ndhl[0].style.display = 'block';
    })
    nutt[1].addEventListener('click',()=>{
        ndhl[1].style.display = 'block';
    })
    tatnoidung[0].onclick = () =>{
        noidunghienlen.style.display = 'none';
    }
    tatnoidung[1].onclick = () =>{
        noidunghienlen2.style.display = 'none';
    }
    
    test0.onmouseover = function(){
        test.classList.add('test1');
    };
    test0.onmouseout = function(){
        test.classList.remove('test1');
    };
    test1.onmouseover = function(){
        test2.classList.add('test1');
    };
    test1.onmouseout = function(){
        test2.classList.remove('test1');
    };







},false)