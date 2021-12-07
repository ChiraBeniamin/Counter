var num = 0;

function decreaseCount() {
    num -= 1
    colorChanger()
};

function increaseCount() {
    num += 1
    colorChanger()
};

function resetCount() {
    num = 0;
    colorChanger()
}
function colorChanger(){
    document.getElementById("value").innerHTML = num
    if (num > 0) {
        value.style.color = "rgb(30, 255, 0)"
    } else if (num < 0) {
        value.style.color = "red"
    } else if (num === 0) {
        value.style.color = "black"
    } 
}