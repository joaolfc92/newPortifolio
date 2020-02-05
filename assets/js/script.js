 // FUNÇÃO DE DIGITAÇÃO DO BANNER 
var i = 0;
var txt = 'Seja Bem-Vindo Desenvolvedor Front-End Jr';
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
// FINAL DA FUNÇÃO 



// INICIO DA FUNÇÃO DE ANIMAÇÃO DO PORTIFOLIO

const elementos = document.querySelectorAll('[data-anima]');

const animacaoClass = 'animacao';

function animaScroll(){
    const topoPAginanaJanela = window.pageYOffset+((window.innerHeight*3)/4);

    elementos.forEach(function(elemento){
        if(topoPAginanaJanela > elemento.offsetTop){
            elemento.classList.add(animacaoClass)
        }else{
            elemento.classList.remove(animacaoClass)
        }
    })
}

if(elementos.length){
    window.addEventListener('scroll', function(){
        animaScroll()
    })
}

// fim da função 


$(function(){
    $('[data-toggle="tooltip"]').tooltip();
})

// FUNÇÃO EFEITO MENU

function toggleMenu(){
    let menu = document.getElementById('menu');
  
    
    if(menu.style.display == 'none' || menu.style.display == ''){
    

        menu.style.display = 'block'

        setTimeout(()=>{
            menu.classList.remove('menu_close')
            menu.classList.add('menu_open')
        },500)
       
        
       

        
        
    }else{
        menu.classList.remove('menu_open')
        menu.classList.add('menu_close')
        setTimeout(()=>{
            menu.style.display = 'none';
        },500)
      
        
    }
}



$(document).ready(function($){
    $('#inputCel').mask('(00)00000-0000')
    $('#inputTel').mask('(00)0000-0000')
 })








window.addEventListener('click', toggleMenu);
window.addEventListener('load',rodar)
