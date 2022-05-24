var cadenaAnalizada, estados;
var posicion, estadoActual;

function analizar(){
    estados="";
    posicion=0;
    cadenaAnalizada=document.getElementById("lectorCadena").value.split("");
    q_0();
    document.getElementById("lectorCadena").value="";
    document.getElementById("estados").textContent=estados;
    if(estadoActual==5){
       document.getElementById("validacion").textContent="Cadena Valida";
    }else{
        document.getElementById("validacion").textContent="Cadena No Valida";
    }
}

function q_0(){
    estados=estados+"q0 ";
    estadoActual=0;
    if(cadenaAnalizada[posicion]=="h"){ 
        q_1();
    }else{
        if(cadenaAnalizada[posicion]!=null){
            q_6();}
    }
}
function q_1(){
    estados=estados+"q1 ";
    estadoActual=1;
    posicion++;
    if(cadenaAnalizada[posicion]=="0"||"1"||"2"||"3"||"4"||"5"||"6"||"7"||"8"||"9"||"A"||"B"||"C"||"D"||"E"||"F"){
            q_2();
    }else{
        if(cadenaAnalizada[posicion]!=null){
            q_6();
        }
    }
}
function q_2(){
    estados=estados+"q2 ";
    estadoActual=2;
    posicion++;
    if(cadenaAnalizada[posicion]=="0"||"1"||"2"||"3"||"4"||"5"||"6"||"7"||"8"||"9"||"A"||"B"||"C"||"D"||"E"||"F"){
        q_3();
    }else{
        if(cadenaAnalizada[posicion]!=null){
            q_6();   
        }
    }
}
function q_3(){
    estados=estados+"q3 ";
    estadoActual=3;
    posicion++;
    if(cadenaAnalizada[posicion]=="0"||"1"||"2"||"3"||"4"||"5"||"6"||"7"||"8"||"9"||"A"||"B"||"C"||"D"||"E"||"F"){
        q_4();
    }else{
        if(cadenaAnalizada[posicion]!=null){
            q_6();   
        }
    }
}
function q_4(){
    estados=estados+"q4 ";
    estadoActual=4;
    posicion++;
    if(cadenaAnalizada[posicion]=="0"||"1"||"2"||"3"||"4"||"5"||"6"||"7"||"8"||"9"||"A"||"B"||"C"||"D"||"E"||"F"){
        q_5();
    }else{
        if(cadenaAnalizada[posicion]!=null){
            q_6();   
        }
    }
}
function q_5(){
    estados=estados+"q5 ";
    estadoActual=5;
    posicion++;
    if(cadenaAnalizada[posicion]!=null){
        q_6();
    }
}

function q_6(){
    estados=estados+"q6 "
    estadoActual=6;
    posicion++;
    if(cadenaAnalizada[posicion]!=null){
        q_6();
    }
}