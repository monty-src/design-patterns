/**
 * Interface for a vehicle.
 * 
 * @interface
 */ 
export interface iVehicle {
  stop(): void;
}

/**
 * Abstract class for a vehicle factory.
 * 
 * @abstract
 * @class
 */
abstract class VehicleFactory {
  /**
   * Abstract method to create a vehicle.
   * 
   * @returns {iVehicle} - The created vehicle.
   */
  abstract createVehicle(): iVehicle;

  /**
   * Starts the vehicle.
   * 
   * @returns {void}
   */
  start(): void {
    const vehicle = this.createVehicle();
    vehicle.stop();
  }
}

/**
 * Class for a car factory.
 * 
 * @class
 * @implements {iVehicle}
 */
class CarFactory implements iVehicle {
  /**
   * Stops the car.
   * 
   * @returns {void}
   */ 
  stop(): void {
    console.log('Car stopped');
  }
}

/**
 * Class for a car factory creator.
 * 
 * @class
 * @extends {VehicleFactory}
 */
export class CarFactoryCreator extends VehicleFactory {
  /**
   * Creates a car factory.
   * 
   * @returns {iVehicle} - The created car factory.
   */
  createVehicle(): iVehicle {
    return new CarFactory();
  }
}

/**
 * Class for a bike factory.
 * 
 * @class
 * @implements {iVehicle}
 */
class BikeFactory implements iVehicle {
  /**
   * Stops the bike.
   * 
   * @returns {void}
   */
  stop(): void {
    console.log('Bike stopped');
  }
}

/**
 * Class for a bike factory creator.
 * 
 * @class
 * @extends {VehicleFactory}
 */
export class BikeFactoryCreator extends VehicleFactory {
  /**
   * Creates a bike factory.
   * 
   * @returns {iVehicle} - The created bike factory.
   */
  createVehicle(): iVehicle {
    return new BikeFactory();
  }
}

/**
 * Class for a plane factory.
 * 
 * @class
 * @implements {iVehicle}
 */
class PlaneFactory implements iVehicle {
  /**
   * Stops the plane.
   * 
   * @returns {void}
   */
  stop(): void {
    console.log('Plane stopped');
  }
}

/**
 * Class for a plane factory creator.
 * 
 * @class
 * @extends {VehicleFactory}
 */
export class PlaneFactoryCreator extends VehicleFactory {
  /**
   * Creates a plane factory.
   * 
   * @returns {iVehicle} - The created plane factory.
   */
  createVehicle(): iVehicle {
    return new PlaneFactory();
  }
}


(() => {
  const carCreator = new CarFactoryCreator();
  const bikeCreator = new BikeFactoryCreator();
  const planeCreator = new PlaneFactoryCreator();
  planeCreator.start();
  console.log('planeCreator', planeCreator);
})();