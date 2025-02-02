const cardContainer = document.getElementsByClassName('card__container')[0];
const bottomBackDrop = document.createElement("div");
bottomBackDrop.classList.add('card__bottom-backdrop')
cardContainer.appendChild(bottomBackDrop);

const utcTime = document.getElementsByClassName("card__current-time")[0];
const currentTime = new Date().toLocaleTimeString();
utcTime.append(currentTime);

const socialLinks = document.getElementsByClassName('card__social-link');
socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {})
})