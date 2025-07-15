// let myName = "gaurav"
// let myChannel = "TWG"

// console.log(myName.trueLength);



let myHeros = ["BS", "Maharana"]

let heroPower = {
    BS: "Brave",
    Maharana: "sword",

    getMaharanaPower: function(){
        console.log(`Maharana power is ${this.Maharana}`)
    }
}

Object.prototype.gaurav = function(){
    console.log(`gaurav is present in all objects`);
}

Array.prototype.heygaurav = function(){
    console.log(`Gaurav says hello`);
}

// heroPower.gaurav()
// myHeros.gaurav()
// myHeros.heygaurav()
// heroPower.heygaurav()



// inheritance

const User = {
    name: "java",
    email: "java@script.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true, 
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "JavaScript"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"gaurav".trueLength()
"the song of ice and fire".trueLength()