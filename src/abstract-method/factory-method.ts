/**
 * Interface for Factory Notification.
 * Defines a method for sending notifications.
 * 
 * @interface
 */
export interface iFactoryNotification {
  /**
   * Sends a notification with the given message.
   * 
   * @param message - The message to be sent.
   */
  send(message: string): void;
}

/**
 * Abstract Factory for creating notifications.
 * Provides a method to create a notification and send messages.
 * 
 * @abstract
 * @class
 */
abstract class FactoryNotificationCreatorFactory {
  /**
   * Factory method to create a notification instance.
   * 
   * @returns {iFactoryNotification} - A notification instance.
   */
  abstract createNotification(): iFactoryNotification;

  /**
   * Sends a notification using the created notification instance.
   * 
   * @param message - The message to send.
   */
  notifyUser(message: string): void {
    const notification = this.createNotification();
    notification.send(message);
  }
}

/**
 * Concrete implementation of an Email Notification.
 * 
 * @class
 * @implements {iFactoryNotification}
 */
class FactoryEmailNotification implements iFactoryNotification {
  /**
   * Sends an email notification with the given message.
   * 
   * @param message - The message to be sent.
   */
  send(message: string): void {
    console.log(`Sending email: ${message}`);
  }
}

/**
 * Concrete Creator for Email Notifications.
 * Implements the factory method to create email notifications.
 * 
 * @class
 * @extends {FactoryNotificationCreatorFactory}
 */
export class FactoryEmailNotificationCreator extends FactoryNotificationCreatorFactory {
  /**
   * Creates an instance of an email notification.
   * 
   * @returns {iFactoryNotification} - A new instance of FactoryEmailNotification.
   */
  createNotification(): iFactoryNotification {
    return new FactoryEmailNotification();
  }
}

/**
 * Concrete implementation of an SMS Notification.
 * 
 * @class
 * @implements {iFactoryNotification}
 */
class FactorySMSNotification implements iFactoryNotification {
  /**
   * Sends an SMS notification with the given message.
   * 
   * @param message - The message to be sent.
   */
  send(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}

/**
 * Concrete Creator for SMS Notifications.
 * Implements the factory method to create SMS notifications.
 * 
 * @class
 * @extends {FactoryNotificationCreatorFactory}
 */
export class FactorySMSNotificationCreator extends FactoryNotificationCreatorFactory {
  /**
   * Creates an instance of an SMS notification.
   * 
   * @returns {iFactoryNotification} - A new instance of FactorySMSNotification.
   */
  createNotification(): iFactoryNotification {
    return new FactorySMSNotification();
  }
}

(() => {
  const emailCreator = new FactoryEmailNotificationCreator();
  emailCreator.notifyUser("Your order has been shipped!");

  const smsCreator = new FactorySMSNotificationCreator();
  smsCreator.notifyUser("Your package will be delivered today.");
})();
