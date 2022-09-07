/*
Factory pattern (Creational)
Creates many similar objects easily
*/
class Developer {
    private name: string;
    private job: string = "Developer";

    constructor(name: string) {
        this.name = name;
    }

    public introduce = (): void => {
        console.log(this.name + ": " + this.job)
    }

};

class Manager {
    private name: string;
    private job: string = "Manager";

    constructor(name: string) {
        this.name = name;
    }

    public introduce = (): void => {
        console.log(this.name + ": " + this.job)
    }

};


type Employee = Developer | Manager;


class EmployeeFactory {
    public static create = (name: string, type: number): Employee => {
        switch (type) {
            case 1:
                return new Developer(name);
                break;
            case 2:
                return new Manager(name);
            default:
                break;
        }
    };
};

const bob: Employee = EmployeeFactory.create("Bob", 1);
const ted: Employee = EmployeeFactory.create("Ted", 2);
const employees = [];
employees.push(bob);
employees.push(ted);


employees.forEach((e: Employee) => e.introduce()); //DEVELOPER TESTER
