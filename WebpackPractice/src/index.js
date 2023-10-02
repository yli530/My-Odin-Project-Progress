import _ from 'lodash';
import './style.css'
import Icon from './star.png'

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const image = new Image();
    image.src = Icon;

    element.appendChild(image);

    return element;
}

document.body.appendChild(component());