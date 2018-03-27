## Average 範例解析

## 背景

* http://www.nand2tetris.org/lectures/PDF/lecture%2007%20virtual%20machine%20I.pdf

* The VM abstraction includes 8 separate memory segments named:
  * static, this, local, argument, that, constant, pointer, temp
* static : 靜態變數
* this : 這個物件
* local : 區域變數
* argument: 參數
* that: 
* constant: 常數?
* pointer: 指標?
* temp: 臨時變數

## 範例

參考 http://www.nand2tetris.org/lectures/PDF/lecture%2008%20virtual%20machine%20II.pdf 第 12 頁

呼叫乘法

```
// computes (7 + 2) * 3 - 5
push constant 7
push constant 2
add
push constant 3
call mult
push constant 5
sub
```

乘法 (被呼叫)

```
function mult 1  // 1 代表有 1 個區域變數。
push constant 0
pop local 0 // result (local 0) = 0
label loop
push argument 0
push constant 0
eq
if-goto end // if arg0 == 0, jump to end
push argument 0
push 1
sub
pop argument 0 // arg0--
push argument 1
push local 0
add
pop local 0 // result += arg1
goto loop
label end
push local 0 // push result
return
```

## Jack 高階語言

檔案 : Average/Main.jack

```
class Main {
   function void main() {
     var Array a; 
     var int length;
     var int i, sum;

     let length = Keyboard.readInt("How many numbers? ");
     let a = Array.new(length); // constructs the array
     
     let i = 0;
     while (i < length) {
        let a[i] = Keyboard.readInt("Enter a number: ");
        let sum = sum + a[i];
        let i = i + 1;
     }
     
     do Output.printString("The average is ");
     do Output.printInt(sum / length);
     return;
   }
}
```

## VM 虛擬機中間碼

檔案 : Average/Main.vm


```
// class Main {
//    function void main() {
function Main.main 4
//     var Array a;       a = local 0
//     var int length;    length = local 1
//     var int i, sum;    i = local 2, sum = local 3
push constant 18  // "How many numbers?".length = 18
call String.new 1 // let length = Keyboard.readInt("How many numbers? ");
push constant 72  // "How many numbers? " 的碼
call String.appendChar 2
push constant 111
call String.appendChar 2
push constant 119
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 109
call String.appendChar 2
push constant 97
call String.appendChar 2
push constant 110
call String.appendChar 2
push constant 121
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 110
call String.appendChar 2
push constant 117
call String.appendChar 2
push constant 109
call String.appendChar 2
push constant 98
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 115
call String.appendChar 2
push constant 63
call String.appendChar 2
push constant 32
call String.appendChar 2
call Keyboard.readInt 1 // let length = Keyboard.readInt("How many numbers? ");
pop local 1             // length is local 1
push local 1
call Array.new 1        // let a = Array.new(length); // constructs the array
pop local 0             // a is local 0
push constant 0
pop local 2             // i is local 2
label label1
push local 2           // i is local 2 
push local 1           // length is local 1
lt                     //      while (i < length) {
not                    // if not (i<length)
if-goto label2         //   goto label 2
push local 0           // a
push local 2           // i
add                    // a[i] = a+i
push constant 16       // 16 = "Enter a number: ".length
call String.new 1              // "Enter a number: "
push constant 69        
call String.appendChar 2
push constant 110
call String.appendChar 2
push constant 116
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 97
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 110
call String.appendChar 2
push constant 117
call String.appendChar 2
push constant 109
call String.appendChar 2
push constant 98
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 58
call String.appendChar 2
push constant 32
call String.appendChar 2
call Keyboard.readInt 1    // let a[i] = Keyboard.readInt("Enter a number: ");
pop temp 1                 // temp 1 = Keyboard.readInt 傳回的結果
pop pointer 1              // 
push temp 1
pop that 0
push local 3
push local 0
push local 2
add                         // let sum = sum + a[i];
pop pointer 1
push that 0
add
pop local 3
push local 2
push constant 1
add                         // let i = i + 1;
pop local 2
goto label1
label label2
push constant 15            // do Output.printString("The average is ");
call String.new 1           // "The average is "
push constant 84 
call String.appendChar 2
push constant 104
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 97
call String.appendChar 2
push constant 118
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 114
call String.appendChar 2
push constant 97
call String.appendChar 2
push constant 103
call String.appendChar 2
push constant 101
call String.appendChar 2
push constant 32
call String.appendChar 2
push constant 105
call String.appendChar 2
push constant 115
call String.appendChar 2
push constant 32
call String.appendChar 2
call Output.printString 1       // do Output.printString("The average is ");
pop temp 0
push local 3
push local 1
call Math.divide 2             // do Output.printInt(sum / length);
call Output.printInt 1
pop temp 0
push constant 0
return                        // return

```

 