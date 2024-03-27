export function homepage() {
    
    const title = document.createElement('h1');
    title.textContent = 'Welcome to our Beautiful Restaurant'
    const content = document.getElementById('content');

    const restaurantImage = document.createElement('img');
    restaurantImage.classList.add('restaurant-image');

    const info = document.createElement('p');
    info.classList.add('hero-text')
    info.textContent = 'We serve pizza and other dishes since 1918!';

    content.appendChild(restaurantImage);
    content.appendChild(title);
    content.appendChild(info);
}