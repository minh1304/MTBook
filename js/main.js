document.addEventListener("DOMContentLoaded",function(){
    var trangthai = "duoi150";
    var menu = document.querySelector('.navbar');
    var nut = document.querySelector('.pushdy-widget-button.pd-tel');
    var nut2 = document.querySelector('.pushdy-widget-button.pd-mail');
    var noidunghienlen = document.querySelector('.pd-overlay');
    var noidunghienlen2 = document.getElementById('pd-popupMail-container');
    var tatnoidung = document.querySelectorAll('.pd-close-tawk');
    var nutt = document.querySelectorAll('.pushdy-widget-button');
    console.log(nutt);
    var ndhl= document.querySelectorAll('.pd-overlay');
    console.log(ndhl);

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
   



},false)