<?php
include("../config/db.php");
    $id = $_GET['id'];
    $query = "DELETE FROM task WHERE id = '$id'";
    
    //dar la cadena de conexión y la consulta
    $result = mysqli_query($conn, $query);
    $return_data = array();

    if(!$result){
        // die("Query Failed");
        $return_data["query"] = $query;
        $return_data["error"] = "DELETE_ERROR";
    }else{
        // $return_data['data'] = array('id' => mysqli_insert_id($conn), 'name' => $name , 'description' => $description , 'stock' => $stock , 'price' => $price  );
    }
    

    $return_data["query"] = $query;
    $return_data['message'] ='Product deleted succesfully';
    $return_data['message_type'] ='success';

    echo json_encode($return_data);
    // header("Location: index.php");



?>