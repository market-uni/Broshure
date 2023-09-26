const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () =>{
        faq.classList.toggle("active");
    });
});


jQuery('document').ready(function($){

var menuBtn = $('.menu-icon'),
    menu = $('.navigation ul');

menuBtn.click(function() {

    if(menu.hasClass('show')){
        menu.removeClass('show');
    }
    else{
        menu.addClass('show');
    }
    

    });
});

