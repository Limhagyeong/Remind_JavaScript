'use strict';

// 범위 지정이 불가하고 값이 정확히 맞아야함

let score = prompt('점수를 입력하세요');
console.log(score / 10);

switch (
  Math.floor(score / 10) // 실수보다 작은 정수 중 가장 큰 값 반환
) {
  case 10:
  case 9:
    console.log('A학점');
    break;
  case 8:
    console.log('B학점');
    break;
  case 7:
    console.log('C학점');
    break;
  case 6:
    console.log('D학점');
    break;
  default:
    console.log('F학점');
}
