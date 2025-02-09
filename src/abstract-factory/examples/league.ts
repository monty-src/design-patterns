
/**
 * Abstract class for a league group.
 * 
 * @abstract
 * @class
 */
abstract class LeagueGroups {
  /**
   * Adds a group to the league.
   * 
   * @param group - The group to add.
   */
  abstract addGroup(group: string): void;
}

/**
 * Abstract class for a league region.
 * 
 * @abstract
 * @class
 */
abstract class LeagueRegions {
  /**
   * Adds a region to the league.
   * 
   * @param region - The region to add.
   */
  abstract addRegion(region: string): void;
}

/**
 * Abstract class for a league district.
 * 
 * @abstract
 * @class
 */
abstract class LeagueDistricts {
  /**
   * Adds a district to the league.
   * 
   * @param district 
   */
  abstract addDistrict(district: string): void;
}

/**
 * Abstract class for a league division.
 * 
 * @abstract
 * @class
 */
abstract class LeagueDivisions {
  /**
   * Adds a division to the league.
   * 
   * @param division - The division to add.
   */
  abstract addDivision(division: string): void;
}

/**
 * Abstract class for a league conference.
 * 
 * @abstract
 * @class
 */
abstract class LeagueConference {
  /**
   * Adds a conference to the league.
   * 
   * @param conference - The conference to add.
   */
  abstract addConference(conference: string): void;
}

/**
 * Abstract class for a league classification.
 * 
 * @abstract
 * @class
 */
abstract class LeagueClassification {
  /**
   * Adds a classification to the league.
   * 
   * @param classification - The classification to add.
   */
  abstract addClassification(classification: string): void;
}

/**
 * Abstract class for a league factory.
 * 
 * @abstract
 * @class
 */
abstract class LeagueFactory {
  /**
   * Creates a league group.
   * 
   * @returns {LeagueGroups} - The created league group.
   */
  abstract createLeagueGroups(): LeagueGroups;

  /**
   * Creates a league region.
   * 
   * @returns {LeagueRegions} - The created league region.
   */
  abstract createLeagueRegions(): LeagueRegions;

  /**
   * Creates a league district.
   * 
   * @returns {LeagueDistricts} - The created league district.
   */
  abstract createLeagueDistricts(): LeagueDistricts;

  /**
   * Creates a league division.
   * 
   * @returns {LeagueDivisions} - The created league division.
   */
  abstract createLeagueDivisions(): LeagueDivisions;

  /**
   * Creates a league conference.
   * 
   * @returns {LeagueConference} - The created league conference.
   */
  abstract createLeagueConferences(): LeagueConference;

  /**
   * Creates a league classification.
   * 
   * @returns {LeagueClassification} - The created league classification.
   */
  abstract createLeagueClassifications(): LeagueClassification;
}

/**
 * Class for a league classification.
 * 
 * @class
 * @extends {LeagueClassification}
 */
class NorthCarolinaLeagueClassification extends LeagueClassification {
  /**
   * Adds a classification to the North Carolina League Classification.
   * 
   * @param classification - The classification to add.
   */
  addClassification(classification: string): void {
    console.log(`Adding classification ${classification} to North Carolina League Classification`);
  }
}

/**
 * Class for a league region.
 * 
 * @class
 * @extends {LeagueRegions}
 */
class NorthCarolinaLeagueRegions extends LeagueRegions {
  /**
   * Adds a region to the North Carolina League Regions.
   * 
   * @param region - The region to add.
   */
  addRegion(region: string): void {
    console.log(`Adding region ${region} to North Carolina League Regions`);
  }
}

/**
 * Class for a league conference.
 * 
 * @class
 * @extends {LeagueConference}
 */
class NorthCarolinaLeagueConference extends LeagueConference {
  /**
   * Adds a conference to the North Carolina League Conference.
   * 
   * @param conference - The conference to add.
   */
  addConference(conference: string): void {
    console.log(`Adding conference ${conference} to North Carolina League Conference`);
  }
}

/**
 * Class for a league factory.
 * 
 * @class
 * @extends {LeagueFactory}
 */
