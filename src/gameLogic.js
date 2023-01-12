import WordHandler from "./WordHandler";
import wordPainting from "./wordPainting";
export default function gameLogic(state, action) {
  // updates the object with => letter:color
  if (action.type === "wordwasentered") {
    return {
      ...state,
      leterwordstyle: toObject(
        state.allwords.split(""),
        state.g1.concat(state.g2, state.g3, state.g4, state.g5, state.g6)
      ),
    };
  }
  if (action.type === "char") {
    //if chat and not yet a word
    if ((state.allwords.length + 1) % 5 !== 0) {
      return {
        ...state,
        allwords: state.allwords + action.value,
        leterwordstyle: toObject(
          state.allwords.split(""),
          state.g1.concat(state.g2, state.g3, state.g4, state.g5, state.g6)
        ),
      };
    } else {
      // checking word validity
      if (
        WordHandler((state.allwords + action.value).slice(-5).toLowerCase())
      ) {
        console.log("valid word was entered!");

        if (state.allwords.length + 1 === 5) {
          return {
            ...state,
            allwords: state.allwords + action.value,
            g1: [
              ...wordPainting(
                (state.allwords + action.value).slice(-5).toLowerCase()
              ),
            ],
          };
        }
        if (state.allwords.length + 1 === 10) {
          return {
            ...state,
            leterwordstyle: toObject(
              state.allwords.split(""),
              state.g1.concat(state.g2, state.g3, state.g4, state.g5, state.g6)
            ),
            allwords: state.allwords + action.value,
            g2: [
              ...wordPainting(
                (state.allwords + action.value).slice(-5).toLowerCase()
              ),
            ],
          };
        }
        if (state.allwords.length + 1 === 15) {
          return {
            ...state,
            leterwordstyle: toObject(
              state.allwords.split(""),
              state.g1.concat(state.g2, state.g3, state.g4, state.g5, state.g6)
            ),
            allwords: state.allwords + action.value,
            g3: [
              ...wordPainting(
                (state.allwords + action.value).slice(-5).toLowerCase()
              ),
            ],
          };
        }
        if (state.allwords.length + 1 === 20) {
          return {
            ...state,
            leterwordstyle: toObject(
              state.allwords.split(""),
              state.g1.concat(state.g2, state.g3, state.g4, state.g5, state.g6)
            ),
            allwords: state.allwords + action.value,
            g4: [
              ...wordPainting(
                (state.allwords + action.value).slice(-5).toLowerCase()
              ),
            ],
          };
        }
        if (state.allwords.length + 1 === 25) {
          return {
            ...state,
            leterwordstyle: toObject(
              state.allwords.split(""),
              state.g1.concat(state.g2, state.g3, state.g4, state.g5, state.g6)
            ),
            allwords: state.allwords + action.value,
            g5: [
              ...wordPainting(
                (state.allwords + action.value).slice(-5).toLowerCase()
              ),
            ],
          };
        }
        if (state.allwords.length + 1 === 30) {
          return {
            ...state,
            leterwordstyle: toObject(
              state.allwords.split(""),
              state.g1.concat(state.g2, state.g3, state.g4, state.g5, state.g6)
            ),
            allwords: state.allwords + action.value,
            g6: [
              ...wordPainting(
                (state.allwords + action.value).slice(-5).toLowerCase()
              ),
            ],
          };
        }
      }
      //   word not valid!
      else {
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

function toObject(keys, values) {
  const obj = {};

  keys.forEach((element, index) => {
    if (obj[element]) {
      if (values[index] === "gray") {
        return;
      }
    }
    obj[element] = values[index];
  });

  return obj;
}
