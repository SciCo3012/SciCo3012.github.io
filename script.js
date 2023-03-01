/*JavaScript*/
const names = ['Adhiraj and Ananya', 'Aditya and Ditya', 'Anant and Ridhwan', 'Arjun and Amol'];

const name1 = document.querySelector('.name-container:nth-child(1) h1');

function getRandomName() {
    const randomNumber = Math.floor(Math.random() * names.length);
    return names[randomNumber];
}

name1.textContent = getRandomName();
