function init(){
    document.getElementById("score").width = "100px";
    document.getElementById("score").border = 1;
    var tr = document.getElementsByTagName("td");
    for(var i=0;i<tr.length;i++){
        tr[i].bgColor = "white";
    }
}
function chgTableW(number){
    document.getElementById("score").width = number;
}
function chgBandSW(number){
    document.getElementById("score").border = number;
}
function chgColor(color){
    var tr = document.getElementsByTagName("td");
    for(var i=3;i<tr.length;i++){
        tr[i].bgColor = color;
    }
}
