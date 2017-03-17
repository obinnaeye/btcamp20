(function() {
  'use strict';

  var app = require("../app/fizzBuzz.js"),
    fizzBuzz = app.fizzBuzz;

  describe("Fizz Buzz tests ", function() {
    describe("should return an error message for an invalid/no parameter", function(){
      it("should accept only number as a parameter", function(){
        expect(fizzBuzz("7")).toBe("Invalid input! fizzBuzz accepts only a number as the parameter")
      });

      it("should accept a parameter", function(){
        expect(fizzBuzz()).toBe("No input! fizzBuzz accepts a number as the parameter")
      });
    });

    describe("should return 'Fizz', 'Buzz', 'fizzBuzz' or the number for a valid input", function(){
      it("should return `Fizz` for number divisible by 3", function() {
        expect(fizzBuzz(3)).toBe('Fizz');
      });

      it("should return `Buzz` for number divisible by 5", function() {
        expect(fizzBuzz(5)).toBe('Buzz');
      });

      it("should return `FizzBuzz` for 15", function() {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
      });

      it("should return `FizzBuzz` for 45", function() {
        expect(fizzBuzz(45)).toBe('FizzBuzz');
      });

      it("should return `FizzBuzz` for 90", function() {
        expect(fizzBuzz(90)).toBe('FizzBuzz');
      });

      it("should return `Fizz` for 63", function() {
        expect(fizzBuzz(63)).toBe('Fizz');
      });

      it("should return 7 since its indivisible by 3 and 5", function() {
        expect(fizzBuzz(7)).toBe(7);
      });

      it("should return 101 since its indivisible by 3 and 5", function() {
        expect(fizzBuzz(101)).toBe(101);
      });

      it("should return 'Fizz' for 111", function() {
        expect(fizzBuzz(111)).toBe('Fizz');
      });
    });   

  });

})();