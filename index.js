//ACCIONES EN LA GALERIA

const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
var imagen
imagenes.forEach(imagen=>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))  
    })
})
/*PARA CERRAR LA IMAGEN*/
contenedorLight.addEventListener('click',(e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('show-image')  
    }
}
)

/*PARA MOSTRAR LA IMAGEN*/
const aparecerImagen= (imagen)=>{
    imagenesLight.src = imagen
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('show-image')
}


//ACCIONES EN EL MENU
const menu1= document.querySelector('.menu');
const menu= document.querySelector('.menu-navegacion');
/*MOSTRAR EL MENU*/
menu1.addEventListener('click',()=>{
    menu.classList.toggle("spread");
})
/*CERRAR EL MENU*/
window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
    && e.target !=menu && e.target != menu1 ){
    
    menu.classList.toggle("spread");}
})