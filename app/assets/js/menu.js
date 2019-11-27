var counter = false;

function myFunction() {
    var x = document.getElementById('menu__right');
    if(counter === false){
        x.style.display = "none";
        counter = true;
    };

    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
    return counter;
}