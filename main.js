function alert1(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)+parseInt(num2);
    alert("แสดงผลรวม :" +sum);
    // document.getElementById("result").innerHTML ="แสดงผลรวม : "+sum;
}
function alert2(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)-parseInt(num2);
    alert("แสดงผลรวม :" +sum);
    // document.getElementById("result").innerHTML ="แสดงผลรวม : "+sum;
}
function alert3(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)*parseInt(num2);
    alert("แสดงผลรวม :" +sum);
    // document.getElementById("result").innerHTML ="แสดงผลรวม : "+sum;
}
function alert4(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)/parseInt(num2);
    alert("แสดงผลรวม :" +sum.toFixed(2));
    // document.getElementById("result").innerHTML ="แสดงผลรวม : "+sum;
}
function alert5(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = num1 / (num2/100 * num2/100);
    alert("แสดงผลรวม :" +sum.toFixed(2));
    // document.getElementById("result").innerHTML ="แสดงผลรวม : "+sum;
}

function myalert(){
    alert("Hello Ztupit")
}
const img = document.createElement("img")

img.src = "img/A65.jpg";
img.style.width = "200px";

document.getElementById("mydiv").appendChild(img);
