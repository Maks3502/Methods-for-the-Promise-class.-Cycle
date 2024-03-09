function delayedPromise(value, delay) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(value), delay);
    });
  }
  
  const promises = [
    delayedPromise("Перший", 2000),
    delayedPromise("Другий", 1000),
    delayedPromise("Третій", 3000),
    delayedPromise("Четвертий", 4000),
    delayedPromise("П'ятий", 5000),
  ];
  
  Promise.all(promises).then((results) => {
    console.log("Результати:", results);
  });

//   2

function randomDelay(value) {
    return new Promise((resolve) => {
      const delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
      setTimeout(() => resolve(value), delay);
    });
  }
  
  const promisess = [
    randomDelay("Перший"),
    randomDelay("Другий"),
    randomDelay("Третій"),
    randomDelay("Четвертий"),
    randomDelay("П'ятий"),
  ];
  
  Promise.race(promisess).then((result) => {
    console.log("Найшвидший результат:", result);
  });