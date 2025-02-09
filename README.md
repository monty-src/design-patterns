
# My Design Patterns Notes

> [!IMPORTANT]
> My personal notes and deep dive on the following [Design Patterns](https://refactoring.guru/design-patterns/catalog)

## [Factory Method](./src/factory-method/README.md)

```bash
📦 src/factory-method
 ┣ 📜 factory-method.ts
 ┣ 📜 README.md
📦 test/factory-method
 ┣ 📜 factoryMethod.test.ts
 ┣ 📜 factoryNotification.test.ts
```

```bash
npm run test:factory-method
```


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