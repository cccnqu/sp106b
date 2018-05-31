# Thread

## 範例 1 

```
$ gcc georgeMary.c -lpthread -o georgeMary.o
$ ./georgeMary.o
George
----------------
Mary
George
----------------
Mary
George
----------------
George
----------------
Mary
George
----------------
George
----------------
Mary
George
```

## race.c -- 競爭情況

```
$ gcc race.c -o race
$ ./race
counter=5957
```

## norace.c -- 用 mutex 避免競爭情況

```
$ gcc norace.c -o norace
$ ./norace
counter=0
```

## deadlock.c -- 死結的示範

```
$ gcc deadlock.c -o deadlock
$ ./deadlock
A lock x
B lock y
... 然後就當機了
```

## 參考文獻

* https://github.com/greggagne/OSC9e (OS 經典教科書恐龍本)
  * https://github.com/greggagne/OSC9e/tree/master/ch3 (fork Process)
  * https://github.com/greggagne/OSC9e/tree/master/ch4 (thread)
  * https://github.com/greggagne/OSC9e/tree/master/ch5 (semaphore)
  * https://github.com/greggagne/OSC9e/tree/master/ch6 (schedule)
* https://github.com/apoorvemohan/threads
  * https://github.com/apoorvemohan/threads/blob/master/philosopher.c (哲學家用餐問題)
* http://sp1.wikidot.com/pthread
* http://www.yolinux.com/TUTORIALS/LinuxTutorialPosixThreads.html#BASICS
* [C 語言pthread 多執行緒平行化程式設計入門教學與範例- G. T. Wang](https://blog.gtwang.org/programming/pthread-multithreading-programming-in-c-tutorial/)