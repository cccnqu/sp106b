# 系統程式簡介

* [nand2tetris -- Assembler](http://www.nand2tetris.org/lectures/PDF/lecture%2006%20assembler.pdf)

## 語法理論

* [人工智慧 -- 語言處理](https://mdbookspace.com/view/ai/linguistics.md)
* [計算語言學](https://mdbookspace.com/view/ccc/NLP.md)

```
// === EBNF Grammar =====
// E=T ([+-] T)*
// T=F ([*/] F)?
// T=[0-9] | (E)
```

## 語言生成

運算式生成

```
$ gcc gexp.c -o gexp.o
$ ./gexp.o
65*(2-6*6+9*3)
(2)
1/1
7
0*0
2*5
7/9
4*4
4*8
((3*(0*(6*(0*1)-2/6-(9/7)/9))))/3
```

