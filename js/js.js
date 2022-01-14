


// document.getElementById("dislike").addEventListener('click', Unactive);
//
// function Unactive(event){
//     event.preventDefault();
// }
//
//


document.addEventListener('DOMContentLoaded', function(){

    $(document).ready(function (e) {


        $('.sidenav').sidenav({
            edge: 'left'
        });
        $('.parallax').parallax();
        $('.carousel').carousel();
        $('.tabs').tabs();
    })

    const tagA = document.querySelectorAll("a");
    console.log(tagA);


    addEventListener('click',(e) =>{
        e.preventDefault();
    })


})



// const tagA = document.querySelectorAll("a");
// console.log(tagA);
//
//
// addEventListener('click',(e) =>{
//     e.preventDefault();
// })
//
//
//
//
// $(document).ready(function (e) {
//
//
//     $('.sidenav').sidenav({
//         edge: 'left'
//     });
//     $('.parallax').parallax();
//     $('.carousel').carousel();
//     $('.tabs').tabs();
// })



