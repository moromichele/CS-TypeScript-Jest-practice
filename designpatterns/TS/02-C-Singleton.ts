/*
Singleton pattern (Creational)
When you need at most a single instance of an object
*/
class Singleton {

    private static instance: Singleton;

    private constructor() { }

    public static getProcessManager = () => {
        if (!Singleton.instance) {
            console.log("creating new..");
            Singleton.instance = new Singleton();
        } else {
            console.log("already created, passing the existing one");
        }
        return Singleton.instance;
    };


}

const pM1 = Singleton.getProcessManager(); //creating new
const pM2 = Singleton.getProcessManager(); //already created ..
console.log(pM1 === pM2); //true
