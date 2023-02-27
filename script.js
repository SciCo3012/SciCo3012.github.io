/*JavaScript*/
const names = ['Adhiraj', 'Ananya', 'Aditya', 'Arjun', 'Ditya', 'Anant'];

const name1 = document.querySelector('.name-container:nth-child(1) h1');
const name2 = document.querySelector('.name-container:nth-child(2) h1');

function getRandomName() {
    const randomNumber = Math.floor(Math.random() * names.length);
    return names[randomNumber];
}

name1.textContent = getRandomName();
name2.textContent = getRandomName();