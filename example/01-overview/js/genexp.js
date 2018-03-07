var U = require('./util')

// === BNF Grammar =====
// E = T [+-*/] E | T
// T = [0-9] | (E)

function E () {
  if (U.randInt(1, 10) <= 5) {
    T()
    U.print(U.randChar('+-*/'))
    E()
  } else {
    T()
  }
}

function T () {
  if (U.randInt(1, 10) < 7) {
    U.print(U.randChar('0123456789'))
  } else {
    U.print('(')
    E()
    U.print(')')
  }
}

for (var i = 0; i < 10; i++) {
  E()
  U.print('\n')
}
