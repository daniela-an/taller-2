//Imagenes de joyeria
var aretes = document.querySelector('.contenido__joyeria__aretes__img');
var collares = document.querySelector('.contenido__joyeria__collares__img');
var pulseras = document.querySelector('.contenido__joyeria__pulseras__img');
var anillos = document.querySelector('.contenido__joyeria__anillos__img');

//Imagenes joyas
    var item1 = document.querySelector('.contenido__joyas__items__item-1');
    var item2 = document.querySelector('.contenido__joyas__items__item-2');
    var item3 = document.querySelector('.contenido__joyas__items__item-3');
    var item4 = document.querySelector('.contenido__joyas__items__item-4');
    var item5 = document.querySelector('.contenido__joyas__items__item-5');
    var item6 = document.querySelector('.contenido__joyas__items__item-6');
    var item7 = document.querySelector('.contenido__joyas__items__item-7');
    var item8 = document.querySelector('.contenido__joyas__items__item-8');
    var item9 = document.querySelector('.contenido__joyas__items__item-9');
    var item10 = document.querySelector('.contenido__joyas__items__item-10');
    var item11 = document.querySelector('.contenido__joyas__items__item-11');
    var item12 = document.querySelector('.contenido__joyas__items__item-12');

    function uno(){
        if(estilo){
            aretes.setAttribute("src", './image/fotosKit/a3/anillo1.png');
        }else {
            aretes.setAttribute("src", './image/fotosKit/b3/anillo1.png');
        }
    }
    function dos(){
        if(estilo){
            aretes.setAttribute("src", './image/fotosKit/a3/anillo2.png');
        }else {
            aretes.setAttribute("src", './image/fotosKit/b3/anillo2.png');
        }
    }
    function tres(){
        if(estilo){
            aretes.setAttribute("src", './image/fotosKit/a3/anillo3.png');
        }else {
            aretes.setAttribute("src", './image/fotosKit/b3/anillo3.png');
        }
    }
    function cuatro(){
        if(estilo){
            collares.setAttribute("src", './image/fotosKit/a3/arete1.png');
        }else {
            collares.setAttribute("src", './image/fotosKit/b3/arete1.png');
        }
    }
    function cinco(){
        if(estilo){
            collares.setAttribute("src", './image/fotosKit/a3/arete2.png');
        }else {
            collares.setAttribute("src", './image/fotosKit/b3/arete2.png');
        }
    }
    function seis(){
        if(estilo){
            collares.setAttribute("src", './image/fotosKit/a3/arete3.png');
        }else {
            collares.setAttribute("src", './image/fotosKit/b3/arete3.png');
        }
    }
    function siete(){
        if(estilo){
            pulseras.setAttribute("src", './image/fotosKit/a3/collar1.png');
        }else {
            pulseras.setAttribute("src", './image/fotosKit/b3/collar1.png');
        }
    }
    function ocho(){
        if(estilo){
            pulseras.setAttribute("src", './image/fotosKit/b3/collar2.png');
        }else {
            pulseras.setAttribute("src", './image/fotosKit/b3/collar2.png');
        }
    }
    function nueve(){
        if(estilo){
            pulseras.setAttribute("src", './image/fotosKit/a3/collar3.png');
        }else {
            pulseras.setAttribute("src", './image/fotosKit/b3/collar3.png');
        }
    }
    function diez(){
        if(estilo){
            anillos.setAttribute("src", './image/fotosKit/a3/pulsera1.png');
        }else {
            anillos.setAttribute("src", './image/fotosKit/b3/pulsera1.png');
        }
    }
    function once(){
        if(estilo){
            anillos.setAttribute("src", './image/fotosKit/a3/pulsera2.png');
        }else {
            anillos.setAttribute("src", './image/fotosKit/b3/pulsera2.png');
        }
    }
    function doce(){
        if(estilo){
            anillos.setAttribute("src", './image/fotosKit/a3/pulsera3.png');
        }else {
            anillos.setAttribute("src", './image/fotosKit/b3/pulsera3.png');
        }
    }

    item1.addEventListener('click', uno);
    item2.addEventListener('click', dos);
    item3.addEventListener('click', tres);
    item4.addEventListener('click', cuatro);
    item5.addEventListener('click', cinco);
    item6.addEventListener('click', seis);
    item7.addEventListener('click', siete);
    item8.addEventListener('click', ocho);
    item9.addEventListener('click', nueve);
    item10.addEventListener('click', diez);
    item11.addEventListener('click', once);
    item12.addEventListener('click', doce);

    var estilo = false;
    var btn = document.querySelector('.contenido__joyas__btn');

    btn.addEventListener('click', estilos);

    function estilos (){
        estilo = !estilo;
        console.log(estilo);
    }