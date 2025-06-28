const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function(val){
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        langaugeName: "javascript",
        langaugeFilename: "js"
    },
    {
        langaugeName: "java",
        langaugeFilename: "java"
    },
    {
        langaugeName: "python",
        langaugeFilename: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langaugeName);
})