// DOMContentLoaded => 브라우저에서 HTML 문서의 기본 구조와 내용이 완전히 로드되었을 때 발생하는 이벤트
document.addEventListener('DOMContentLoaded', () => {
  const output = document.forms.output;
  const calculator = document.querySelector('.calculator');

  calculator.addEventListener('click', (e) => {
    const value = e.target.value;

    if (
      e.target.classList.contains('num') ||
      e.target.classList.contains('dot') ||
      (e.target.classList.contains('operator') &&
        !e.target.classList.contains('result'))
    ) {
      output.value += value;
    } else if (e.target.classList.contains('clear')) {
      output.value = '';
    } else if (e.target.classList.contains('result')) {
      try {
        // 계산 전 입력 유효성 검사
        if (!isValidExpression(output.value)) {
          throw new Error('입력 오류');
        }
        // 계산
        const res = eval(output.value);
        // 0으로 나눴을 때
        output.value =
          res === Infinity || res === -Infinity
            ? '0으로 나눌 수 없습니다'
            : res;
      } catch (error) {
        output.value =
          error.message === '계산 오류' ? '계산 오류' : '입력 오류';
      }
    }
  });

  function isValidExpression(expression) {
    // 연산자의 연속성을 체크
    // 숫자, +, -, *, /, ., 괄호
    return (
      /^[0-9+\-*/().]+$/.test(expression) && !/[\+\-*/]{2,}/.test(expression)
    );
  }
});
