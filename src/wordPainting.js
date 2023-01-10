export default function wordPainting(word) {
  let a = "globe";

  let b = a.split("");
  let results = [];
  for (let w = 0; w < 5; w++) {
    console.log(`b-->${b}\nword[w]-->${word[w]}`);
    if (word[w] === b[w]) {
      b[w] = "!";
      results.push("inplace");
    } else if (b.includes(word[w])) {
      b[a.indexOf(word[w])] = "!";
      results.push("notinplace");
    } else {
      results.push("notexist");
    }
  }
  console.log(results);
  return results;
}
