import Margherita from './imgs/margherita.webp'

export function menu() {
    const grid = document.createElement('div');
    grid.classList.add('grid');

    const pizza1 = document.createElement('img');
    pizza1.classList.add('pizza');
    pizza1.src = Margherita;

    const content = document.getElementById('content');
    content.appendChild(grid);
    grid.appendChild(pizza1);

}