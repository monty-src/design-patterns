import { expect } from "chai";
import { EmailNotification, NotificationManager, SMSNotification } from "../../src/prototype/prototype";

describe("Prototype Test - Notification System", () => {
  let manager: NotificationManager;

  beforeEach(() => {
    manager = new NotificationManager();
  });

  it("should register and clone an EmailNotification", () => {
    const emailPrototype = new EmailNotification("test@example.com", "Test Subject", "Test Body");
    manager.registerPrototype("email", emailPrototype);

    const clonedEmail = manager.createNotification("email") as EmailNotification;

    expect(clonedEmail).to.be.instanceOf(EmailNotification);
    expect(clonedEmail.recipient).to.equal(emailPrototype.recipient);
    expect(clonedEmail.subject).to.equal(emailPrototype.subject);
    expect(clonedEmail.body).to.equal(emailPrototype.body);
  });

  it("should register and clone an SMSNotification", () => {
    const smsPrototype = new SMSNotification("+123456789", "Test Message");
    manager.registerPrototype("sms", smsPrototype);

    const clonedSms = manager.createNotification("sms") as SMSNotification;

    expect(clonedSms).to.be.instanceOf(SMSNotification);
    expect(clonedSms.phoneNumber).to.equal(smsPrototype.phoneNumber);
    expect(clonedSms.message).to.equal(smsPrototype.message);
  });

  it("should throw an error when trying to create an unregistered notification type", () => {
    expect(() => manager.createNotification("push")).to.throw(TypeError);
  });
});