
# Factory Method


## Breakdown

### Key Points

- :white_check_mark: **Creator Class:** Declares the factory method, which returns objects of the product interface type.
- :white_check_mark: **Factory Method:** Can be abstract (forcing subclasses to implement it) or have a default implementation.
- :white_check_mark: **Product Interface:** Defines the common behavior for all concrete product types.
- :white_check_mark: **Subclasses:** Implement or override the factory method to create specific product instances.

### Benefits

- :white_check_mark: **Decoupling:** Separates product creation from the main business logic.
- :white_check_mark: **Flexibility:** New product types can be introduced without modifying existing code.
- :white_check_mark: **Encapsulation:** The client code relies on the factory method rather than directly instantiating objects.

### Drawbacks

- :no_entry_sign: **You want to manage object creation centrally:** If your codebase needs to create objects that might have a variety of implementations, but you want to centralize their creation logic, the Factory Method allows you to do this without altering client code.
- :no_entry_sign: **You want to allow for future changes:** If you're designing a system that might need to handle new types of objects in the future, the Factory Method gives you the flexibility to introduce those changes without modifying existing client code.
- :no_entry_sign: **You want to reduce complexity:** The Factory Method provides a way to isolate the complex logic of creating objects in one place, making your client code cleaner and easier to maintain.

## Class Architecture

### Architecture Diagram

<p align="center">
  
  ![Factory Method](./images/mermaid.png)

</p>

### Architecture Snippet

<a href="https://mermaid.live/" target="_blank">Mermaid Live Editor</a>

```bash
classDiagram
    class iFactoryNotification {
        <<interface>>
        +send(message: string): void
    }

    class FactoryNotificationCreatorFactory {
        <<abstract>>
        +createNotification(): iFactoryNotification
        +notifyUser(message: string): void
    }

    class FactoryEmailNotification {
        +send(message: string): void
    }

    class FactoryEmailNotificationCreator {
        +createNotification(): iFactoryNotification
    }

    class FactorySMSNotification {
        +send(message: string): void
    }

    class FactorySMSNotificationCreator {
        +createNotification(): iFactoryNotification
    }

    iFactoryNotification <|-- FactoryEmailNotification
    iFactoryNotification <|-- FactorySMSNotification

    FactoryNotificationCreatorFactory <|-- FactoryEmailNotificationCreator
    FactoryNotificationCreatorFactory <|-- FactorySMSNotificationCreator

    FactoryEmailNotificationCreator --> FactoryEmailNotification : creates
    FactorySMSNotificationCreator --> FactorySMSNotification : creates

```


## Code - Snippet

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