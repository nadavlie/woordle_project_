import App from "./App";
export default function wordPainting(word, wordpicked) {
  let a = wordpicked;

  let b = a.split("");
  let results = [];
  for (let w = 0; w < 5; w++) {
    if (word[w] === b[w]) {
      b[w] = "!";
      results.push("green");
    } else if (b.includes(word[w])) {
      b[a.indexOf(word[w])] = "!";
      results.push("yellow");
    } else {
      results.push("gray");
    }
  }

  // if (results.filter(each => each === "green").length === 5) {
  //   return ["win"];
  // }

  return results;
}
