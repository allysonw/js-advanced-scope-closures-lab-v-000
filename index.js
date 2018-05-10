function produceDrivingRange(blockRange) {
  return function (startBlock, endBlock) {
    const startBlockNumber = parseInt(startBlock.match(/\d*/));
    const endBlockNumber = parseInt(endBlock.match(/\d*/));
    const blocksTravelled = Math.abs(startBlockNumber - endBlockNumber)

    if (blocksTravelled < blockRange) {
      return `within range by ${blockRange - blocksTravelled}`;
    }
    else {
      return `${blocksTravelled - blockRange} blocks out of range`;
    }
  };
}

function produceTipCalculator(percentage) {
  return function(mealPrice) {
    return mealPrice * percentage;
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId;
    }
  }
}
