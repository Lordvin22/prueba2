<?php
include("../config/db.php");
    $id = $_GET['id'];
    $name = $_GET['name'];
    $description = $_GET['description'];
    $stock = $_GET['stock'];
    $price = $_GET['price'];

    $query = "UPDATE product set name = '$name' , description = '$description', stock = '$stock', price = '$price' WHERE id = '$id' ";
    
    //dar la cadena de conexión y la consulta
    $result = mysqli_query($conn, $query);
    $return_data = array();

    if(!$result){
        // die("Query Failed");
        $return_data["query"] = $query;
        $return_data["error"] = "INSERT_ERROR";
    }else{
        $return_data['data'] = array('id' => mysqli_insert_id($conn), 'name' => $name , 'description' => $description , 'stock' => $stock , 'price' => $price  );
    }
    

    $return_data["query"] = $query;
    $return_data['message'] ='Product update succesfully';
    $return_data['message_type'] ='success';

    echo json_encode($return_data);
    // header("Location: index.php");



?>