const revealBtn = document.querySelector('.searchButton');
const hiddenContent = document.querySelector('.content img')
//click action
function revealContent() {
    if(hiddenContent.classList.contains('revealBtn')
    ){
        hiddenContent.classList.remove('revealBtn');
        console.log("true");
    }
    else{
        hiddenContent.classList.add('revealBtn');
        console.log("false");
    }
}

revealBtn.addEventListener('click',revealContent);


