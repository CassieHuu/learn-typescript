
//  类、对象、面相对象OOP
// 对象是类的实例，类是对象的抽象
//  OOP 三大特性：封装、继承、多态

class Animal {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    run() {
        return `${this.name} is running`
    }
}

// 类的继承
class Dog extends Animal {
    bark() {
        return `${this.name} is barking`
    }
}
const dog = new Dog('www')
console.log(dog.bark())

// 多态，重写 run
class Cat extends Animal {
    constructor(name) {
        super(name)
    }
    run() {
        return `Meow, ${this.name} is running`
    }
}

const cat = new Cat('maomao')
console.log(cat.run())
console.log(dog.run())

// private readonly protected static
class Xxx {
    private id: number; 
    readonly creator: string;
    protected name: string;
    static categoies: string[] = ['mammal', 'bird']
    static isAnimal(a) {
        return a instanceof Animal
    }
    constructor(name: string) {
        this.name = name
    }
    run() {
        return `${this.name} is running`
    }
}

console.log(Xxx.isAnimal(cat))


// interface 和 implements 对类的抽象
interface Radio {
    switchRadio(): void;
}
interface Battery {
    checkBatteryStatus(): void;
}

interface RadioWithBattery extends Radio {
    checkBatteryStatus(): void;
}
class Car implements Radio {
    switchRadio() {

    }
}
class Cellphone1 implements Radio, Battery{
    switchRadio() {

    }
    checkBatteryStatus() {

    }
}
class Cellphone2 implements RadioWithBattery{
    switchRadio() {

    }
    checkBatteryStatus() {

    }
}