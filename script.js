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
            lower.style.display = 'none';
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

    if(isFriend){

        heart.style.transform = 'translate(-50%,-50%) scale(1.3)';
        
        setTimeout(()=>{
            heart.style.transform = 'translate(-50%,-50%) scale(1)';
            heartFillonDoubleTap();
        },300)
        setTimeout(()=>{
            heart.style.transform = 'translate(-50%,-50%) scale(1.3)';
            heartFillonDoubleTap();
        },500)
        setTimeout(()=>{
            heart.style.transform = 'translate(-50%,-50%) scale(0)';
            heartFillonDoubleTap();
        },1000)
    }
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


