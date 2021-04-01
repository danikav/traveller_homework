const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const foundLocations = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return foundLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const foundLocations = this.journeys.map((journey) => {
    return journey.endLocation;
  });
  return foundLocations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const found = this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
  return found;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const found = this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  })
  return found;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totaller = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance;
  }, 0);
  return totaller;
};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
