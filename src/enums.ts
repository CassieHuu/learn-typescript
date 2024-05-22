// enum Direction0 {
//     Up,
//     Down,
//     Left,
//     Right
// }
// console.log(Direction0.Up) // 0
// console.log(Direction0[0]) // Up

enum Direction {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

const somevalue = 'Up' 
if(somevalue === Direction.Up) {
    console.log('go up!')
}

const enum DirectionConst {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

const someV = 'Up' 
if(someV === DirectionConst.Up) {
    console.log('go up!')
}