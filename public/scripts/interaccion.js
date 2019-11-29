var imagenGrande = document.querySelector('.anillog');
    
    var primero = document.querySelector('.Color1');
    var segundo = document.querySelector('.Color2');
    var tercero = document.querySelector('.Color3');
    var cuarto = document.querySelector('.Color4');

    function primer(){
        imagenGrande.setAttribute("src", './image/imagenes/Anillos/anillo_1.jpg');
    }
    function segundor(){
        imagenGrande.setAttribute("src", './image/imagenes/Anillos/anillo_5.jpg');
    }
    
    function tercer(){
        imagenGrande.setAttribute("src", './image/imagenes/Anillos/anillo_3.jpg');
    }
    function cuartor(){
        imagenGrande.setAttribute("src", './image/imagenes/Anillos/anillo_4.jpg');
    }

    primero.addEventListener('click',primer);
    segundo.addEventListener('click',segundor);
    cuarto.addEventListener('click',cuartor);
    
    tercero.addEventListener('click',tercer);
    