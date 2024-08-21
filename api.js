'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  app.route('/api/convert').get(function(req,res){
      console.log(req.query.input);
      let initNum=convertHandler.getNum(req.query.input);
      let initUnit=convertHandler.getUnit(req.query.input);
      let returnNum=convertHandler.convert(initNum,initUnit);
      let returnUnit=convertHandler.getReturnUnit(initUnit);
      let stringRes=convertHandler.getString(initNum,initUnit,returnNum,returnUnit);
      if(initNum==="invalid number" && returnUnit==="invalid unit")
        {res.send("invalid number and unit")}
      else if(initNum==="invalid number")
        {res.send(initNum)}
      else if(returnUnit==="invalid unit")
        {res.send(returnUnit)}
      else{
        res.send({initNum:initNum,initUnit:initUnit,returnNum:returnNum,returnUnit:returnUnit,string:stringRes});
      }  
    });
};
