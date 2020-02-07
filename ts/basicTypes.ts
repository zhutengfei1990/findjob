// 布尔值
let isDone:boolean = FALSE;

// 数字
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// 字符串
let cname: string = 'bob';
let sentence: string = `hello, my name is ${cname}`;

// 数组
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// 元组
let x: [string, number];
x = ['hello', 10];

enum Color {Red=1, Green, Blue}
let c: Color = Color.Red;

// Any
let notSure: any = 4;
notSure = 'maybe string';

// Void
function warnUser(): void {
  console.log('warning message');
}

let unusable: void = undefined; // 只能赋值undefined和null

// 类型断言
let someVal: any = 'this is a string';
let strLen: number = (<string>someVal).length;

let someVal2: any = 'this is a string';
let strLen2: number = (someVal2 as string).length;
