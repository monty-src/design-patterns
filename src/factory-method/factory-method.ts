/**
 * Factory Method
 * 
 * 
 * 
 * 
 * 
 * 
 */

/**
 * Factory Notification
 * 
 * 
 * 
 * 
 * @interface iFactoryNotification
 */
interface iFactoryNotification {
  send(message: string): void;
}

/**
 * Factory Notification Creator Factory
 * - Factory (Creator)
 * 
 * 
 * 
 * 
 * @class
 * @Factory FactoryNotificationCreatorFactory
 */
abstract class FactoryNotificationCreatorFactory {
  abstract createNotification(): iFactoryNotification;

  notifyUser(message: string): void {
    const notification = this.createNotification();
    notification.send(message);
  }

}

/**
 * Factory Email Notification
 * - Concrete Product
 * 
 * 
 * 
 * @class
 * @implements FactoryNotification
 */
class FactoryEmailNotification implements iFactoryNotification {
  send(message: string): void {
    console.log(`Sending email: ${message}`);
  }
}

/**
 * Factory Email Notification Creator
 * - Concrete Creator
 * 
 * 
 * 
 * 
 * @class
 * @extends FactoryNotificationCreatorFactory
 */
class FactoryEmailNotificationCreator extends FactoryNotificationCreatorFactory {
  createNotification(): iFactoryNotification {
    return new FactoryEmailNotification();
  }
}

/**
 * Factory SMS Notification
 * - Concrete Product
 * 
 * 
 * 
 * @class
 * @implements FactoryNotification
 */
class FactorySMSNotification implements iFactoryNotification {
  send(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}

/**
 * Factory SMS Notification Creator
 * - Concreate Creator
 * 
 * 
 * 
 * @class
 * @extends FactoryNotificationCreatorFactory
 */
class FactorySMSNotificationCreator extends FactoryNotificationCreatorFactory {
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
