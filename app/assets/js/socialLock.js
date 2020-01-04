



function socialLock() {
    var btnRemoveShare = document.getElementById('btnRemove-share');
    btnRemoveShare.onclick = removeShare;

    var shareLinks = document.getElementsByClassName('mini-sharePage--wrap');
    for (i = 0; i < shareLinks.length; i++) {
        shareLinks[i].onclick = popUp;
    }
}

function popUp(j) {
    window.open(j.target.value, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
    removeShare();
}

function removeShare() {
    var t = document.querySelector('#productrow'), td = t.content.querySelectorAll("p");
    var sectionShare = document.getElementById('sharePage');
    var clone = document.importNode(t.content, true);

    return setTimeout(function () {
        sectionShare.after(clone);
        sectionShare.remove();
    }, 800);

}

