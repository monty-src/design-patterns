/**
 * Prototype Interface
 * 
 * @interface
 */
interface iNotification {
  clone(): iNotification;
  send(): void;
}

/**
 * Email Notification
 * 
 * @class
 * @implements {iNotification}
 */
export class EmailNotification implements iNotification {
  /**
   * 
   * @param {string} recipient 
   * @param {string} subject 
   * @param {string} body 
   */
  constructor(
    public recipient: string,
    public subject: string,
    public body: string,
  ) { }

  /**
   * Clone the email notification
   * 
   * @returns {iNotification}
   */
  clone(): iNotification {
    return new EmailNotification(this.recipient, this.subject, this.body);
  }

  /**
   * Send the email notification
   * 
   * @returns {void}
   */
  send(): void {
    console.log(`Sending email to ${this.recipient} with subject ${this.subject} and body ${this.body}`);
  }

}

/**
 * SMS Notification
 * 
 * @class
 * @implements {iNotification}
 */
export class SMSNotification implements iNotification {
  /**
   * 
   * @param {string} phoneNumber 
   * @param {string} message 
   */
  constructor(
    public phoneNumber: string,
    public message: string
  ) { }

  /**
   * Clone the SMS notification
   * 
   * @returns {iNotification}
   */
  clone(): iNotification {
    return new SMSNotification(this.phoneNumber, this.message);
  }

  /**
   * Send the SMS notification
   * 
   * @returns {void}
   */
  send(): void {
    console.log(`Sending SMS to ${this.phoneNumber}: ${this.message}`);
  }
}

/**
 * Notification Manager
 * 
 * @class
 */
export class NotificationManager {
  /**
   * Prototypes
   * 
   * @type {Record<string, iNotification>}
   */
  private prototypes: { [key: string]: iNotification } = {};

  /**
   * Register a prototype
   * 
   * @param {string} type 
   * @param {iNotification} prototype 
   * @returns {void}
   */
  registerPrototype(type: string, prototype: iNotification): void {
    this.prototypes[type] = prototype;
  }

  /**
   * Create a notification
   * 
   * @param {string} type 
   * @returns {iNotification}
   */
  createNotification(type: string): iNotification {
    return this.prototypes[type].clone();
  }
}

(() => {
  // Step 4: Demonstration
  const manager = new NotificationManager();

  // Register prototypes
  manager.registerPrototype('email', new EmailNotification('user@example.com', 'Welcome', 'Thanks for signing up!'));
  manager.registerPrototype('sms', new SMSNotification('+1234567890', 'Your OTP is 1234'));

  console.log('do we get here');
  // Clone and send notifications
  const emailClone = manager.createNotification('email');
  emailClone.send(); // Output: Sending Email to user@example.com: Welcome - Thanks for signing up!

  const smsClone = manager.createNotification('sms');
  smsClone.send(); // Output: Sending SMS to +1234567890: Your OTP is 1234
})();