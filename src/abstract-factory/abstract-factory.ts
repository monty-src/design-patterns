/**
 * Abstract class for email notifications.
 * 
 * @abstract
 * @class
 */
abstract class EmailNotification {
  abstract send(message: string): void;
}

/**
 * Abstract class for SMS notifications.
 * 
 * @abstract
 * @class
 */
abstract class SMSNotification {
  /**
   * Sends a message.
   * 
   * @param message - The message to send.
   */
  abstract send(message: string): void;
}

/**
 * Abstract factory for creating notifications.
 * 
 * @abstract
 * @class
 */
abstract class NotificationFactory {
  /**
   * Creates an email notification.
   * 
   * @returns {EmailNotification} - The created email notification.
   */
  abstract createEmailNotification(): EmailNotification;

  /**
   * Creates an SMS notification.
   * 
   * @returns {SMSNotification} - The created SMS notification.
   */
  abstract createSMSNotification(): SMSNotification;
}

/**
 * Modern email notification.
 * 
 * @class
 */
export class ModernEmailNotification extends EmailNotification {
  send(message: string): void {
    console.log(`Sending MODERN EMAIL notification: ${message}`);
  }
}

/**
 * Modern SMS notification.
 * 
 * @class
 */
export class ModernSMSNotification extends SMSNotification {
  send(message: string): void {
    console.log(`Sending MODERN SMS notification: ${message}`);
  }
}

/**
 * Modern notification factory.
 * 
 * @class
 */
export class ModernNotificationFactory extends NotificationFactory {
  /**
   * Creates a modern email notification.
   * 
   * @returns {EmailNotification} - The created email notification.
   */
  createEmailNotification(): EmailNotification {
    return new ModernEmailNotification();
  }

  /**
   * Creates a modern SMS notification.
   * 
   * @returns {SMSNotification} - The created SMS notification.
   */
  createSMSNotification(): SMSNotification {
    return new ModernSMSNotification();
  }
}

/**
 * Vintage email notification.
 * 
 * @class
 */
export class VintageEmailNotification extends EmailNotification {
  /**
   * Sends a message.
   * 
   * @param message - The message to send.
   */
  send(message: string): void {
    console.log(`Sending VINTAGE EMAIL notification: ${message}`);
  }
}

/**
 * Vintage SMS notification.
 * 
 * @class
 */
export class VintageSMSNotification extends SMSNotification {
  /**
   * Sends a message.
   * 
   * @param message - The message to send.
   */
  send(message: string): void {
    console.log(`Sending VINTAGE SMS notification: ${message}`);
  }
}

/**
 * Vintage notification factory.
 * 
 * @class
 */
export class VintageNotificationFactory extends NotificationFactory {
  /**
   * Creates a vintage email notification.
   * 
   * @returns {EmailNotification} - The created email notification.
   */
  createEmailNotification(): EmailNotification {
    return new VintageEmailNotification();
  }

  /**
   * Creates a vintage SMS notification.
   * 
   * @returns {SMSNotification} - The created SMS notification.
   */
  createSMSNotification(): SMSNotification {
    return new VintageSMSNotification();
  }
}

(() => {
  // Create modern notification factory
  const modernFactory = new ModernNotificationFactory();
  const modernEmail = modernFactory.createEmailNotification();
  modernEmail.send("Your order has been shipped!");

  const modernSMS = modernFactory.createSMSNotification();
  modernSMS.send("Your package will be delivered today.");

  // Create vintage notification factory
  const vintageFactory = new VintageNotificationFactory();
  const vintageEmail = vintageFactory.createEmailNotification();
  vintageEmail.send("Your order has been shipped!");

  const vintageSMS = vintageFactory.createSMSNotification();
  vintageSMS.send("Your package will be delivered today.");
})();