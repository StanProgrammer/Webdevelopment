//curry function
let multiply=function(x,y){
    console.log(x*y)
}
let multiplybyTwo=multiply.bind(this,2)
multiplybyTwo(5)//output=10

let multiplybyThree=multiply.bind(this,3)
multiplybyThree(5)//output=15

//in case of three parameters
let multiplybyFour=multiply.bind(this,2,3)
multiplybyFour(5)//output=6

//in case of no parameters
let multiplybyn=multiply.bind(this)
multiplybyn(2,3)//output=6


// using function closures
let multiply1=function(x){
    return function(y){
        console.log(x+y)
    }
}
let multiplybyTwo2=multiply1(2)
multiplybyTwo2(2)//output=4

let multiplybyThree3=multiply1(2)
multiplybyThree3(3)//output=5