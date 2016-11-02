var anyStr = process.argv.slice(2);
var concatString = [];

var charPosiObj = {};

for(var i = 0; i < anyStr.length; i += 1) {
  concatString += anyStr[i];
}

var usableArray = concatString.split('');

function characterPositioner(string) {
  for (var i = 0; i < usableArray.length; i += 1) {
      if (!charPosiObj[usableArray[i]]) {
        charPosiObj[usableArray[i]] = [i];
      } else {
        charPosiObj[usableArray[i]].push(i);
        // charPosiObj[usableArray[i]] += charPosiObj[usableArray[i]].push(i);
      }
  }
  return charPosiObj;
}
//   for (var letter of string) {
//     if (!charPosiObj[letter]) {
//       charPosiObj[letter] = 1;
//     } else {
//       charPosiObj[letter] += 1;
//     }
//   }
// }

console.log(characterPositioner(usableArray));
// console.log(charPosiObj);
// console.log(usableArray);
// console.log(concatString);