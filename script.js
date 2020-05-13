const form = document.querySelector('#message-form');
const btn = document.querySelector('#submitBtn');
const messageWrap = document.querySelector('#message');
const feedbackwrap = document.querySelector('.feedback');
const display = document.querySelector('.message-content');

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(messageWrap.value === ''){
        feedbackwrap.classList.add('show');
        setTimeout(function(){
            feedbackwrap.classList.remove('show');
        },1000);
    } else {
        display.textContent = messageWrap.value;
    }
});