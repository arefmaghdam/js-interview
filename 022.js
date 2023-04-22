// JavaScript Immediately Invoked Function Expression (IIFE)

let val = 1;

const ENVIRONMENT1 = () => {
  if (val == 1) return "dev";
  else return "prod";
};

const ENVIRONMENT2 = (() => {
  if (val == 1) return "dev";
  else return "prod";
})();

console.log(`
ENVIRONMENT1
${typeof ENVIRONMENT1}
${ENVIRONMENT1}
`);

console.log(`
ENVIRONMENT2
${typeof ENVIRONMENT2}
${ENVIRONMENT2}
`);