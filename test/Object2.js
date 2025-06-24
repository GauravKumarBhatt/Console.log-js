// const instaUser = new Object();

const instaUser = {}
instaUser.id = "12345";
instaUser.name = "Gaurav Bhatt";
instaUser.loggedIn = false
instaUser.mail = "bhattgaurav349"
instaUser.accoutType = "personal";
instaUser.followers = 400;

// console.log("instaUser", instaUser);

const regularUser = {
    id: "67890",
    loggedIn: true,
    mail: "abc@google.com",
    fullname: {
        firstName: "Gaurav",
        lastName: "Bhatt"
    }
};

// console.log(regularUser.fullname.firstName + " " + regularUser.fullname.lastName);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(instaUser);

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));

console.log(instaUser.hasOwnProperty('isLoggedIn'));


const food = {
    name: "Pizza",
    price: 500,
    isVeg: true,
    ingredients: ["cheese", "tomato", "basil"],
    getDescription: function() {
        return `The ${this.name} costs ₹${this.price} and is ${this.isVeg ? "vegetarian" : "non-vegetarian"}. It contains ${this.ingredients.join(", ")}.`;
    }
};

console.log(food.getDescription());