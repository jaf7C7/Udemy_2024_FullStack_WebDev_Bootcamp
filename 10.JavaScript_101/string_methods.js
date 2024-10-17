/* String Methods */

const str = " abcdefg";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
str.search(" "); // 0
str.slice(1, 4); // 'abc'
str.substr(1, 4); // 'abcd'
str.replace("abc", "XXX"); // ' XXXdefg'
str.toUpperCase(); // ' ABCDEFG'
str.toLowerCase(); // ' abcdefg'
str.trim(); // 'abcdefg'
str.split(); // [' ', 'a', 'b', ..., 'g']
