

function init() {
    btnDonate = document.getElementsByClassName('donate__method__btn');
    for (var i = 0; i < btnDonate.length; i++) {
        btnDonate[i].onclick = changeMethod;
        addOrderId();
    }
    var cb = new Clipboard('.btn');
    cb.on('success', function (e) {
        btCopy();
        window.setTimeout(function () {
            e.clearSelection();
        }, 800);
    });
}


var formValue = ['formInputLabel', 'formInputTargets'];
var chenge = Math.floor(Math.random() * 1000) + 100;



function addOrderId() {
    var echName;
    for (var i = 0; i < formValue.length; i++) {
        echName = document.getElementById(formValue[i]);
        echName.value = chenge;
    }
}

function changeMethod(eventObj) {

    if (!eventObj.target.classList.contains('donate__method__btn--triangle') && !eventObj.target.parentNode.classList.contains('donate__method__btn--triangle')) {

        for (var i = 0; i < btnDonate.length; i++) {
            btnDonate[i].classList.remove('donate__method__btn--triangle')
        }
        chageDonate()
    }
    if (eventObj.target.tagName != 'SPAN') {
        eventObj.target.classList.add('donate__method__btn--triangle');

    } else {
        eventObj.target.parentNode.classList.add("donate__method__btn--triangle");
    }
}

function chageDonate() {
    document.getElementById('donateBtc').classList.toggle('donate__displayOn');
    document.getElementById('donateYd').classList.toggle('donate__displayOn')
}





function btCopy() {
    var btCopyBtn = document.getElementById('donateBtc');
    btCopyBtn.classList.toggle('donate__btc--copy');



    setTimeout(function () {
        btCopyBtn.classList.toggle('donate__btc--copy');
    }, 800);
}


init();
