# Diagrams

## Table of Contents

### Creational Patterns

- :factory: [Factory Method](#factory-method): is a design pattern that simplifies object creation by providing a centralized place to instantiate different types of objects, making your code more flexible and easier to manage.
- :factory: [Abstract Factory](#abstract-factory): is a design pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes.

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