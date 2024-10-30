const getPromise = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('완료');
      reject('에러');
    }, seconds * 1000);
  });

async function runner() {
  try {
    const res = await getPromise(2);
    console.log(res);

    const res2 = await getPromise(3);
    console.log(res2);
  } catch (e) {
    console.log(e);
  }
}

runner();
