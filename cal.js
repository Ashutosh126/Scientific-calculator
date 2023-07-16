function concatZero(value){
    if (value<10){
        value='0'+ value
    }
    
    return value;
}

function startline(){
 var today=new Date();
 var hour=today.getHours();
 var min=today.getMinutes();
 var sec=today.getSeconds();
 var ampm;


 if(hour<=12){
    ampm="AM"}
 else{
    ampm="PM";
}

if(hour<=12){
    hour=hour}
else{
    hour=hour-12;}

 hour=concatZero(hour);
 min=concatZero(min);
sec=concatZero(sec);
   

document.getElementById("time").innerHTML=hour+":"+ min+":"+sec+":"+ampm;
setTimeout(startline,500);
}

let screen=document.getElementById("screen");

function press(numValue){
    if(screen.value==0){
        screen.value='';}
    screen.value += numValue;

}

function clearScreen(val){
    screen.value=val;
}

function backspace(val){
    const space=screen;
    screen.value=space.value.substring(0,space.value.length-1);
}

function calculate(){

    if(screen!='')
    {try{
        clearScreen(eval(screen.value))
    }catch(err){
        clearScreen('Wrong expression')
    }}
}

function sine(){
    screen.value=Math.sin(screen.value*Math.PI/180);
}

function tan(){
    screen.value=Math.tan(screen.value*Math.PI/180);
}
function cos(){
    screen.value=Math.cos(screen.value*Math.PI/180);
}


function invsine(){
    screen.value=Math.sin(screen.value*(180/Math.PI));
}

function invtan(){
    screen.value=Math.atan(screen.value*(180/Math.PI));
}

function invcos(){
    screen.value=Math.acos(screen.value*(180/Math.PI));
}

function ln(){
    screen.value=Math.log(screen.value);
}

function log(){
    screen.value=Math.log10(screen.value);
}

function percent(){
    screen.value=(screen.value/100);
}

function square(){
    screen.value=Math.pow(screen.value,2);
}

function cube(){
    screen.value=Math.pow(screen.value,3);
}

function sqrt(){
    screen.value=Math.sqrt(screen.value);
}


function plusminus(){
    var x=screen;
    var y=x.value;
    y=y*-1;
    x.value=y;
}

function Exp(){
    screen.value=Math.pow(10,screen.value);
}