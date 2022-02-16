/* ВАРИАНТЫ С ИСПОЛЬЗОВАНИЕМ ГОТОВОЙ ВЕРСТКИ */
/* 1 вариант (не очень, так как много лишнего кода): */

/*const mainCard = document.querySelector('.main__card');
const popUp = document.querySelector('.main__popup');
const showButton = document.querySelector('.main__card__show');
const smileButton = document.querySelector('.main__popup__smile');
const overlay = document.querySelector('.overlay');

showButton.addEventListener('click', event => {
    event.preventDefault(event);
    overlay.style.display = "inherit";
    popUp.style.display = "flex";
});

smileButton.addEventListener('click', event => {
    event.preventDefault(event);
    popUp.style.display = "none";
    overlay.style.display = "none";
});

overlay.addEventListener('click', event => {
    event.preventDefault(event);
    popUp.style.display = "none";
    overlay.style.display = "none";
});*/


/* 2 вариант: */

/*document.querySelector('.main').addEventListener('click', event => {
    event.preventDefault(event);

    if (event.target.dataset.show) {
        document.querySelector('.overlay').style.display = "inherit";
        document.querySelector('.main__popup').style.display = "flex";
    }

    if (event.target.dataset.smile || event.target.dataset.overlay) {
        document.querySelector('.overlay').style.display = "none";
        document.querySelector('.main__popup').style.display = "none";
    }
});*/


/* ВАРИАНТ БЕЗ ИСПОЛЬЗОВАНИЯ ГОТОВОЙ ВЕРСТКИ */

/*const mainBlock = document.querySelector('.main');

const createMainCard = () => {
    const cardBlock = document.createElement('div');
    const title = document.createElement('h1');
    const button = document.createElement('button');

    cardBlock.classList.add('main__card');
    button.classList.add('main__card__show');
    button.setAttribute('data-show', 'show');
    button.textContent = 'Show me a cat :)';

    title.textContent = 'Hello, guest!';

    cardBlock.appendChild(title);
    cardBlock.appendChild(button);
    mainBlock.appendChild(cardBlock);
};

const createMainPopup = () => {
    const popUpBlock = document.createElement('div');
    const image = document.createElement('img');
    const button = document.createElement('button');

    popUpBlock.classList.add('main__popup');

    image.src = './cat.gif';
    image.alt = 'cute cat';

    button.classList.add('main__popup__smile');
    button.setAttribute('data-smile', 'smile');
    button.textContent = 'Smile!';

    popUpBlock.appendChild(image);
    popUpBlock.appendChild(button);
    mainBlock.appendChild(popUpBlock);
};

const createOverlay = () => {
    const overlayBlock = document.createElement('div');
    overlayBlock.classList.add('overlay');
    overlayBlock.setAttribute('data-overlay', 'overlay');

    mainBlock.appendChild(overlayBlock);
}

createMainCard();
createMainPopup();
createOverlay();

document.querySelector('.main').addEventListener('click', event => {
    event.preventDefault(event);

    if (event.target.dataset.show) {
        document.querySelector('.overlay').style.display = "inherit";
        document.querySelector('.main__popup').style.display = "flex";
    }

    if (event.target.dataset.smile || event.target.dataset.overlay) {
        document.querySelector('.overlay').style.display = "none";
        document.querySelector('.main__popup').style.display = "none";
    }
});

document.querySelector('.main').onclick = (event) => {
    event.preventDefault(event);

    if (event.target.dataset.show) {
        document.querySelector('.overlay').style.display = "inherit";
        document.querySelector('.main__popup').style.display = "flex";
    }

    if (event.target.dataset.smile || event.target.dataset.overlay) {
        document.querySelector('.overlay').style.display = "none";
        document.querySelector('.main__popup').style.display = "none";
    }
};*/




