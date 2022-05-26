vida=10;
estadoAct=0;
estados_Cruzados="q0 ";

function atacar(daño){
    document.getElementById("Est_Pas").textContent=estados_Cruzados;
    document.getElementById("vidaZombie").textContent="";
    switch(estadoAct){
        case 0:  q_0 (daño); break;
        case 1:  q_1 (daño); break;
        case 2:  q_2 (daño); break;
        case 3:  q_3 (daño); break;
        case 4:  q_4 (daño); break;
        case 5:  q_5 (daño); break;
        case 6:  q_6 (daño); break;
        case 7:  q_7 (daño); break;
        case 8:  q_8 (daño); break;
        case 9:  q_9 (daño); break;
        case 10: q_10(daño); break;
    }
}

function q_0(daño){
    estadoAct=0;
    estados_Cruzados=estados_Cruzados+"q0 ";
    vida=vida-daño;
    document.getElementById("vidaZombie").textContent=vida;
    switch(daño){
        case 1:
            estadoAct=1; break;
        case 2: estadoAct=2; break;
        case 3: estadoAct=3; break;
        case 4: estadoAct=5; break;
    }
}
function q_1(daño){
    estadoAct=1;
    estados_Cruzados=estados_Cruzados+"q1 ";
    vida=vida-daño;
    document.getElementById("vidaZombie").textContent=vida;
    switch(daño){
        case 1: estadoAct=2; break;
        case 2: estadoAct=3; break;
        case 3: estadoAct=4; break;
        case 4: estadoAct=6; break;
    }
}
function q_2(daño){
    estadoAct=2;
    estados_Cruzados=estados_Cruzados+"q2 ";
    vida=vida-daño;
    document.getElementById("vidaZombie").textContent=vida;
    switch(daño){
        case 1: estadoAct=3; break;
        case 2: estadoAct=4; break;
        case 3: estadoAct=5; break;
        case 4: estadoAct=7; break;
    }
}
function q_3(daño){
    estadoAct=3;
    estados_Cruzados=estados_Cruzados+"q3 ";
    vida=vida-daño;
    document.getElementById("vidaZombie").textContent=vida;
    switch(daño){
        case 1: estadoAct=4; break;
        case 2: estadoAct=5; break;
        case 3: estadoAct=6; break;
        case 4: estadoAct=8; break;
    }
}
function q_4(daño){
    estadoAct=3;
    estados_Cruzados=estados_Cruzados+"q4 ";
    vida=vida-daño;
    document.getElementById("vidaZombie").textContent=vida;
    switch(daño){
        case 1: estadoAct=5; break;
        case 2: estadoAct=6; break;
        case 3: estadoAct=7; break;
        case 4: estadoAct=9; break;
    }
}
function q_5(daño){
    estadoAct=3;
    estados_Cruzados=estados_Cruzados+"q5 ";
    vida=vida-daño;
    document.getElementById("vidaZombie").textContent=vida;
    switch(daño){
        case 1: estadoAct=6; break;
        case 2: estadoAct=7; break;
        case 3: estadoAct=8; break;
        case 4: estadoAct=10; break;
    }
}
function q_6(daño){
    estadoAct=3;
    estados_Cruzados=estados_Cruzados+"q6 ";
    vida=vida-daño;
    document.getElementById("vidaZombie").textContent=vida;
    switch(daño){
        case 1: estadoAct=7; break;
        case 2: estadoAct=8; break;
        case 3: estadoAct=9; break;
        case 4: estadoAct=10; break;
    }
}
function q_7(daño){
    estadoAct=3;
    estados_Cruzados=estados_Cruzados+"q7 ";
    vida=vida-daño;
    document.getElementById("vidaZombie").textContent=vida;
    switch(daño){
        case 1: estadoAct=8; break;
        case 2: estadoAct=9; break;
        case 3: estadoAct=10; break;
        case 4: estadoAct=10; break;
    }
}
function q_8(daño){
    estadoAct=3;
    estados_Cruzados=estados_Cruzados+"q8 ";
    vida=vida-daño;
    document.getElementById("vidaZombie").textContent=vida;
    switch(daño){
        case 1: estadoAct=9; break;
        case 2: estadoAct=10; break;
        case 3: estadoAct=10; break;
        case 4: estadoAct=10; break;
    }
}
function q_9(daño){
    estadoAct=3;
    estados_Cruzados=estados_Cruzados+"q9 ";
    vida=vida-daño;
    document.getElementById("vidaZombie").textContent=vida;
    switch(daño){
        case 1: estadoAct=10; break;
        case 2: estadoAct=10; break;
        case 3: estadoAct=10; break;
        case 4: estadoAct=10; break;
    }
}
function q_10(daño){
    estados_Cruzados=estados_Cruzados+"10 ";
    document.getElementById("vidaLimZombie").textContent="";
    document.getElementById("vidaZombie").textContent="Muerto";
}
