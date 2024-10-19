let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

console.log(btn1);
console.log(btn2);

btn1.onclick = function () {
  alert('Hello 프로퍼티 리스너');
};

btn2.addEventListener('click', addEvent1);

function addEvent1() {
  alert('ddEventListener1');
}

btn2.removeEventListener('click', addEvent1);

btn2.addEventListener('click', function () {
  alert('ddEventListener2');
});
