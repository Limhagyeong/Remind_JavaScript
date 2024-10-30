/**
 *  immutable object
 */

const hg = {
  name: '임하경',
  year: 27,

  get age() {
    return new Date().getFullYear - this.year;
  },

  set age(age) {
    return new Date().getFullYear - this.age;
  },
};

/**
 * Extensible
 */
console.log(Object.isExtensible(hg));
hg['blahblah'] = 'blahblah';
console.log(hg);

Object.preventExtensions(hg);
console.log(Object.isExtensible(hg));

// hg['blahblah2'] = 'blahblah';
// console.log(hg);

delete hg['blahblah'];
console.log(hg);

/**
 * seal
 */

const hg2 = {
  name: '임하경',
  year: 27,

  get age() {
    return new Date().getFullYear - this.year;
  },

  set age(age) {
    return new Date().getFullYear - this.age;
  },
};

console.log(hg2);
console.log(Object.isSealed(hg2));

Object.seal(hg2);
console.log(Object.isSealed(hg2));

hg2['blahblah'] = 'blahblah';
console.log(hg2);

delete hg2['name'];
console.log(hg2);
