import WordHandler from "./WordHandler";
export default function gameLogic(state, action) {
  if (action.type === "char") {
    if ((state.allwords.length + 1) % 5 !== 0) {
      return {
        ...state,
        allwords: state.allwords + action.value,
      };
    } else {
      if (
        WordHandler((state.allwords + action.value).slice(-5).toLowerCase())
      ) {
        console.log("valid word was entered!");
        return {
          ...state,
          allwords: state.allwords + action.value,
        };
      } else {
        console.log("unvalid word! -->need delete now");
        return {
          ...state,
          allwords: state.allwords.slice(0, -4),
        };
      }
    }
  }
  if (action.type === "del") {
    return { ...state, allwords: state.allwords.slice(0, -1) };
  }
}
