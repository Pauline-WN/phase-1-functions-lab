// Code your solution in this file!
// Function to calculate the distance from Scuber's headquarters in blocks
function distanceFromHqInBlocks(someValue) {
    // Assuming headquarters is at 42nd Street
    const headquarters = 42;
    return Math.abs(someValue - headquarters);
  }
  
  // Function to calculate the distance from Scuber's headquarters in feet
  function distanceFromHqInFeet(someValue) {
    // Use the distanceFromHqInBlocks function to get the distance in blocks
    const blocks = distanceFromHqInBlocks(someValue);
    // Each block is 264 feet long
    return blocks * 264;
  }
  
  // Function to calculate the number of feet traveled between two blocks
  function distanceTravelledInFeet(start, destination) {
    // Calculate the distance in blocks and then convert to feet
    const blocks = Math.abs(destination - start);
    return blocks * 264;
  }
  
  // Function to calculate the fare price based on the distance traveled
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    // If distance is 400 feet or less, fare is free
    if (distance <= 400) {
      return 0;
    }
    // If distance is more than 400 feet but less than or equal to 2000 feet, fare is 2 cents per foot
    else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    }
    // If distance is more than 2000 feet but less than or equal to 2500 feet, fare is $25
    else if (distance > 2000 && distance <= 2500) {
      return 25;
    }
    // If distance is greater than 2500 feet, fare is not allowed
    else {
      return 'cannot travel that far';
    }
  }
  
