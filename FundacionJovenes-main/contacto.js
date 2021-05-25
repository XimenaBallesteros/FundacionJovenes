function validarFormulario(){
    $('.alert').remove();    
  
    var nombre=$('#nombre').val(),
        correo=$('#correo').val(),
        asunto=$('#asunto').val(),
        mensaje=$('#mensaje').val();
    //console.log(nombre);
    if(nombre==""||nombre==null){
        cambiarcolor("nombre");
        mostraralerta("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-ZñÑ]*$/;
        if(!expresion.test(nombre)){
            cambiarcolor("nombre");
            mostraralerta("No se permiten caracteres eséciales o numeros");
            return false;
        }
    }
    
    if(correo==""||correo==null){
        cambiarcolor("correo");
        mostraralerta("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-ZñÑ]*$/;
        if(!expresion.test(correo)){
            cambiarcolor("correo");
            mostraralerta("Por favor ingrese un correo válido");
            return false;
        }
    }
    
    if(asunto==""||asunto==null){
        cambiarcolor("asunto");
        mostraralerta("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-ZñÑ]*$/;
        if(!expresion.test(asunto)){
            cambiarcolor("asunto");
            mostraralerta("No se permiten caracteres eséciales ");
            return false;
        }
    }
    
    if(mensaje==""||mensaje==null){
        cambiarcolor("mensaje");
        mostraralerta("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-ZñÑ]*$/;
        if(!expresion.test(mensaje)){
            cambiarcolor("mensaje");
            mostraralerta("No se permiten caracteres eséciales ");
            return false;
        }
    }
    $('form').submit();
    return true;
}

$('input').focus(function(){
    $('.alert').remove();
    colordefecto('nombre');
    colordefecto('correo');
    colordefecto('asunto');
});

$('textarea').focus(function(){
    $('.alert').remove();
    colordefecto('mensaje');
});
        
function colordefecto(dato){
    $('#'+dato).css({
        border: "1px solid #999"
    });
}
function cambiarcolor(dato){
    $('#'+dato).css({
        border: "1px solid #dd5144"
    });
}

function mostraralerta(){
    $('#nombre').before('<div class="alert">Error: '+ texto + '</div>');
}
