function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    let match=input.match(/[A-Za-z]/);
    let firstI
    if(match!==null){
    firstI=input.indexOf(match[0]);
    }else{firstI=input.length}
    if(firstI===0){return 1}
    if(input.split("/").length>2){return "invalid number"};
    numStr=input.slice(0,firstI);
    result=parseFloat(eval(numStr).toFixed(5));
    return result==="undefined" ? "invalid number" : result;
    
  };
  
  this.getUnit = function(input) {
    let result;
    let match=input.match(/[A-Za-z]/);
    let firstI=input.indexOf(match[0]);
    result=input.slice(firstI,input.length).toLowerCase();
    return result==="l" ? "L":result;
  };
  

  this.getReturnUnit = function(initUnit) {
    let result;
    switch(initUnit){
      case "gal":
        result="L";
        break;
      case "L":
        result="gal";
        break;
      case "mi":
        result="km";
        break;
      case "km":
        result="mi";
        break;
      case "lbs":
        result="kg";
        break;
      case "kg":
        result="lbs";
        break;
      default:result="invalid unit"
    }
    return result;
  };

  //output full unit name
  this.spellOutUnit = function(unit) {
    let result;
    switch(unit){
      case "gal":
        result="gallons";
        break;
      case "L":
        result="liters";
        break;
      case "mi":
        result="miles";
        break;
      case "km":
        result="kilometers";
        break;
      case "lbs":
        result="pounds";
        break;
      case "kg":
        result="kilograms";
        break;
      default:result="invalid unit"
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch(initUnit){
      case "gal":
        result=initNum*galToL;
        break;
      case "L":
        result=initNum/galToL;;
        break;
      case "mi":
        result=initNum*miToKm;;
        break;
      case "km":
        result=initNum/miToKm;
        break;
      case "lbs":
        result=initNum*lbsToKg;
        break;
      case "kg":
        result=initNum/lbsToKg;
        break;
      default:result="invalid unit";
      return result;
    }
    return parseFloat(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    result=initNum+" "+this.spellOutUnit(initUnit)+" converts to "+returnNum+" "+this.spellOutUnit(returnUnit);
    return result;
  };
  
}

module.exports = ConvertHandler;
