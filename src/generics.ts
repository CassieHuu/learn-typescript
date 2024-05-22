console.log('=====================function+泛型==================')
function echo<T>(arg: T): T { // 尖括号里的T用来占位
    return arg
}
const str:string = '123'
const result1 = echo(str)
const num:number = 123
const result2 = echo(num)

// const result3: string = echo(1) // 会被泛型约束，报错

function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}

const result4 = swap(['str', 123]) // [123, 'str']
result4[0].toFixed(2)
result4[1].toUpperCase()

function echoWithArr<T>(arr: T[]): T[] {
    console.log(arr.length)
    return arr
}
const arrs = echoWithArr([1,2,3])

// 上述泛型解决方案并不完善，字符串也可以输出长度，怎么兼容解决呢？

interface IWithLength {
    length: number
}

function echoWithLength<T extends IWithLength>(arg: T): T {
    console.log(arg.length)
    return arg
}
const strs = echoWithLength('str')
const obj = echoWithLength({length: 10})
const arr2 = echoWithArr([1,2,3])

console.log('=====================class+泛型==================')
// 队列：先进先出
class Queue1 {
    private data = []
    push(item) {
        return this.data.push(item)
    }
    shift() {
        return this.data.shift()
    }
}

const queue1 = new Queue1()
queue1.push('str')  // 如果不加泛型约束，执行时才会报错，但是希望错误更早一点被捕获
queue1.shift().toFixed()


class Queue2<T> {
    private data = []
    push(item: T) {
        return this.data.push(item)
    }
    shift(): T {
        return this.data.shift()
    }
}
// 我们可以在new 一个 Queue 的时候就指定类型
const queue2 = new Queue2<number>()
// queue2.push('str')  // 写的时候就会报错


console.log('=====================interface+泛型==================')

// 动态指定键值对的类型
interface KeyPair<T, U> {
    key: T;
    value: U;
}

let kp1: KeyPair<number, string> = {key: 123, value: 'str'}
let kp2: KeyPair<string, number> = {key: 'str', value: 123}

// 
let arr: number[] = [1,2,3]
let arr3: Array<number> = [1,2,3]

// interface 描述函数
interface Iplus {
    (a:number, b: number): number
}
function plus(a:number, b:number):number {
    return a + b
}
const a:Iplus = plus // 该语句证明 我们成功用 Iplus 描述了 plus1 的类型 

// 改良版
interface Iplus1<T> {
    (a:T, b: T): T
}
function plus1(a:number, b:number):number {
    return a + b
}
function connect(a: string, b:string):string {
    return a + b
}
const b:Iplus1<number> = plus1 // <number> 是定义在 Iplus1 后面的
const c:Iplus1<string> = connect


