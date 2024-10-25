'use strict';

// continue
let text = '';

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i; // 첫 시작이 빈 문자열 이기 때문에 문자열 형식으로 결합됨
}

console.log(text);
