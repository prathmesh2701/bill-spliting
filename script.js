function split(){
    var a = parseInt(document.getElementById("amt").value);
    var b = parseInt(document.getElementById("spt").value);
    var c = a / b;
    document.getElementById('res').innerHTML = "Spliting Amount: "+c;
}