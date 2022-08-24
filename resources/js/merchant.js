const sellerinfoLink = document.getElementById('sellerinfo-link');
sellerinfoLink.addEventListener('click', sellerinfoPage);

function sellerinfoPage (e){
    window.open('../../sellerinfo.html', '_blank');
    e.preventDefault();
}
