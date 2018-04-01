/**
 * @class Logger - класс для логирования помещает записи в элемент на странице
*/
class Logger {
  /**
   * @param {DOMElement} container - контейнер в котором находятся логи
   * @param {DOMElement} clearButton - кнопка очистки логов
   */
  constructor(container, clearButton) {
    this.container = container;
    this.clearButton = clearButton;
    this.clearButton.addEventListener('click', () => {
      this.clear();
    });
  }

  /**
   * Возвращает текущую дату в формате hh:mm:ss
  */
  getDateString() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}:${now.getSeconds()
      < 10 ? '0' : ''}${now.getSeconds()}`;
  }

  /**
   * Автопрокручивает контейнер с логами
  */
  scroll() {
    this.container.scrollTop = this.container.scrollHeight;
  }

  /**
   * Записывает сообщение в контейнер
   * @param {String} message
   */
  write(message) {
    const span = document.createElement('span');
    span.innerHTML = `> ${message} ${this.getDateString()}`;
    this.container.appendChild(span);
    this.scroll();
  }

  /**
   * Очищает лог
  */
  clear() {
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }
  }
}

const logElement = document.querySelector('.log__text');
const clearButtonElement = document.querySelector('.log__clear');

const logger = new Logger(logElement, clearButtonElement);

export default logger;

