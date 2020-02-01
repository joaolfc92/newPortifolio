 
var i = 0;
var txt = 'Seja Bem-Vindo Desenvolvedor Front-End';
var vel;



function digitar(){
    if(i<txt.length){
        document.getElementById('texto1').innerHTML += txt.charAt(i)
        i++
        vel = Math.floor(Math.random()*200)
        setTimeout(digitar,vel)
    }

    
}


var j = 0;
var speed;
var text = 'Com uma paixão por aprender';

function digitarNova(){
    if(j<text.length){
        document.getElementById('texto2').innerHTML += text.charAt(j)
        j++
        speed = Math.floor(Math.random()*200)
        setTimeout(digitarNova,speed)
    }

    
}

function rodar(){
    digitar();
    setInterval(()=>{
        digitarNova()
    },4000)
   
}
