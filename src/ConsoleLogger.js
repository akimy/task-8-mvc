/**
 * @class ConsoleLogger - класс стаб для логирования в консоль параметр по умолчанию
 *  если не прокидывать класс логгера в другие классы не имеет связанности с DOM
 *
*/
class ConsoleLogger {
  /**
     * Логирует сообщение в консоль
     * @param {String} message
     */
  write(message) {
    console.log(message);
  }
}

const consoleLogger = new ConsoleLogger();

export default consoleLogger;

