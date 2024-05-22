
// primitive value
let isDone: boolean = false
let age: number = 1
let names: string = 'Cassie' 
let friends: undefined
type Friend = {
    names: string
}
let makeAFriend = (friend: Friend | null) => {
    console.log(`I have a new friend ${friend?.names}`)
}

let notSure: any
notSure = 1
notSure = 'xxx'
notSure.myName
notSure.getName()

let numOrString: number | string = 1
numOrString = '1'

// 数组
let arrOfNums: number[] = [1,2,3,4]
// 类数组 arguments、Node
function test() {
    console.log(arguments)
    let htmlCollection: Node
}

// 元组
let user: [string, number] = ['Cassie', 1]

