// Complete the function below so that it returns "Two for me and one for you" when no arguments are passed

/* const twofer = (who) => {

      if (who == null) {
            return "Two for me and one for you";
      } else {
            return `Two for me and one for ${who}`;
      }
}; */
const twofer = (who = "you") => `Two for me and one for ${who}`;

console.log(twofer("Fran")); // -> "Two for me and one for Fran"
console.log(twofer()); // -> "Two for me and one for you"const twofer = (who) => {
console.log(twofer()); // -> "Two for me and one for you"

