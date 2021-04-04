$(document).ready(function(){
    $("#btn1").click(function(){
        $('#modal1').modal('show');//animado
        $('#modal1').draggable({});//arrastrable
        //centrado con la propiedad "modal-dialog-centered" desde html
    });

    $("#btn2").click(function(){
        $('#modal2').modal('show');//animado
        $('#modal2').draggable({});//arrastrable
        //centrado con la propiedad "modal-dialog-centered" desde html
    });
});