class Str {
    constructor(lower = "") {
      this.lowerName = lower.toLowerCase(); 
    }
  
    lower(input) {
      return input.toLowerCase();
    }
    
  }
  let strInstance = new Str();
  console.log(strInstance.lower('MAKAN'))
