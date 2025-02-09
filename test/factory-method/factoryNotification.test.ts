import sinon from "sinon";
import { expect } from "chai";

import { iFactoryNotification, FactoryEmailNotificationCreator, FactorySMSNotificationCreator } from "../../src/factory-method/factory-method";

describe("Factory Notification System", () => {
  let consoleSpy: sinon.SinonSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, "log");
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it("should send an email notification with the correct message", () => {
    const emailCreator = new FactoryEmailNotificationCreator();
    const emailNotification: iFactoryNotification = emailCreator.createNotification();

    emailNotification.send("Test Email Message");

    expect(consoleSpy.calledWith("Sending email: Test Email Message")).to.be.true;
  });

  it("should send an SMS notification with the correct message", () => {
    const smsCreator = new FactorySMSNotificationCreator();
    const smsNotification: iFactoryNotification = smsCreator.createNotification();

    smsNotification.send("Test SMS Message");

    expect(consoleSpy.calledWith("Sending SMS: Test SMS Message")).to.be.true;
  });

  it("should send a notification using FactoryEmailNotificationCreator", () => {
    const emailCreator = new FactoryEmailNotificationCreator();
    emailCreator.notifyUser("Your order has been shipped!");

    expect(consoleSpy.calledWith("Sending email: Your order has been shipped!")).to.be.true;
  });

  it("should send a notification using FactorySMSNotificationCreator", () => {
    const smsCreator = new FactorySMSNotificationCreator();
    smsCreator.notifyUser("Your package will be delivered today.");

    expect(consoleSpy.calledWith("Sending SMS: Your package will be delivered today.")).to.be.true;
  });
});