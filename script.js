const ratingPage = document.querySelector('.rating')
const thanksPage = document.querySelector('#thanks')
const rateButton = document.querySelectorAll('.style');
const submit = document.querySelector('.submit')
const final = document.querySelector('#number')
let rating = 0;

for(let i = 0; i<rateButton.length; i++) {
rateButton[i].addEventListener('click', function(){
    rateButton.forEach(button => {button.classList.remove('active')})
    rateButton[i].classList.toggle('active')

    rating = rateButton[i].innerText;
    
})
}

submit.addEventListener('click', function(){
    if(rating !== 0){
    ratingPage.classList.add('changepage')
    thanksPage.classList.remove('thanks')
    }else{
        alert("Please select a   rating.")
    }

    final.innerText = rating;
})