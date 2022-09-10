const countBtn = document.querySelector("#countBtn");
const countDisplay = document.querySelector("#count");
let countClick = 0;

const titleList = document.querySelector(".title");
const contentList = document.querySelector(".content");

countBtn.addEventListener('click', function(){
    countClick++;
    countDisplay.innerHTML = 'Count: ' + countClick;
})

titleList.forEach(function() {
    
});