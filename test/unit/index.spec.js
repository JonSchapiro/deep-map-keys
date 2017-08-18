
var expect  = require('chai').expect;
const deepMapKeys = require('../../index.js');

describe('::deepMapKeys', () => {
 describe('incorrect params provided', () => {
  let result;
  describe('no object provided', () => {
    it('should throw an error', () => {
      expect(() => {deepMapKeys()}).to.throw();
    });
  });

  describe('no mod provided', () => {
    it('should throw an error', () => {
      expect(() => {deepMapKeys()}).to.throw();
    });
  });

  describe('non object type provided as first argument', () => {
    it('should throw an error', () => {
      expect(() => {deepMapKeys([])}).to.throw();
    });
  });

  describe('non function type provided as second argument', () => {
    it('should throw an error', () => {
      expect(() => {deepMapKeys({}, 1)}).to.throw();
    });
  });
 });

  describe('one level deep object', () => {
    let result;

    before(() => {
      const testObject = {
        hi: true,
        bye: false,
      };
      result = deepMapKeys(testObject, key => `${key}j`);
    });

    it('should append j to each key', () => {
      expect(result.hij).to.be.true;
      expect(result.byej).to.be.false;
    });
  });

  describe('two levels deep object', () => {
    let result;

    describe('a basic nested object', () => {
      before(() => {
        const testObject = {
          a: true,
          b: {
            c: {
              d: 'fin'
            }
          }
        };

        result = deepMapKeys(testObject, key => key.toUpperCase());
      });

      it('should toUpperCase each key', () => {
        expect(result).to.eql({
          A: true,
          B: {
            C: {
              D: 'fin'
            }
          }
        });
      });
    });

    describe('a nested object with arrays of objects', () => {
      let result;

      before(() => {
        const testObject = {
          A: [{
            B: {
              C: [{
                D: 'fin'
              }]
            }
          }],
          E: true
        };

        result = deepMapKeys(testObject, key => key.toLowerCase());
      });

      it('should lowercase each of the keys of every object present', () => {
        expect(result).to.eql({
          a: [{
            b: {
              c: [{
                d: 'fin'
              }]
            }
          }],
          e: true
        });
      });
    });

    describe('an object with multidimensional arrays', () => {
      let result;

      before(() => {
        const testObject = {
          a: [[[{b: [{c: true}]}]]]
        };

        result = deepMapKeys(testObject, key => key.toUpperCase());
      });

      it('should uppercase all of the keys', () => {
        expect(result).to.eql({
          A: [[[{B: [{C: true}]}]]]
        });
      });
    });
  });

  describe('arrays', () => {
    let result;
    before(() => {
      const testArray = [{
        a: 'hi'
      }, {
        b: 'bye',
        c: {
          d: 'yo'
        }
      }];

      result = deepMapKeys(testArray, key => key.toUpperCase());
    });

    it('should uppercase each key', () => {
      expect(result).to.eql([{
        A: 'hi'
      }, {
        B: 'bye',
        C: {
          D: 'yo'
        }
      }]);
    });
  });
});