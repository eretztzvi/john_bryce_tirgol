const createPromise = (text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, 2000);
  });
};

createPromise("bla bla")
  .then((value) => value)
  .then((val) => console.log(val))
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
