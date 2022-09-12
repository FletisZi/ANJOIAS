var position = 0 , conteudo;

function Menu(){
    let menu2 = window.document.querySelector('#menu2');
    menu2.style.display = "flex";

    let menu1 = window.document.querySelector('.bar-nav');
    menu1.style.display = "none";
}

function OptionCard(positions){
    let elmentSelect = document.querySelector(`#prod${positions}`);


    elmentSelect.querySelector('img').style.opacity = "0.6";
    elmentSelect.querySelector('h2').innerHTML = `<a class="button-toCard" href="#">ADD TO CARD</a>`;
    elmentSelect.querySelector('h3').remove();
    //alert(`posição ${positions}`)
}








