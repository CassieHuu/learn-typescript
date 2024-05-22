// function add(x: number, y: number, z?:number):number {
//     if(typeof z === 'number') {
//         return x + y + z
//     }
//     return x + y
// }

type AddFnType = (x: number, y: number, z?:number) => number

const add = function(x: number, y: number, z?:number):number {
    if(typeof z === 'number') {
        return x + y + z
    }
    return x + y
}

const add2: AddFnType = add

// add 通过类型推断