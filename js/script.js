$(function () {
    // header starts


    let ul = document.querySelector("ul");
    let imgNone = document.querySelector(".img-none");
    let xDn = document.querySelector(".x-dn");
    let body = document.querySelector("body");



    imgNone.addEventListener(`click` , toggleNav);
    xDn.addEventListener(`click` , toggleNav)
    function toggleNav(){
        ul.classList.toggle("toggle-nav");
        body.classList.toggle("overflow-hidden");
        xDn.classList.toggle("toggle-nav");
    }
    function toggleNav(){
        ul.classList.toggle("toggle-nav");
        body.classList.toggle("overflow-hidden");
        xDn.classList.toggle("toggle-nav");
    }

    // header ends



    // section starts

    // section one starts


    let tabsa = document.querySelectorAll(".tabsa");
    let letters = document.querySelectorAll(".letters");

    tabsa.forEach(item => {
        item.addEventListener("click" , (e) => {
            let index = indexC(e.currentTarget , tabsa);
            tabsaWork(index);
        });
    });

    function tabsaWork(indx){
        for(let i = 0; i < tabsa.length; i++){
            if(i == indx){
                tabsa[i].classList.add("clicked");
                letters[i].classList.add("letters-active");
            }else{
                tabsa[i].classList.remove("clicked");
                letters[i].classList.remove("letters-active");
            }
        }
    }





    // preventing  images from being saved 

    $(".img-s-o , .img-1-s-t , .img-2-s-t , .img-1-s-th , .little-icons-s-f , .face-s-s , .img-footer").on("mousedown" , function(e){
        e.preventDefault();
    });
    $(".img-s-o , .img-1-s-t , .img-2-s-t , .img-1-s-th , .little-icons-s-f , .face-s-s , .img-footer").on("contextmenu" , function(e){
        e.preventDefault();
    });


    // section five starts



    let options = document.querySelectorAll(".options-s-fv");
    let orange = document.querySelectorAll(".orange");
    let h3 = document.querySelectorAll(".h3-1-s-fv");

    options.forEach(item => {
        item.addEventListener("click" , e =>{
            let index = indexC(e.currentTarget , options);
            optionsWork(index);
        });
    });

    function optionsWork(index){
        for(let i = 0; i < options.length; i++){
            if(i === index){
                options[i].classList.add("options-active-s-fv");
                orange[i].classList.add("orange-active-s-fv");
                h3[i].classList.add("active-s-fv");
            }else{
                options[i].classList.remove("options-active-s-fv");
                orange[i].classList.remove("orange-active-s-fv");
                h3[i].classList.remove("active-s-fv"); 
            }
        };
    };




    function indexC(el , collection){
        for(let i = 0; i < collection.length; i++){
            if(el == collection[i]) return i;
        };
    };






});







