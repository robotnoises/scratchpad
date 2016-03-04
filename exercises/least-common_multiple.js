function lcm(n1, n2) {
  
  var multiple;
  var multiplier = 1;
  var notFound = true;
  
  function isMultiple(multiple, number) {
    return (multiple % number) === 0;
  }
  
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    
    while (notFound) {
      
      multiple = n1 * multiplier;
      
      if (isMultiple(multiple, n2)) {
        notFound = false;
      } else {
        multiplier++;
      }
    }
    return multiple;
  }
}

var leastCommonMultiple = lcm(44, 7);

console.log(leastCommonMultiple);

