# Diagrams

## Table of Contents

### Creational Patterns

- :factory: [Factory Method](#factory-method): is a design pattern that simplifies object creation by providing a centralized place to instantiate different types of objects, making your code more flexible and easier to manage.
- :factory: [Abstract Factory](#abstract-factory): is a design pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes.
- :house: [Builder](./src/builder/README.md): is a design pattern that separates the construction of a complex object from its representation, allowing the same construction process to create different representations.
- :repeat_one: [Prototype](./src/prototype/README.md): is a design pattern that allows you to create new objects by cloning existing ones, rather than instantiating new objects from scratch.

## Creational Patterns

### [Factory Method](./src/factory-method/README.md)

```mermaid
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

### [Abstract Factory](./src/abstract-factory/README.md)

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

### [Builder](./src/builder/README.md)

```mermaid
classDiagram
    class iNotification {
        <<abstract>>
        +send(message: string): void
    }

    class EmailNotification {
        +send(message: string): void
    }

    class SMSNotification {
        +send(message: string): void
    }

    class NotificationBuilder {
        <<interface>>
        +setRecipient(recipient: string): this
        +setSubject(subject: string): this
        +setMessage(message: string): this
        +build(): iNotification
    }

    class EmailNotificationBuilder {
        -recipient: string
        -subject: string
        -message: string
        +setRecipient(recipient: string): this
        +setSubject(subject: string): this
        +setMessage(message: string): this
        +build(): iNotification
    }

    class SMSNotificationBuilder {
        -recipient: string
        -message: string
        +setRecipient(recipient: string): this
        +setSubject(subject: string): this // Throws Error
        +setMessage(message: string): this
        +build(): iNotification
    }

    iNotification <|-- EmailNotification
    iNotification <|-- SMSNotification
    NotificationBuilder <|.. EmailNotificationBuilder
    NotificationBuilder <|.. SMSNotificationBuilder

```

### [Prototype](./src/prototype/README.md)

```mermaid
classDiagram
  class iNotification {
    <<interface>>
    +clone() iNotification
    +send() void
  }

  class EmailNotification {
    +recipient: string
    +subject: string
    +body: string
    +clone() iNotification
    +send() void
  }

  class SMSNotification {
    +phoneNumber: string
    +message: string
    +clone() iNotification
    +send() void
  }

  class NotificationManager {
    -prototypes: Record<string, iNotification>
    +registerPrototype(type: string, prototype: iNotification) void
    +createNotification(type: string) iNotification
  }

  iNotification <|.. EmailNotification
  iNotification <|.. SMSNotification
  NotificationManager --> iNotification : manages

```