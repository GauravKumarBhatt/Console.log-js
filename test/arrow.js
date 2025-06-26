const user = {
  name: 'Gaurav',
  price: 100,
  
  welcomeMessage: function() {
    console.log('$(this.username}, welcome to the site!');
    console.log(this);
    }
}
// user.welcomeMessage()
// user.username = 'GauravJS';
// user.email = 'gaurav@google.com'
// user.welcomeMessage()

// console.log(this)

// function fusion() {
//     let username = "Gaurav"
//     console.log(this.username);
// }

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);

// const addTwo = (num1, num2) => ({username: "Gaurav"});

// console.log(addTwo());

const myArray = [1, 2, 3, 4, 5];
myArray.forEach((item, value) => {
    console.log(`Item: ${item}, Value: ${value}`);
});