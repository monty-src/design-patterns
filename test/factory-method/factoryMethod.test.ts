import { expect } from "chai";

import { iFactoryNotification, FactoryEmailNotificationCreator, FactorySMSNotificationCreator } from "../../src/factory-method/factory-method";

describe("Factory Method Test - Design Pattern", () => {
  it("should create an instance of FactoryEmailNotification using the FactoryEmailNotificationCreator", () => {
    const emailCreator = new FactoryEmailNotificationCreator();
    const emailNotification: iFactoryNotification = emailCreator.createNotification();

    expect(emailNotification).to.exist;
    expect(emailNotification.send).to.be.a("function");
    expect(emailNotification.send("test")).to.be.undefined;
  });

  it("should create an instance of FactorySMSNotification using the FactorySMSNotificationCreator", () => {
    const smsCreator = new FactorySMSNotificationCreator();
    const smsNotification: iFactoryNotification = smsCreator.createNotification();

    expect(smsNotification).to.exist;
    expect(smsNotification.send).to.be.a("function");
    expect(smsNotification.send("test")).to.be.undefined;
  });

  it("should ensure different creators return different product instances", () => {
    const emailCreator = new FactoryEmailNotificationCreator();
    const smsCreator = new FactorySMSNotificationCreator();

    const emailNotification = emailCreator.createNotification();
    const smsNotification = smsCreator.createNotification();

    expect(emailNotification).to.not.be.instanceOf(smsNotification.constructor);
    expect(smsNotification).to.not.be.instanceOf(emailNotification.constructor);
  });


  it("should use notifyUser() without directly instantiating concrete products", () => {
    const emailCreator = new FactoryEmailNotificationCreator();
    const smsCreator = new FactorySMSNotificationCreator();

    expect(() => emailCreator.notifyUser("Email Test")).to.not.throw();
    expect(() => smsCreator.notifyUser("SMS Test")).to.not.throw();
  });
});