class NorthCarolinaLeagueFactory extends LeagueFactory {
  /**
   * Creates a league group.
   * 
   * @returns {LeagueGroups} - The created league group.
   */
  createLeagueGroups(): LeagueGroups {
    throw new Error('Method not implemented.');
  }

  /**
   * Creates a league division.
   * 
   * @returns {LeagueDivisions} - The created league division.
   */
  createLeagueDivisions(): LeagueDivisions {
    throw new Error('Method not implemented.');
  }

  /**
   * Creates a league district.
   * 
   * @returns {LeagueDistricts} - The created league district.
   */
  createLeagueDistricts(): LeagueDistricts {
    throw new Error('Method not implemented.');
  }

  /**
   * Creates a league regions.
   * 
   * @returns {LeagueRegions} - The created league regions.
   */
  createLeagueRegions(): LeagueRegions {
    return new NorthCarolinaLeagueRegions();
  }

  /**
   * Creates a league conferences.
   * 
   * @returns {LeagueConference} - The created league conferences.
   */
  createLeagueConferences(): LeagueConference {
    return new NorthCarolinaLeagueConference();
  }

  /**
   * Creates a league classifications.
   * 
   * @returns {LeagueClassification} - The created league classifications.
   */
  createLeagueClassifications(): LeagueClassification {
    return new NorthCarolinaLeagueClassification();
  }
}

/**
 * Class for a league group.
 * 
 * @class
 * @extends {LeagueGroups}
 */
class NewJerseyLeagueGroup extends LeagueGroups {
  /**
   * Adds a group to the New Jersey League Group.
   * 
   * @param group - The group to add.
   */
  addGroup(group: string): void {
    console.log(`Adding group ${group} to New Jersey League Group`);
  }
}

/**
 * Class for a league district.
 * 
 * @class
 * @extends {LeagueDistricts}
 */
class NewJerseyLeagueDistricts extends LeagueDistricts {
  /**
   * Adds a district to the New Jersey League Districts.
   * 
   * @param district - The district to add.
   */
  addDistrict(district: string): void {
    console.log(`Adding district ${district} to New Jersey League Districts`);
  }
}

/**
 * Class for a league factory.
 * 
 * @class
 * @extends {LeagueFactory}
 */
class NewJerseyLeagueFactory extends LeagueFactory {
  /**
   * Creates a league regions.
   * 
   * @returns {LeagueRegions} - The created league regions.
   */
  createLeagueRegions(): LeagueRegions {
    throw new Error('Method not implemented.');
  }

  /**
   * Creates a league divisions.
   * 
   * @returns {LeagueDivisions} - The created league divisions.
   */
  createLeagueDivisions(): LeagueDivisions {
    throw new Error('Method not implemented.');
  }

  /**
   * Creates a league conferences.
   * 
   * @returns {LeagueConference} - The created league conferences.
   */
  createLeagueConferences(): LeagueConference {
    throw new Error('Method not implemented.');
  }

  /**
   * Creates a league classifications.
   * 
   * @returns {LeagueClassification} - The created league classifications.
   */
  createLeagueClassifications(): LeagueClassification {
    throw new Error('Method not implemented.');
  }

  /**
   * Creates a league groups.
   * 
   * @returns {LeagueGroups} - The created league groups.
   */
  createLeagueGroups(): LeagueGroups {
    return new NewJerseyLeagueGroup();
  }

  /**
   * Creates a league districts.
   * 
   * @returns {LeagueDistricts} - The created league districts.
   */
  createLeagueDistricts(): LeagueDistricts {
    return new NewJerseyLeagueDistricts();
  }
}

(() => {
  const ncLeagueFactory = new NorthCarolinaLeagueFactory();
  const ncLeagueClassification = ncLeagueFactory.createLeagueClassifications();
  const ncLeagueConference = ncLeagueFactory.createLeagueConferences();
  ncLeagueClassification.addClassification("1A");
  ncLeagueConference.addConference("Big East");

  const njLeagueFactory = new NewJerseyLeagueFactory();
  const njLeagueGroup = njLeagueFactory.createLeagueGroups();
  njLeagueGroup.addGroup('1A');
})()