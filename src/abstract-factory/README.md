# Abstract Factory

#### File Structure

```bash
📦 src/abstract-factory
 ┣ 📜 abstract-factory.ts
 ┣ 📜 README.md
📦 test/abstract-method
 ┣ 📜 abstractMethod.test.ts
 ┣ 📜 abstractNotification.test.ts
```

#### Test

```bash
npm run test:abstract-factory
```

## Breakdown

### Key Points

- :white_check_mark: **Abstract Factory:** Declares an interface for operations that create abstract products.
- :white_check_mark: **Concrete Factory:** Implements the operations to create concrete product objects.
- :white_check_mark: **Abstract Product:** Declares an interface for a type of product object.
- :white_check_mark: **Concrete Product:** Defines a product object to be created by the corresponding concrete factory.
- :white_check_mark: **Client:** Uses only interfaces declared by the abstract factory and concrete factory.

## Benefits

- :white_check_mark: **Isolation:** The client code works with the abstract factory and concrete factories without knowing the specific classes of the products.
- :white_check_mark: **Flexibility:** The client code can work with any concrete factory implementation.
- :white_check_mark: **Reusability:** The abstract factory can be used to create different types of products.
- :white_check_mark: **Testability:** The abstract factory can be tested independently of the client code.

## Drawbacks

- :no_entry_sign: **Complexity:** The abstract factory pattern can be more complex than other patterns, such as the factory method pattern.
- :no_entry_sign: **Performance:** The abstract factory pattern can be slower than other patterns, such as the factory method pattern.
- :no_entry_sign: **Memory:** The abstract factory pattern can use more memory than other patterns, such as the factory method pattern.
- :no_entry_sign: **Complexity:** The abstract factory pattern can be more complex than other patterns, such as the factory method pattern.
- :no_entry_sign: **Performance:** The abstract factory pattern can be slower than other patterns, such as the factory method pattern.

## Example

### Class Architecture
```mermaid
classDiagram
    class EmailNotification {
        <<abstract>>
        +send(message: string) void
    }

    class SMSNotification {
        <<abstract>>
        +send(message: string) void
    }

    class NotificationFactory {
        <<abstract>>
        +createEmailNotification() EmailNotification
        +createSMSNotification() SMSNotification
    }

    class ModernEmailNotification {
        +send(message: string) void
    }

    class ModernSMSNotification {
        +send(message: string) void
    }

    class ModernNotificationFactory {
        +createEmailNotification() EmailNotification
        +createSMSNotification() SMSNotification
    }

    class VintageEmailNotification {
        +send(message: string) void
    }

    class VintageSMSNotification {
        +send(message: string) void
    }

    class VintageNotificationFactory {
        +createEmailNotification() EmailNotification
        +createSMSNotification() SMSNotification
    }

    EmailNotification <|-- ModernEmailNotification
    EmailNotification <|-- VintageEmailNotification
    SMSNotification <|-- ModernSMSNotification
    SMSNotification <|-- VintageSMSNotification
    NotificationFactory <|-- ModernNotificationFactory
    NotificationFactory <|-- VintageNotificationFactory
    ModernNotificationFactory --> ModernEmailNotification
    ModernNotificationFactory --> ModernSMSNotification
    VintageNotificationFactory --> VintageEmailNotification
    VintageNotificationFactory --> VintageSMSNotification

```

### Code - Snippet

```ts
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
class ModernEmailNotification extends EmailNotification {
  send(message: string): void {
    console.log(`Sending MODERN EMAIL notification: ${message}`);
  }
}

/**
 * Modern SMS notification.
 * 
 * @class
 */
class ModernSMSNotification extends SMSNotification {
  send(message: string): void {
    console.log(`Sending MODERN SMS notification: ${message}`);
  }
}

/**
 * Modern notification factory.
 * 
 * @class
 */
class ModernNotificationFactory extends NotificationFactory {
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
class VintageEmailNotification extends EmailNotification {
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
class VintageSMSNotification extends SMSNotification {
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
class VintageNotificationFactory extends NotificationFactory {
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
```