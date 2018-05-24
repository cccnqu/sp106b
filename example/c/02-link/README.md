# ld -- Gcc Linker

## 直接編譯連結

```
$ gcc main.c sum.c -o run.o
$ ./run.o
```

## 產生組合語言

```
$ gcc -S main.c -o main.s
$ gcc -S sum.c -o sum.s
```

## 組譯後連結

```
$ gcc main.c sum.s -o run.o
$ ./run.o
sum(10)=55
```

## 產生目的檔

```
$ gcc -c sum.c -o sum.o
$ gcc -c main.c -o main.o
```

## 連結目的檔

```
$ gcc main.o sum.o -o run.o
$ ./run.o
```

## 反組譯

```
$ objdump -d sum.o

sum.o:  file format Mach-O 64-bit x86-64

Disassembly of section __TEXT,__text:
_sum:
       0:       55      pushq   %rbp
       1:       48 89 e5        movq    %rsp, %rbp
       4:       89 7d fc        movl    %edi, -4(%rbp)
       7:       c7 45 f4 00 00 00 00    movl    $0, -12(%rbp)
       e:       8b 45 f4        movl    -12(%rbp), %eax
      11:       3b 45 fc        cmpl    -4(%rbp), %eax
      14:       0f 8f 17 00 00 00       jg      23 <_sum+0x31>
      1a:       8b 45 f8        movl    -8(%rbp), %eax
      1d:       03 45 f4        addl    -12(%rbp), %eax
      20:       89 45 f8        movl    %eax, -8(%rbp)
      23:       8b 45 f4        movl    -12(%rbp), %eax
      26:       83 c0 01        addl    $1, %eax
      29:       89 45 f4        movl    %eax, -12(%rbp)
      2c:       e9 dd ff ff ff  jmp     -35 <_sum+0xE>
      31:       8b 45 f8        movl    -8(%rbp), %eax
      34:       5d      popq    %rbp
      35:       c3      retq
```