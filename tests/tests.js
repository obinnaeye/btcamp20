(function() {
  'use strict';

  var app = require("../app/index.js"),
    findMinMax = app.findMinMax,
    fizzBuzz = app.fizzBuzz,
    aritGeo = app.aritGeo;

  describe('Min-Max Numbers in a List: ', function () {

    describe('Should throw error for invalid/no input', function () {

      it('should accept only an array', function () {
        expect(findMinMax('[1, 2, 3, 4]')).toEqual("Invalid input! Input should be an array.");
      });

      it('should accept array of numbers', function () {
        expect(findMinMax([3, 6, "8"])).toEqual("Invalid input! Input should be an array of numbers.");
      });

      it('should accept array of numbers', function () {
        expect(findMinMax(6)).toEqual("Invalid input! Input should be an array.");
      });

      it('should accept a parameter', function () {
        expect(findMinMax()).toEqual("No parameter! findMinMax accepts an array of numbers as the only parameter.");
      });
    });

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [-4, 6] for [6, 4, -4]', function () {
        expect(findMinMax([6, 4, -4])).toEqual([-4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', 
        function () {

            it('should return [4] for [4, 4, 4, 4]', function () {
                expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
            });

            it('should return [] for []', function () {
                expect(findMinMax([])).toEqual([]);
            });

            it('should return [0] for [0]', function () {
                expect(findMinMax([0])).toEqual([0]);
            });
    });

  });

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