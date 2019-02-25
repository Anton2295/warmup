module.exports = function warmup(temperature) {
  
  let rezult = 0;
  
  const coefficient = 9/5;
  const zeroPoint = 32;

  rezult = coefficient * temperature + zeroPoint;
  
  return rezult;

};
