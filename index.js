const receivesAFunction = (cb) => {
  cb();
};

const returnsANamedFunction = () => {
  return function myFunc() {
    return null;
  };
};

const returnsAnAnonymousFunction = () => {
  return function () {
    return null;
  };
};
