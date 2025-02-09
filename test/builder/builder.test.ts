
import { expect } from "chai";

import { EmailNotificationBuilder, SMSNotificationBuilder, EmailNotification, SMSNotification } from "../../src/builder/builder";

describe("Builder Test - Design Pattern", () => {

  it("should build an EmailNotification with recipient and message", () => {
    const emailBuilder = new EmailNotificationBuilder();
    const emailNotification = emailBuilder
      .setRecipient("John Doe")
      .setSubject("Test Email")
      .setMessage("Hello, this is a test email.")
      .build();

    expect(emailNotification).to.be.instanceOf(EmailNotification);
  });

  it("should send an EmailNotification without throwing an error", () => {
    const emailNotification = new EmailNotification();
    expect(() => emailNotification.send("Test Email")).to.not.throw();
  });

  it("should build an SMSNotification with recipient and message", () => {
    const smsBuilder = new SMSNotificationBuilder();
    const smsNotification = smsBuilder
      .setRecipient("Jane Doe")
      .setMessage("Hello, this is a test SMS.")
      .build();

    expect(smsNotification).to.be.instanceOf(SMSNotification);
  });

  it("should send an SMSNotification without throwing an error", () => {
    const smsNotification = new SMSNotification();
    expect(() => smsNotification.send("Test SMS")).to.not.throw();
  });

  it("should throw an error when setting subject in SMSNotificationBuilder", () => {
    const smsBuilder = new SMSNotificationBuilder();
    expect(() => smsBuilder.setSubject("Test Subject")).to.throw(
      "Method not implemented."
    );
  });
});