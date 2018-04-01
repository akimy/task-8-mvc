import consoleLogger from '../ConsoleLogger';

class Event {
  constructor(name) {
    this.name = name;
    this.callbacks = [];
  }

  registerCallback(callback) {
    this.callbacks.push(callback);
  }
}

class CustomEvents {
  constructor(logger = consoleLogger) {
    this.logger = logger;
    this.events = {};
  }

  registerEvent(eventName) {
    const event = new Event(eventName);
    this.events[eventName] = event;
  }

  dispatchEvent(eventName, eventArgs) {
    this.logger.write(`CustomEvents.js: dispatch ${eventName}`);
    this.events[eventName].callbacks.forEach((callback) => {
      callback(eventArgs);
    });
  }

  addEventListener(eventName, callback) {
    this.events[eventName].registerCallback(callback);
  }
}

export default CustomEvents;
