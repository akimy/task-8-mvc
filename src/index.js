import Controller from './mvc/Controller';
import CustomEvents from './mvc/CustomEvents';
import logger from './Logger';

const customEvents = new CustomEvents(logger);
const animalList = new Controller(customEvents, logger);

// Маунтим вьюху в DOM-элемент с селектором .view
document.querySelector('.view')
  .insertBefore(animalList.getView().html, document.querySelector('.view__log'));
