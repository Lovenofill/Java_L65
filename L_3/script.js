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





let formBMI = document.getElementById("formBMI")

formBMI.onsubmit = function (e) {
    e.preventDefault();
    let w = formBMI["weight"].value;
    let h = formBMI["height"].value;
    console.log(w, h)
    let myBMI = calBMI(50, 175)
    document.getElementById("myPage").innerHTML = `<h1>${myBMI}</h1>`;
    console.log(myBMI)
}