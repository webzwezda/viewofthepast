

var menuRight = new hellRight('<img src="./assets/image/src/ad-vertical.jpg" alt="">', 'img');



function hellRight(mobileHell, desktopHell) {
    this.mobileHell = mobileHell;
    this.desktopHell = desktopHell
}

function click () {
    var divHellRight1 = document.getElementById('hellRight');
    divHellRight1.remove();
}



function mobileOrDesktop() {
    var clientDisplayWidth = document.documentElement.clientWidth;
    var divYdstick = document.getElementById('ydstick');
    if (clientDisplayWidth < 600) {
        divYdstick.innerHTML = menuRight.mobileHell;


        return setTimeout(function () {
            var divHellRight = document.getElementById('hellRight').children[0];

            divHellRight.insertAdjacentHTML("afterEnd", "<button id=\"hellMobile__button\" class=\"hellMobile__button\">&#xd7;</button>");
            var hellMobileButton = document.getElementById('hellMobile__button');
            hellMobileButton.onclick = click;

        }, 1800);

    } else {

        divYdstick.innerHTML = menuRight.desktopHell;
    }
}