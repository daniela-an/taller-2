//Imagenes de joyeria izquierdo
var aretes = document.querySelector('.contenido__joyeria__aretes__img');
var collares = document.querySelector('.contenido__joyeria__collares__img');
var pulseras = document.querySelector('.contenido__joyeria__pulseras__img');
var anillos = document.querySelector('.contenido__joyeria__anillos__img');

//Imagenes joyas derecho
    var item1 = document.querySelector('.contenido__joyas__items__item-1-img');
    var item2 = document.querySelector('.contenido__joyas__items__item-2-img');
    var item3 = document.querySelector('.contenido__joyas__items__item-3-img');
    var item4 = document.querySelector('.contenido__joyas__items__item-4-img');
    var item5 = document.querySelector('.contenido__joyas__items__item-5-img');
    var item6 = document.querySelector('.contenido__joyas__items__item-6-img');
    var item7 = document.querySelector('.contenido__joyas__items__item-7-img');
    var item8 = document.querySelector('.contenido__joyas__items__item-8-img');
    var item9 = document.querySelector('.contenido__joyas__items__item-9-img');
    var item10 = document.querySelector('.contenido__joyas__items__item-10-img');
    var item11 = document.querySelector('.contenido__joyas__items__item-11-img');
    var item12 = document.querySelector('.contenido__joyas__items__item-12-img');

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

    var estilo = true;
    var btn = document.querySelector('.contenido__joyas__btn');

    btn.addEventListener('click', estilos);

    function estilos (){
        estilo = !estilo;
        console.log(estilo);

        if(estilo){
            item1.setAttribute("src", './image/fotosKit/a2/anillo1.png');
            item2.setAttribute("src", './image/fotosKit/a2/anillo2.png');
            item3.setAttribute("src", './image/fotosKit/a2/anillo3.png');

            item4.setAttribute("src", './image/fotosKit/a2/arete1.png');
            item5.setAttribute("src", './image/fotosKit/a2/arete2.png');
            item6.setAttribute("src", './image/fotosKit/a2/arete3.png');

            item7.setAttribute("src", './image/fotosKit/a2/collar1.png');
            item8.setAttribute("src", './image/fotosKit/a2/collar2.png');
            item9.setAttribute("src", './image/fotosKit/a2/collar3.png');

            item10.setAttribute("src", './image/fotosKit/a2/pulsera1.png');
            item11.setAttribute("src", './image/fotosKit/a2/pulsera2.png');
            item12.setAttribute("src", './image/fotosKit/a2/pulsera3.png');

        }else {
            item1.setAttribute("src", './image/fotosKit/b2/anillo1.png');
            item2.setAttribute("src", './image/fotosKit/b2/anillo2.png');
            item3.setAttribute("src", './image/fotosKit/b2/anillo3.png');

            item4.setAttribute("src", './image/fotosKit/b2/arete1.png');
            item5.setAttribute("src", './image/fotosKit/b2/arete2.png');
            item6.setAttribute("src", './image/fotosKit/b2/arete3.png');

            item7.setAttribute("src", './image/fotosKit/b2/collar1.png');
            item8.setAttribute("src", './image/fotosKit/b2/collar2.png');
            item9.setAttribute("src", './image/fotosKit/b2/collar3.png');

            item10.setAttribute("src", './image/fotosKit/b2/pulsera1.png');
            item11.setAttribute("src", './image/fotosKit/b2/pulsera2.png');
            item12.setAttribute("src", './image/fotosKit/b2/pulsera3.png');
        }

    }