
// Iterface 接口（对 object进行抽象）

interface Person {
    readonly id: number
    name: string
    age?: number
}

let cassie: Person = {
    id: 1,
    name: 'Cassie'
}
// cassie.id = 2  // 无法为“id”赋值，因为它是只读属性。

