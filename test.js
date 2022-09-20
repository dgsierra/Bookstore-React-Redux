const defaultState = {
  login: false,
};

const reducer = (state = defaultState) => {
  // Change code below this line
  if (true) {
    const newState = { ...defaultState, login: true };
    console.log(newState);
    return newState;
  } return state;
  // Change code above this line
};

reducer();

console.log(defaultState);
