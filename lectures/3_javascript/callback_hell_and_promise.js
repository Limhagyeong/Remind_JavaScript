// function WaitAndRun() {
//   setTimeout(() => {
//     console.log('끝');
//   }, 2000);
// }

// WaitAndRun();

// function WaitAndRun2() {
//   setTimeout(() => {
//     console.log('첫번째 콜백 끝');

//     setTimeout(() => {
//       console.log('두번째 콜백 끝');

//       setTimeout(() => {
//         console.log('세번째 콜백 끝');
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }

// WaitAndRun2();

/**
 * Promise
 */
// const timeoutPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('완료');
//   }, 2000);
// });

// timeoutPromise.then((res) => {
//   console.log(res);
// });

// promise를 반환하는 함수를 만듦
// const getPromise = (seconds) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('완료');
//     }, seconds * 1000);
//   });

// getPromise(2)
//   .then((res) => {
//     console.log('---first then----');
//     console.log(res);

//     return getPromise(2);
//   })
//   .then((res) => {
//     console.log('---second then----');
//     console.log(res);
//     return getPromise(2);
//   })
//   .then((res) => {
//     console.log('---third then----');
//     console.log(res);
//   });

const getPromise = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('성공');
      reject('에러');
    }, seconds * 1000);
  });

// getPromise(2)
//   .then((res) => {
//     console.log('---first then----');
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log('--- first catch ---');
//     console.log(res);
//   })
//   .finally(() => {
//     console.log('---- final ----');
//   });

Promise.all([getPromise(1), getPromise(7), getPromise(3)])
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  });
