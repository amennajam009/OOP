// Objects 
// (Ab Object is the container which contians we can store our Values to to form a data structure . An object is used to represent the specific indentity such as person , name etc)

let MyObject ={}
let MyUpcomingObject = {
    name:"Amen Najam",
    Class:"1st Sem VU",
    Email:"amennajam@gmail.com"
}
// console.log(MyUpcomingObject)
MyObject.name="Hello World"

// However, sometimes we don't need to assign any values to an object when we first create it. In this case, we can create an empty object with curly braces "{}" and no values inside

let MyObject = {
    name:"amen",
    Class:"5th",
    contact:"090078061",
    fatherInfo:{
        FatherName:"Najam William",
        Email:"testing@gmail.com",
        Phone:"090078601" ,
        MotherInfo:{
            Name:"string",
            FatherName:"string",
            PhoneNUmber:"09007744332",
            Email:"testing@gmail.com"
        }
    }
}

console.log(MyObject);
//Myvariable is the property init
const Myvariable = {
    name:"amen",
    class:"sdf",
    phone:"0349032343",
    Email:"amennajam@gmail.com",
    Institute:"skfnsjdfhsf"
}
console.log(Myvariable);


const MyObject = {
    Fistname:"amen",
    Lastname:"najam",
    phone:"857589303045",
    Email:"hdhduukskso",
    FavColor:"pink",
    // function is method init
    ShowfullName: function(){
        return  this.Fistname  + this.Lastname;
    }
};
console.log(MyObject.ShowfullName());

