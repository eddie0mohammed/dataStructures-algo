

class Student {
    
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    static printAge = (age) => {
        console.log(age);
    }

    greet = () => {
        console.log(`Hello ${this.name}`);
        console.log('How old are you?');
    }

    answer = () => {
        console.log(`Hi, my name is ${this.name} and i'm ${this.age} years old`);
    }

    addOneToAge = () => {
        this.age = this.age + 1
    }
}


const s1 = new Student('kevin', 16);
s1.greet();
s1.answer();

// Student.printAge(30);

s1.addOneToAge();
s1.addOneToAge();

s1.answer();