/*
E = T | ( E [+/-*] E )
T = 0-9
*/
var U = require('./util')

function E () {
  if (Math.random() < 0.5) {
    return T()
  } else {
    return '(' + E() + U.randSelect(['+', '-', '*', '/']) + E() + ')'
  }
}

function T () {
  return U.randSelect(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
}

var e = E()
console.log(e, '=', eval(e))
