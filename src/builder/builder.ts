/**
 * Abstract class for notifications.
 *
 * @abstract
 * @class
 */
abstract class iNotification {
  /**
   * Sends a message.
   *
   * @abstract
   * @param {string} message
   * @returns {void}
   */
  abstract send(message: string): void;
}

/**
 * Concrete class for email notifications.
 *
 * @class
 * @extends {iNotification}
 */
export class EmailNotification extends iNotification {
  /**
   * Sends an email notification.
   *
   * @param {string} message
   * @returns {void}
   */
  send(message: string): void {
    console.log(`Sending Email Notification: ${message}`);
  }
}

/**
 * Concrete class for SMS notifications.
 *
 * @class
 * @extends {iNotification}
 */
export class SMSNotification extends iNotification {
  send(message: string): void {
    console.log(`Sending SMS Notification: ${message}`);
  }
}

/**
 * Interface for notification builders.
 *
 * @interface
 */
interface NotificationBuilder {
  /**
   * Sets the recipient.
   *
   * @param {string} recipient
   * @returns {this}
   */
  setRecipient(recipient: string): this;
  /**
   * Sets the subject.
   *
   * @param {string} subject
   * @returns {this}
   */
  setSubject(subject: string): this;
  /**
   * Sets the message.
   *
   * @param {string} message
   * @returns {this}
   */
  setMessage(message: string): this;
  /**
   * Builds a notification.
   *
   * @returns {iNotification}
   */
  build(): iNotification;
}

/**
 * Concrete builder for email notifications.
 *
 * @class
 * @implements {NotificationBuilder}
 */
export class EmailNotificationBuilder implements NotificationBuilder {
  /**
   * The recipient.
   *
   * @type {string}
   */
  private recipient: string = "";
  /**
   * The subject.
   *
   * @type {string}
   */
  private subject: string = "";
  /**
   * The message.
   *
   * @type {string}
   */
  private message: string = "";

  /**
   * Sets the recipient.
   *
   * @param {string} recipient
   * @returns {this}
   */
  setRecipient(recipient: string): this {
    this.recipient = recipient;
    return this;
  }

  /**
   * Sets the subject.
   *
   * @param {string} subject
   * @returns {this}
   */
  setSubject(subject: string): this {
    this.subject = subject;
    return this;
  }

  /**
   * Sets the message.
   *
   * @param {string} message
   * @returns {this}
   */
  setMessage(message: string): this {
    this.message = message;
    return this;
  }

  /**
   * Builds a notification.
   *
   * @returns {iNotification}
   */
  build(): iNotification {
    const email = new EmailNotification();
    console.log(`Building Email Notification to ${this.recipient}`);
    return email;
  }
}

/**
 * Concrete builder for SMS notifications.
 *
 * @class
 * @implements {NotificationBuilder}
 */
export class SMSNotificationBuilder implements NotificationBuilder {
  /**
   * The recipient.
   *
   * @type {string}
   */
  private recipient: string = "";
  /**
   * The message.
   *
   * @type {string}
   */
  private message: string = "";

  /**
   * Sets the recipient.
   *
   * @param {string} recipient
   * @returns {this}
   */

  setRecipient(recipient: string): this {
    this.recipient = recipient;
    return this;
  }

  /**
   * Sets the subject.
   *
   * @param {string} subject
   * @returns {this}
   */
  setSubject(subject: string): this {
    throw new Error("Method not implemented.");
  }

  /**
   * Sets the message.
   *
   * @param {string} message
   * @returns {this}
   */
  setMessage(message: string): this {
    this.message = message;
    return this;
  }

  /**
   * Builds a notification.
   *
   * @returns {iNotification}
   */
  build(): iNotification {
    const sms = new SMSNotification();
    console.log(`Building SMS Notification to ${this.recipient}`);
    return sms;
  }
}

(() => {
  const emailBuilder = new EmailNotificationBuilder();
  const email = emailBuilder.setRecipient("John Doe").setSubject("Hello").setMessage("Hello, world!").build();
  email.send("Hello, world!");

  const smsBuilder = new SMSNotificationBuilder();
  const sms = smsBuilder.setRecipient("John Doe").setMessage("Hello, world!").build();
  sms.send("Hello, world!");
})();
