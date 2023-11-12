let btn = document.querySelector('.btn button');
let rotateCircle = document.querySelector('.rotateCircle');
let heart = document.querySelector('.heart');
let lower = document.querySelector('.lower');
let card = document.getElementById('card');
let heartFill = document.querySelector('.heartFill');

let isFriend = false;
let isHeartFilled = false;


btn.addEventListener('click',addFriend);

function addFriend(){
    btn.innerHTML = '';
    rotateCircle.style.display = 'block';

    if(isFriend){
        isFriend = false;
        setTimeout(()=>{
            btn.classList.add('flex');
            rotateCircle.style.display = 'none';
            btn.innerHTML = 'Add Friend +';
            lower.style.display = 'none'
        },2000)

    }else{
        isFriend = true
        setTimeout(()=>{
            btn.classList.add('flex');
            rotateCircle.style.display = 'none';
            btn.innerHTML = 'Friend Added';
            btn.style.opacity = 0.5;
        },2000)
    
        setTimeout(()=>{
            btn.style.opacity = 1;
            btn.innerHTML = 'Remove Friend';
            lower.style.display = 'flex'
        },4000)
    }

}

card.addEventListener('dblclick',function(){
    heart.style.visibility = 'visible';
    heart.style.width = '75px';
    setTimeout(()=>{
        heart.style.width = '55px';
        heartFillonDoubleTap();
    },200)
    setTimeout(()=>{
        heart.style.width = '80px';
    },350)
    setTimeout(()=>{
        heart.style.visibility = 'hidden';
    },800)
    setTimeout(()=>{
        heart.style.width = '60px';
    },1200)
})

heartFill.addEventListener('click',onHeartTap);

function heartFillonDoubleTap(){
    isHeartFilled = true;
    heartFill.src = 'heart-solid.svg';

}

function onHeartTap(){
    if(isHeartFilled){
        heartFill.src = 'heart-regular.svg';
        isHeartFilled = false;
    }else{
        heartFillonDoubleTap();
    }
}


