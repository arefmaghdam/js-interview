// Clausures

function invite(name) {
  const func = (message) => {
    console.log(`${message} ${name}`);
  };

  return func;
}

const myFunc = invite("Taha");
myFunc("Khosh Amadid");
myFunc("Welcome");
