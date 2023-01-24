function shashank(){

var aditya = parseInt(document.getElementById("aditya").value);
var aditya1 = parseInt(document.getElementById("aditya1").value);
var calc = document.getElementById("calculation").value;

if (calc === "+") {
    document.getElementById("result").value = aditya + aditya1;
}
if (calc === "-") {
    document.getElementById("result").value = aditya - aditya1;
}
if (calc === "/") {
    document.getElementById("result").value = aditya / aditya1;
}
if (calc === "*") {
    document.getElementById("result").value = aditya * aditya1;
}
}