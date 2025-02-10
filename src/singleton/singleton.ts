interface INotification {
  send(): void;
}

/**
 * Notification Service
 * 
 * @class NotificationService
 * @description A singleton class for sending notifications
 */
export class NotificationService {
  /**
   * Instance
   * 
   * @private
   * @static
   * @type {NotificationService}
   */
  private static instance: NotificationService;

  /**
   * Constructor
   * 
   * @private
   */
  private constructor() {
    console.log('NotificationService initialized');
  }

  /**
   * Get Instance
   * 
   * @static
   * @returns {NotificationService}
   */
  static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService();
    }
    return NotificationService.instance;
  }

  /**
   * Send Notification
   * 
   * @param {Notification} notification
   */
  sendNotification(notification: INotification): void {
    notification.send();
  }
}

(() => {
  // Step 5: Using the Singleton
  const notificationService1 = NotificationService.getInstance();
  const notificationService2 = NotificationService.getInstance();
})();