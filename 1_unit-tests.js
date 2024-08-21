const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('whole number input',function(){
        assert.equal(10,convertHandler.getNum('10'),'whole number OK')
    });
    test('decimal numer input',function(){
        assert.equal(1.5,convertHandler.getNum('1.5'),'decimal number OK')
    });
    test('fractional input',function(){
        assert.equal(0.2,convertHandler.getNum('1/5'),'fractional input OK')
    });
    test('fractional input with a decimal',function(){
        assert.equal(1.1,convertHandler.getNum('4.4/4'),'fractional input with a decimal OK')
    });
    test('double-fraction',function(){
        assert.equal('invalid number',convertHandler.getNum('3/2/3'),'double-fraction OK')
    });
    test('no numerical',function(){
        assert.equal(1,convertHandler.getNum('gal'),'no numerical OK')
    });
    test('valid input unit',function(){
        assert.equal('gal',convertHandler.getUnit('gal'),'valid input unit OK');
        assert.equal('L',convertHandler.getUnit('L'),'valid input unit OK');
        assert.equal('km',convertHandler.getUnit('km'),'valid input unit OK');
        assert.equal('mil',convertHandler.getUnit('mil'),'valid input unit OK');
        assert.equal('lbs',convertHandler.getUnit('lbs'),'valid input unit OK');
        assert.equal('kg',convertHandler.getUnit('kg'),'valid input unit OK');
    });
    test('invalid unit error',function(){
        assert.equal('invalid unit',convertHandler.getReturnUnit('gl'),'error invalid unit OK')
    });
    test('correct return unit',function(){
        assert.equal('L',convertHandler.getReturnUnit('gal'),'valid returninput unit OK');
        assert.equal('gal',convertHandler.getReturnUnit('L'),'valid returninput unit OK');
        assert.equal('mi',convertHandler.getReturnUnit('km'),'valid returninput unit OK');
        assert.equal('km',convertHandler.getReturnUnit('mi'),'valid returninput unit OK');
        assert.equal('kg',convertHandler.getReturnUnit('lbs'),'valid returninput unit OK');
        assert.equal('lbs',convertHandler.getReturnUnit('kg'),'valid returninput unit OK');
    });
    test('spellout unit',function(){
        assert.equal('liters',convertHandler.spellOutUnit('L'),'valid spellout unit OK');
        assert.equal('gallons',convertHandler.spellOutUnit('gal'),'valid spellout unit OK');
        assert.equal('kilometers',convertHandler.spellOutUnit('km'),'valid spellout unit OK');
        assert.equal('miles',convertHandler.spellOutUnit('mi'),'valid spellout unit OK');
        assert.equal('pounds',convertHandler.spellOutUnit('lbs'),'valid spellout unit OK');
        assert.equal('kilograms',convertHandler.spellOutUnit('kg'),'valid spellout unit OK');
    });
    test('convertion L to gal',function(){
        assert.equal(1,convertHandler.convert(3.78541,'L'),'valid convertion OK');
    });
    test('convertion gal to L',function(){
        assert.equal(3.78541,convertHandler.convert(1,'gal'),'valid convertion OK');
    });
    test('convertion km to miles',function(){
        assert.equal(1,convertHandler.convert(1.60934,'km'),'valid convertion OK');
    });
    test('convertion miles to kms',function(){
        assert.equal(1.60934,convertHandler.convert(1,'mi'),'valid convertion OK');
    });
    test('convertion pounds to kg',function(){
        assert.equal(0.45359,convertHandler.convert(1,'lbs'),'valid convertion OK');
    });
    test('convertion kgs to pounds',function(){
        assert.equal(1,convertHandler.convert(0.453592,'kg'),'valid convertion OK');
    });
});