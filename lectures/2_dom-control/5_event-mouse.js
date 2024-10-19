let rectangle = document.querySelector('#rectangle');
console.log(rectangle);

rectangle.addEventListener('mousedown', function () {
  console.log('mousedown');
});

rectangle.addEventListener('mouseup', function () {
  console.log('mouseup');
});

rectangle.addEventListener('mouseenter', function () {
  console.log('mouseenter');
});

rectangle.addEventListener('mouseleave', function () {
  console.log('mouseleave');
});

rectangle.addEventListener('mousemove', function () {
  console.log('mousemove');
});
