// DOMContentLoaded => 브라우저에서 HTML 문서의 기본 구조와 내용이 완전히 로드되었을 때 발생하는 이벤트
document.addEventListener('DOMContentLoaded', () => {
  const output = document.forms.output;
  const calculator = document.querySelector('.calculator');

  calculator.addEventListener('click', (e) => {
    const value = e.target.value;

    if (
      e.target.classList.contains('num') ||
      (e.target.classList.contains('operator') &&
        !e.target.classList.contains('result'))
    ) {
      output.value += value;
    } else if (e.target.classList.contains('clear')) {
      output.value = '';
    } else if (e.target.classList.contains('result')) {
      const res = eval(output.value);
      try {
        output.value =
          res === Infinity || res === -Infinity
            ? '0으로 나눌 수 없습니다'
            : res;
      } catch (error) {
        output.value = '';
      }
    }
  });
});
