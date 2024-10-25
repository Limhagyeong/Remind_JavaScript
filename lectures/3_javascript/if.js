'use strict';

// js는 값이 존재하는 것만으로도 true로 간주
// (0, -0, 0n, '', null, undifined, NaN은 false로 간주)

let condition = 10;
// condition = '';
if (condition) {
  console.log('참');
} else {
  console.log('거짓');
}
