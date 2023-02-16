// import hi from './js/Example'
import { burgerActive } from './js/Burger.js';
import { addBlur } from './js/Blur.js';
import { price } from './js/Accordion.js';
import { select } from './js/Select.js';


window.onload = function() {
  addBlur();
  burgerActive();
  price();
  select();
}
