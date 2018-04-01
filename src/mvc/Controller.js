import Model from './Model';
import View from './View';
import consoleLogger from '../ConsoleLogger';

/**
 * @class Controller - класс отвечающий за обработку событий из вьюхи, вызывает изменения модели
*/
class Controller {
  /**
   * Создает инстанс модели, вьюхи. Регестрирует событие добавления
   * @param {CustomEvents} customEvents
   * @param {Logger} logger
   */
  constructor(customEvents, logger = consoleLogger) {
    this.logger = logger;
    this.customEvents = customEvents;
    this.model = new Model({ 0: 'Fox', 1: 'Lion', 2: 'Squerrel' }, logger);
    this.view = new View(this.model, customEvents, logger);
    this.view.addCreateHandler((animalName) => {
      this.addAnimal(animalName);
    });
  }

  /**
   * Обработка события - удаление животного из списка
   * @param {Number} id
   */
  removeAnimal(id) {
    this.logger.write('Controller.js: call model delete method');
    this.model.delete(id);
    this.customEvents.dispatchEvent('updateList');
    this.getView();
  }

  /**
   * Обработка события - добавление животного в список
   * @param {String} name
   */
  addAnimal(name) {
    if (this.validateString(name)) {
      this.logger.write('Controller.js: call model add method');
      this.model.add(name);
      this.customEvents.dispatchEvent('updateList');
      this.getView();
    }
  }

  /**
   * Валидирует данные в случае неудачи - пишет об этом в лог
   * @param {String} string
   * @returns {Boolean}
  */
  validateString(string) {
    if (string.length > 0) {
      return true;
    }
    this.logger.write('<span style="color: red">Empty string sending. Abort.</span>');
    return false;
  }

  /**
   * Вызывает метод подписки на удаление в view
  */
  subscribeDeleteHandlers() {
    this.logger.write('Controller.js: subscribe delete handlers');
    this.view.addDeleteHandler((id) => {
      this.removeAnimal(id);
    });
  }

  /**
   * Возвращает view
   * @returns {View} this.view
  */
  getView() {
    this.logger.write('Controller.js: get view');
    this.subscribeDeleteHandlers();
    return this.view;
  }
}

export default Controller;
