<?php
    //GET
    //POST
    //Respuesta al cliente (Chrome, Edge, Firefox, cualquier naveegador)JSON
    //include: 'conexion.php';
    $conexion = 1;
    $Respuesta = array();
    $accion = $_POST["accion"];
    switch ($accion) {
        case 'create':
            actionCreatePHP();
            break;
        case 'update':
            actionUpdatePHP();
            break;
        
        case 'delete':
            actionDeletePHP();
            break;
        
        case 'read':
            actionReadPHP();
            break;
    }
    
    function actionCreatePHP($conexion){
        $categoria    = $_POST['categoria'];
        $subcategoria = $_POST['subcategorias'];
        
        //Consulta para crear una Categoria o Rubro
        $QueryCreate= "INSERT INTO categoria (id, nombrecategoria,subcategoria) 
        VALUES (
        NULL,
        '".$categoria."',
        ".$subcategoria.")";
        if(1==1){
        //if(mysqli_query($conexion,$QueryCreate)){
            $Respuesta['estado'] =1;
            $Respuesta['mensaje']="El registro se guardo correctamente";
            $Respuesta['id']     =5;
            //$Respuesta['id']     =mysqli_insert_id($conexion);
        }else{
            $Respuesta['estado'] =0;
            $Respuesta['mensaje']="Ocurrio un error desconocido";
            $Respuesta['id']     =-1;
        } 
        //Generar la consulta para agregar
        echo json_encode($Respuesta);
    }

    function actionUpdatePHP(){
        $Respuesta['estado'] = 1;
        $Respuesta['mensaje'] = "El registro se actualizo correctamente";
        echo json_encode($Respuesta);
    }

    function actionDeletePHP(){
        $categoria = $_POST['categoria'];
        $subcategoria = $_POST['subcategoria'];
        //Consulta para crear una Categoria o Rubro
        $QueryCreate = "INSERT INTO categoria(id, nombrecategoria, subcategoria) VALUES (NULL,'".$categoria"',".$subcategoria")";
        if(mysqli_query($conexion, $QueryCreate)){
            $Respuesta['estado'] = 1;
            $Respuesta['mensaje'] = "El registro se guardo correctamente";
            $respuesta['id'] = mysqli_insert_id($conexion);
        }
        else {
            $Respuesta['estado'] = 0;
            $Respuesta['mensaje'] = "Ocurrio un error desconocido";
        }
        echo json_encode($Respuesta);
    }

    function actionReadPHP(){
        $Respuesta['estado'] = 1;
        $Respuesta['mensaje'] = "Los registros se listan correctamente";
        echo json_encode($Respuesta);
    }
    //echo "Hola Mundo de las categorias o rubros usando AJAX: ".$_POST['categoria'];
?>