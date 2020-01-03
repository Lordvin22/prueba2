<?php
include("../config/db.php"); 
    $name = $_GET['name'];
    $description = $_GET['description'];
    $stock = $_GET['stock'];
    $price = $_GET['price'];

    $query = "INSERT INTO task(name,npc,stock,price) VALUES ('$name','$description','$stock','$price')";
    
    //dar la cadena de conexión y la consulta
    $result = mysqli_query($conn, $query);
    $return_data = array();
    if(!$result){
        // die("Query Failed");
        $return_data["query"] = $query;
        $return_data["error"] = "INSERT_ERROR";
    }

    $return_data["query"] = $query;
    $return_data['message'] ='Product saved succesfully';
    $return_data['message_type'] ='success';

    echo json_encode($return_data);
    // header("Location: index.php");

?>