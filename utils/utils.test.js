const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      const result = utils.add(33, 11);

      expect(result).toBe(44).toBeA('number');
      // if (result != 44) {
      //   throw new Error(`Expected 44, but got ${result}`);
      // }
    });
  });


  it('should square a number', () => {
    const result = utils.square(11);


    expect(result).toBe(121).toBeA('number');
  });

  it('should expect some values', () => {
    // expect(12).toNotBe(12);

    expect({name: 'Daniyar'}).toEqual({name: 'Daniyar'});

    expect([2, 3, 4]).toExclude(1);

    // expect({
    //   name: 'Andrew',
    //   age: 25,
    //   location: 'Philadelphia'
    // }).toInclude({
    //   age1: 25
    // })
  });

  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });
});


//should verify first and last names are set
it('should verify first and last names are set', () => {
  const user = {
    location: 'Romania',
    age: 25
  };

  const fullName = 'Michael Simon';
  utils.setName(user, fullName);

  expect(user.firstName).toExist();
  expect(user.lastName).toExist()

  expect(user).toInclude({
    firstName: 'Michael',
    lastName: 'Simon'
  });

  // expect(user.firstName).toBe('Michael').toBeA('string');
  // expect(user.lastName).toBe('Simon').toBeA('string');

})
