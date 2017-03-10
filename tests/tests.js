(function() {
  'use strict';

  var app = require("../app/index.js"),
    findMinMax = app.findMinMax,
    fizzBuzz = app.fizzBuzz,
    aritGeo = app.aritGeo;

  describe('Min-Max Numbers in a List: ', function () {

    describe('Should throw error for invalid/no input', function () {

      it('should accept only an array', function () {
        expect(findMinMax('[1, 2, 3, 4]')).toThrow(new Error("Invalid input! Input should be an array."));
      });

      it('should accept array of numbers', function () {
        expect(findMinMax([3, 6, "8"])).toThrow(new Error("Invalid input! Input should be an array of numbers."));
      });

      it('should accept array of numbers', function () {
        expect(findMinMax(6)).toThrow(new Error("Invalid input! Input should be an array."));
      });

      it('should accept a parameter', function () {
        expect(findMinMax()).toThrow(new Error("No parameter! findMinMax accepts an array of numbers as the only parameter."));
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

})();