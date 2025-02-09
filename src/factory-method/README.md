
# Factory Method

![Factory Method](./images/mermaid.png)

## Breakdown

### Key Points

- :white_check_mark: **Creator Class:** Declares the factory method, which returns objects of the product interface type.
- :white_check_mark: **Factory Method:** Can be abstract (forcing subclasses to implement it) or have a default implementation.
- :white_check_mark: **Product Interface:** Defines the common behavior for all concrete product types.
- :white_check_mark: **Subclasses:** Implement or override the factory method to create specific product instances.

### Benefits

- **Decoupling:** Separates product creation from the main business logic.
- **Flexibility:** New product types can be introduced without modifying existing code.
- **Encapsulation:** The client code relies on the factory method rather than directly instantiating objects.


## Snippet

```ts
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
```