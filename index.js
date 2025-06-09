// 1. Function Declaration with Default Parameter
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// 2. Function Expression with Default Parameter
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// 3. Function Returning a Function (Closure)
function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}
 