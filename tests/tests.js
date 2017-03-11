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

  describe("Determine the sequence of an array of numbers: ", function() {

    describe("Case for an empty array", function() {

      it("should return 0 for an empty array", function() {
        expect(aritGeo([])).toEqual(0);
      });

    });

    describe("Case for non array", function() {

      it("should return accept only array input", function() {
        expect(aritGeo("[]")).toEqual("Invalid input! aritGeo accepts only an array as a parameter");
      });

    });

    describe("Case for an arithmetic sequence", function() {

      it("should return `Arithmetic` for [2, 4, 6, 8, 10]", function() {
        expect(aritGeo([2, 4, 6, 8, 10])).toEqual('Arithmetic');
      });

      it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", function() {
        expect(aritGeo([5, 11, 17, 23, 29, 35, 41])).toEqual('Arithmetic');
      });

      it("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", function() {
        expect(aritGeo([15, 10, 5, 0, -5, -10])).toEqual('Arithmetic');
      });

    });

    describe("Case for a geometric sequence", function() {

      it("should return `Geometric` for [2, 6, 18, 54, 162]", function() {
        expect(aritGeo([2, 6, 18, 54, 162])).toEqual('Geometric');
      });

      it("should return `Geometric` for [0.5, 3.5, 24.5, 171.5]", function() {
        expect(aritGeo([0.5, 3.5, 24.5, 171.5])).toEqual('Geometric');
      });

      it("should return `Geometric` for [−128, 64, −32, 16, −8]", function() {
        expect(aritGeo([-128, 64, -32, 16, -8])).toEqual('Geometric');
      });

    });

    describe("Case for neither arithmetic nor geometric sequence", function() {

      it("should return -1 for [1, 2, 3, 5, 8]", function() {
        expect(aritGeo([1, 2, 3, 5, 8])).toEqual(-1);
      });

      it("should return -1 for [1, 3, 6, 10, 15]", function() {
        expect(aritGeo([1, 3, 6, 10, 15])).toEqual(-1);
      });

      it("should return -1 for [1, 8, 27, 64, 125]", function() {
        expect(aritGeo([1, 8, 27, 64, 125])).toEqual(-1);
      });
      
    });
  });

})();