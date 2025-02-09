
import { expect } from "chai";
import sinon from 'sinon';

import { ModernNotificationFactory, VintageNotificationFactory, ModernEmailNotification, ModernSMSNotification, VintageEmailNotification, VintageSMSNotification } from "../../src/abstract-factory/abstract-factory";

describe("Notification Factory Pattern", function () {
  let consoleStub: sinon.SinonSpy;

  beforeEach(() => {
    consoleStub = sinon.stub(console, "log");
  });

  afterEach(() => {
    consoleStub.restore();
  });

  it("should create a ModernEmailNotification instance from ModernNotificationFactory", function () {
    const factory = new ModernNotificationFactory();
    const emailNotification = factory.createEmailNotification();
    expect(emailNotification).to.be.instanceOf(ModernEmailNotification);
  });

  it("should create a ModernSMSNotification instance from ModernNotificationFactory", function () {
    const factory = new ModernNotificationFactory();
    const smsNotification = factory.createSMSNotification();
    expect(smsNotification).to.be.instanceOf(ModernSMSNotification);
  });

  it("should create a VintageEmailNotification instance from VintageNotificationFactory", function () {
    const factory = new VintageNotificationFactory();
    const emailNotification = factory.createEmailNotification();
    expect(emailNotification).to.be.instanceOf(VintageEmailNotification);
  });

  it("should create a VintageSMSNotification instance from VintageNotificationFactory", function () {
    const factory = new VintageNotificationFactory();
    const smsNotification = factory.createSMSNotification();
    expect(smsNotification).to.be.instanceOf(VintageSMSNotification);
  });

  it("should log message when ModernEmailNotification sends a message", function () {
    const emailNotification = new ModernEmailNotification();
    emailNotification.send("Test Email");
    expect(consoleStub.calledWith("Sending MODERN EMAIL notification: Test Email")).to.be.true;
  });

  it("should log message when ModernSMSNotification sends a message", function () {
    const smsNotification = new ModernSMSNotification();
    smsNotification.send("Test SMS");
    expect(consoleStub.calledWith("Sending MODERN SMS notification: Test SMS")).to.be.true;
  });

  it("should log message when VintageEmailNotification sends a message", function () {
    const emailNotification = new VintageEmailNotification();
    emailNotification.send("Test Email");
    expect(consoleStub.calledWith("Sending VINTAGE EMAIL notification: Test Email")).to.be.true;
  });

  it("should log message when VintageSMSNotification sends a message", function () {
    const smsNotification = new VintageSMSNotification();
    smsNotification.send("Test SMS");
    expect(consoleStub.calledWith("Sending VINTAGE SMS notification: Test SMS")).to.be.true;
  });
});
