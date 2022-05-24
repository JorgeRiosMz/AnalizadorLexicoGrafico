var cadenaAnalizada, estados;
var posicion;

function analizar(){
    cadenaAnalizada=document.getElementById("lectorCadena").value;
    posicion=0;
    q_0();
    estados="";
    document.getElementById("lectorCadena").value="";}

function q_0(){
    if(cadenaAnalizada[posicion]=="h"){
        q_1();
    }else{
        q_6();
    }
    posicion++;
    estados= estados+"q0 ";
}
function q_1(){
    if((cadenaAnalizada[posicion]>=0&&cadenaAnalizada<10)||
        cadenaAnalizada=="A"||"B"||"C"||"D"||"E"||"F"){
        q_2();
    }else{
        q_6();
    }
    posicion++;
    estados= estados+"q1 ";
}
function q_2(){
    if((cadenaAnalizada[posicion]>=0&&cadenaAnalizada<10)||
        cadenaAnalizada=="A"||"B"||"C"||"D"||"E"||"F"){
        q_3();
    }else{
        q_6();
    }
    posicion++;
    estados= estados+"q2 ";
}
function q_3(){
    if((cadenaAnalizada[posicion]>=0&&cadenaAnalizada<10)||
        cadenaAnalizada=="A"||"B"||"C"||"D"||"E"||"F"){
        q_2();
    }else{
        q_6();
    }
    posicion++;
    estados=estados+"q3 ";
}
function q_4(){
    if((cadenaAnalizada[posicion]>=0&&cadenaAnalizada<10)||
        cadenaAnalizada=="A"||"B"||"C"||"D"||"E"||"F"){
        q_2();
    }else{
        q_6();
    }
    posicion++;
    estados=estados+"q1 ";
}
function q_5(){

}



function equipo(){
    alert("Esto lo deje porque ya lo hanía hecho, pero no somos equipo");
}