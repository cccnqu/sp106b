# Thread

關於 Thread/競爭情況/Mutex 與死結的說明，請看下列程式人月刊

* [程式人月刊 — 2018年8月號 / 本期焦點 — Thread 、競爭情況、死結的C 語言實作](https://medium.com/%E7%A8%8B%E5%BC%8F%E4%BA%BA%E6%9C%88%E5%88%8A/%E7%A8%8B%E5%BC%8F%E4%BA%BA%E6%9C%88%E5%88%8A-2018%E5%B9%B48%E6%9C%88%E8%99%9F-9a53498150c9)

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
