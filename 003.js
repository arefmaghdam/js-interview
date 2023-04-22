const obj = {
  name: "Jorien",
  print: () => {
    console.log(this.name);
  },
};

function invite(indicator, message) {
  console.log(indicator, message, this);
}

invite("********", "Hello Jorien");
invite.call(obj, "********", "Hello Jorien");
invite.apply(obj, ["********", "Hello Jorien"]);

// invite.call(obj, "********", "Hello Jorien");
// invite.call(obj, "********", "Hello Jorien");
// invite.call(obj, "********", "Hello Jorien");
// invite.call(obj, "********", "Hello Jorien");
// invite.call(obj, "********", "Hello Jorien");
// invite.call(obj, "********", "Hello Jorien");
// invite.call(obj, "********", "Hello Jorien");
// invite.call(obj, "********", "Hello Jorien");
const boundedInvite = invite.bind(obj);
boundedInvite("********", "Hello Jorien");
boundedInvite("********", "Hello Jorien");
boundedInvite("********", "Hello Jorien");
boundedInvite("********", "Hello Jorien");
boundedInvite("********", "Hello Jorien");
boundedInvite("********", "Hello Jorien");
boundedInvite("********", "Hello Jorien");
boundedInvite("********", "Hello Jorien");
boundedInvite("********", "Hello Jorien");