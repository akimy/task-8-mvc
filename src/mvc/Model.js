import consoleLogger from '../ConsoleLogger';

/**
 * @class Model - содержит информацию о модели (данные)
*/
class Model {
  /**
   * Устанавливает первоначальные данные и регестрирует логгер
   * @param {Logger} logger
   */
  constructor(data = {}, logger = consoleLogger) {
    this.data = data;
    this.currentId = 3;
    this.logger = logger;
  }

  /**
   * Возвращает данные модели
   * @returns {Object}
  */
  get() {
    this.logger.write(`Model.js: get data <pre class="log__store">${JSON.stringify(this.data)}</pre>`);
    return this.data;
  }

  /**
   * Добавляет элемент в модель
   * @param {String} name - имя добавляемого животного
   */
  add(name) {
    this.logger.write(`Model.js: add data ${name}`);
    this.data[this.currentId++] = name;
  }

  /**
   * Удаляет запись из модели по id
   * @param {Number} id
   */
  delete(id) {
    this.logger.write(`Model.js: remove data id=${id}`);
    delete this.data[id];
  }
}

export default Model;
