document.addEventListener("DOMContentLoaded",function(){
    var  scrollButton = document.getElementById('scrollButton');
    scrollButton.addEventListener('click',function() {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    })
})