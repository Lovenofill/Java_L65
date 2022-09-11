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

let myBMI = calBMI(50,175)

console.log(myBMI)