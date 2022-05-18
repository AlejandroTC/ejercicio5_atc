//CRUD para las categorias o rubros
//SisTeTe

//Crear un nuevo registro en la base de datos rubro o categoria
function actionCreate() {
    //alert("Tu estas intentando crear una categoria en la base de datos");
    let nombreCategoria    = document.getElementById("nombre_rubro").value;
    let tieneSubcategorias = $('#radio_categoria_si').is(":checked"); //true o false 
    let Descripcion        = "No tiene subtemas";
    
    if( tieneSubcategorias)
      Descripcion = "Si tiene subtemas";
         
    //Vamos a comuncarnos con el PHP
    //$ = JQuery, $ es la libreria, y JQuery es el metodo
    $.ajax({ 
        method:"POST",
        url: "plantilla/phppropios/crud-categorias.php",
        data: {
          categoria : nombreCategoria,
          subcategorias : tieneSubcategorias,//true o false
          accion : "create"
        },
        success: function( respuesta ) {
          JSONRespuesta = JSON.parse(respuesta); 
          if(JSONRespuesta.estado==1){
            //Agregar el registro a la tabla
            tabla = $("#example1").DataTable();
            let Botones = "Botones";
            
            tabla.row.add([nombreCategoria,Descripcion,Botones]).draw().node().id="renglon_".JSONRespuesta.id;

            toastr.success(JSONRespuesta.mensaje);
          }else{
            toastr.error(JSONRespuesta.mensaje);
          }
        }
    });
}

//Leer todos los registros que tenga la tabla
function actionRead() {
 
}

//Actualizar un registro de la tabla rubros o categorias
function actionUpdate(){
  
}

//Eliminar un registro de la tabla rubros o categorias
function actionDelete() {
     
}