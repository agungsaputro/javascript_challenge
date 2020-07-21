class Str {
    constructor(upper="") {
      this.upperName = upper.toUpperCase();
    }
  
    upper(input) {
      return input.toUpperCase();
    }
  }
  let strInstance = new Str();
  console.log(strInstance.upper('malam'))
