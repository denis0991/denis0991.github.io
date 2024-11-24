const tableString = document.querySelector('.overlay__table-string');

import {data} from './data.js'

function checkRatingInFriends(rating, friends) {
    return rating.map(ratedUser  => {
        const isInFriends = friends.some(friend => friend.id === ratedUser .id);
        return {
            ...ratedUser ,
            isInFriends
        };
    });
}

const result = checkRatingInFriends(data.rating, data.friends);

result.forEach((element, index) => {
    const overlayTableString = document.createElement('div');
    overlayTableString.className = 'overlay__table-string-item string-item';
    const number = document.createElement('p');
    number.className = 'string-item__number';
    number.textContent = index + 1;
    const imgContainer = document.createElement('div');
    imgContainer.className = 'string-item__img-container';
    const img = document.createElement('img');
    img.className = 'string-item__img'
    img.src = element.img
    img.alt = "person's-icon"
    imgContainer.appendChild(img);
    const name = document.createElement('p');
    name.textContent = `${element.name} ${element.lastName}`
    if (element.isInFriends) {
        name.className = 'string-item__name string-item__friends';
    } else {
        name.className = 'string-item__name';
    }
    const raiting = document.createElement('p');
    raiting.className = 'string-item__raiting';
    raiting.textContent = element.points
    overlayTableString.append(number, imgContainer, name, raiting);
    tableString.append(overlayTableString)
});