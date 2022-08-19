document.addEventListener("DOMContentLoaded",function(){
    var trangthai = "duoi150";
    var menu = document.querySelector('.navbar');
    var hienbang1 = document.querySelector('._1khoi .tel .icon img.icontel');
    var hienbang2 = document.querySelector('._1khoi .tel .icon img.iconemail');
    var bang1 = document.querySelector('.bang1');
    var bang2 = document.querySelector('.bang2');
    var closebang1 = document.querySelector('.bang1 .nutclose1');
    var closebang2 = document.querySelector('.bang2 .nutclose2');

    var thongtin = document.getElementById('name');
    var test = document.getElementById('test');
    console.log(test);



    // var test = document.querySelector('body');


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

    hienbang1.onclick = function() {
        bang2.classList.remove('hienbang');
        bang1.classList.add('hienbang');



    };
    hienbang2.onclick = function() {
        // test2.classList.add('black');
        bang1.classList.remove('hienbang');
        bang2.classList.add('hienbang');



    };
    closebang1.onclick = function (){ 
        bang1.classList.remove('hienbang');
        // test.classList.remove('black');

    };
    closebang2.onclick = function (){ 
        bang2.classList.remove('hienbang');

    };

    test.onclick() = function() {
        if (thongtin.value =="") {
            console.log("chua nhap");
        }
        else {thongtin.value != "" }
        {
            console.log("nhap roi");
        }

    }




},false)