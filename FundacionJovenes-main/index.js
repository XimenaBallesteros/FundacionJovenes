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

