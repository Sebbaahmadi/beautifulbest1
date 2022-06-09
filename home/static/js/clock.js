function clock(){
    var date = new Date();
    var hours=date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var midday;
    hours = updateTime(hours);
    minutes = updateTime(minutes);
    seconds = updateTime(seconds);
    
    midday = (hours>=12) ? "PM" : "AM";
    document.getElementById("clock").innerHTML =
"<span>"+hours+"</span>" + ":" + "<span>"+minutes+"</span>" + ":" +"<span>"+ seconds+"</span>" + midday;
    var time = setTimeout(function(){
        clock();
    },1000);
//Good morning , afternoon , evening condition


    if(hours <12 ){
    var greeting ="Good Moring";
    }
if (hours >= 12 && hours <=18){
var greeting = "Good Afternoor <br>";
}
if (hours>= 18 && hours <= 24){
var greeting = "Good Evening <br>";

}
document.getElementById("greetings").innerHTML = greeting;
}
function updateTime(k){
if (k <10 ){
    return "0" +k }
    else{
        return k;}}
// call clock function
clock();
// function date(){
//     //creat the object 
//     date=new Date();
//     document.getElementById("demo1").innerHTML=date.toLocaleDateString();}
// date();