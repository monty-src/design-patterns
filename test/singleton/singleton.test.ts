import sinon from "sinon";
import { expect } from 'chai';

import { NotificationService } from '../../src/singleton/singleton';

interface INotification {
  send(): void;
}

class MockNotification implements INotification {
  send(): void {
    console.log('Mock notification sent');
  }
}

describe('NotificationService Singleton', () => {
  it('should return the same instance when getInstance is called multiple times', () => {
    const instance1 = NotificationService.getInstance();
    const instance2 = NotificationService.getInstance();

    expect(instance1).to.equal(instance2);
  });

  it('should call send method on the notification object when sendNotification is invoked', () => {
    const service = NotificationService.getInstance();
    const mockNotification = new MockNotification();

    // Spy on the send method
    const sendSpy = sinon.spy(mockNotification, 'send');

    service.sendNotification(mockNotification);

    expect(sendSpy.calledOnce).to.be.true;
  });
});