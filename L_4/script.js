function openSidebar() {
    document.getElementById("mySidebar").style.width = "250px"
}
function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0px"
}
function calBMI(weight, height) {
    let x = weight / (height / 100) ** 2;
    return x;
}

class User {
    constructor(id, name, email, phone, profile) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.profile = profile;
    }
}

let output = ""

let myUser = [];


for (let i = 0; i < 10; i++) {
    myUser.push(new User(i, "LNF" + i, "LNF@G.com", "123456789"));
}
for (let item of myUser) {
    output += `<h1>name:${item.name} id:${item.id}</h1>`
}

document.getElementById("myPage").innerHTML = output;
console.log(myUser);