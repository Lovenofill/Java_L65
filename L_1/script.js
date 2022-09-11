// var name = "Nawapol";
// var age = 20;
// var myTrue = true;
// var MyFalse = false
// var MyNull = null;
// console.log()


// function myFuncation(value1, value2) {
//     // console.log("Nawapol")
//     return value1 + value2 ;
// }

// // console.log(myFuncation(2, 4))

// // myFuncation();

// var result = myFuncation("Name"+25)
// console.log(result);

// var myFuncation = () => "Halo";
// var myFuncation = (value) = value;

// var myFuncation01 = () => {
//     return "LNF"
// }

// var myFuncation02 = (value1, value2) => "LNF"
// var myFuncation01 = (value1, value2) => value1**value2



// console.log(myFuncation());
// console.log(myFuncation01(2,5));


// var mycar ={
//     brand :"bmw",
//     model: 1,
//     color:"black"
// };

// console.log(mycar.brand+""+mycar.model+""+mycar.color+"")

// var myOpject ={
//     name:"LNF",
//     fristname :"Nawapol",
//     lastname : "Moo",
//     fullname: (age)=>{
//         return myOpject.fristname+" "+myOpject.lastname+" "+age
//     },
// };

// console.log(myOpject.fullname(20));

// document.getElementById("text").innerHTML = "Nawapol";

// function changeBG(){
//     document.body.style.backgroundColor ="red"
// }


// var myArray = [
//     "banana",
//     "kiwi",
//     "Apple"
// ];
// myArray.push("Manow")
// console.log(myArray[0]+" "+ myArray[1]+ " " + myArray[2])
// console.log(myArray.toString());
// console.log(Math.abs(-4));


// function testnum(value1) {
//     var result;
//     if (value1 > 0) {
//         result = ("จำนวนเต็มบวก")
//     }
//     else if (value1 < 0) {
//         result = ("จำนวนเต็มลบ")
//     }
//     else {
//         result = ("จำนวนเต็มศูนย์")
//     }
//     return result
// };

// console.log(testnum(-15))

// var x = 50;
// var x = 60;

// let y = 50;
//  y = 40;
// console.log(y);

// switch (1) {
//     case 0:
//         console.log("Sun");
//         break;
//     case 1:
//         console.log("Mon");
//         break;
//     case 2:
//         console.log("Tue");
//         break;
//     case 3:
//         console.log("Wed");
//         break;
//     case 4:
//         console.log("Thu");
//         break;
//     case 5:
//         console.log("Fri");
//         break;
//     case 6:
//         console.log("Sat");
//         break;
//     default:
//         console.log("Unkonw")
//         break;
// }
// var cars =["honda","bmw"]
// for(i = 0; < cars.length;i++){
//     console.log(cars[i]);
// };


// var i;
// var j;

// for(i = 1; i <= 12; i++){
//     console.log("แม่" + " " + i)
//     for(j = 1; j <= 12; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
//     console.log("-------------------------------")
// }

// var cars = ["bmw", "honda"]
// var person = {
//     fname: "LNF",
//     Lname: "Moo",
//     age: 20,
// }
// var item
// for (item in person) {
//     console.log(person[item])
// }
// for(var item of cars){
//     console.log(item)
// }

// function map(fucn, data) {
//     var result = []
//     for (let i = 0; i < data.length; i++){
//         result[i] = fucn(data[i]);
//     }
//     return result;
// }

// const f = (x)=>{
//     return Math.pow(x,3);
// }

// var num = [0,1,2,3,4,5,6];
// map(f,num)
// var show = map(f,num)
// console.log(show)

// class myclass{
//     constructor(fname,lname){
//         this.fname=fname;
//         this.lname=lname;
//     }
//      showname(){
//         console.log("lnf")
//     }
//     fullname(){
//         return this.fname+" "+this.lname
//     }
// }

// var show = new myclass("LNF","halo");
// console.log(show.fullname())

// class myClass01{
//     constructor(name){
//         this.name = name
        
//     }
//     showname(){
//         return this.name;
//     }
// }

// class myClass02 extends myClass01{
//     constructor(name){
//         super(name)
//     }
// }

// var test = new myClass02("LNF");
// console.log(test.showname())