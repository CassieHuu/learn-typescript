// --------------------1、type aliases 类型别名

type SumType = (x:number, y: number) => number
function sum(x:number, y:number): number {
    return x + y
}

const sum2:SumType = sum // SumType 就是类型别名

// 类型别名在联合类型中比较好用
type NameResolver = () => string
type NameOrResolver = string | NameResolver
function getName(n: NameOrResolver): string {
    if (typeof n === 'string') {
        return n
    } else {
        return n()
    }
}

// --------------------2、type assertion 类型断言在联合类型中的使用
function getLength(input: string | number) :number {
    // ==============类型断言的as写法
    // const str = input as String
    // if(str.length) {
    //     return str.length
    // }else {
    //     const number = input as Number
    //     return number.toString().length
    // }
    // ==============类型断言的简介写法
    if ((<string>input).length) {
        return (<string>input).length
    } else {
        return input.toString().length
    }
    // ==============tips：类型断言不能断言为联合类型中不存在的类型
    // <boolean>input 
}
// --------------------3、类型声明文件
// 当我们使用第三方库的时候，往往需要引入 类型文件，才可以获得类型校验、代码补全、接口提示等功能
// 假如我们希望使用jQuery，通常只需要script标签引入，之后就可以用 jQuery 或者 $ 全局引用 jQuery对象了
jQuery('#foo')
// 如上，在 ts 编译器中，它并不知道 jQuery 是什么，我们需要某种语法来定义类型
declare var jQuery: (selector: string) => any // 简单写一下，上面的使用就不会报错了
// 一般会放在 .d.ts 中，所有的ts文件都可以获得 文件中的 ts 定义,如果不能就需要在 tsconfig.json 中配置include 
// 很多第三方库的.d.ts 文件，官方早都帮我们写好了，@types/xxx 
// 如果有的第三方库@types/xxx 也没有，就需要自己写了，需要用 declare 声明 变量、函数、类、接口 等等