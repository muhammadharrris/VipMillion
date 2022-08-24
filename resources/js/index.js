const merchantLink = document.getElementById('merchant-link');
merchantLink.addEventListener('click', merchantPage);

function merchantPage (e){
    console.log('Merchant page');
    // window.location.href="../../merchant.html";
    window.open('../../merchant.html', '_blank');

}

const hideOffset = document.getElementById('hide-offset').style.display;
hideOffset.style.display = 'none';

const myTopNav = document.getElementById('myTopnav')
