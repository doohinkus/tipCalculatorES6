const expect = require('chai').expect;
const assert = require('chai').assert;



describe('App', function(){
  const app = require('../src/js/functions');
  describe('multiply', function (){
    it('should multiply two numbers', function(){
      expect(app.multiply(3,4)).to.equal(12);
      expect(app.multiply(3,4)).not.to.equal(13);
    });
  });
  describe('divide', function (){
    it('should divide two numbers', function(){
      expect(app.divide(12,4)).to.equal(3);
      expect(app.divide(12,4)).not.to.equal(10);
    });
  });
  describe('add', function (){
    it('should add two numbers', function(){
      expect(app.add(12,4)).to.equal(16);
      expect(app.add(12,4)).not.to.equal(10);
    });
  });
  describe('formatDecimals', function (){
    it('should formatDecimals two digits', function(){
      const decimalPlaces = parseFloat(12).toFixed(2);
      expect(app.formatDecimals(12)).equal(decimalPlaces);
      expect(app.formatDecimals(12)).not.to.equal(12);
    });
  });

});
