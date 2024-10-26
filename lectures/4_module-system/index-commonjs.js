// commonJS 는 노드 환경을 위해 만들어진 모듈 시스템
// ES module은 자바스크립트 모듈 시스템

// const { perfectScore, avg, sum, subtract } = require('./math-commonjs');

// console.log('perfectScore: ', perfectScore);
// console.log('sum: ', sum(90, 100));
// console.log('avg: ', avg(90, 100));
// console.log('subtract: ', subtract(90, 100));

const math = require('./math-commonjs');

console.log('perfectScore: ', math.perfectScore);
console.log('sum: ', math.sum(90, 100));
console.log('avg: ', math.avg(90, 100));
console.log('subtract: ', math.subtract(90, 100));

//  node환경에서 ES 모듈 방식 사용 하려면  package.json 설정
