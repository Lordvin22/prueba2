<?php
include("../config/db.php"); 
    
    $id = $_GET['id'];
    $quantity = $_GET['quantity'];
    $stock = $_GET['stock'];

    $query = "SELECT * FROM task WHERE id = '$id'";

    //dar la cadena de conexión y la consulta
    $result= mysqli_query($conn, $query);
    if(!$result){
        // die("Query Failed");
        $return_data["query"] = $query;
        $return_data["error"] = "GET_ERROR";
        
    }else{
        if($stock >= 1 ){
            $purchase = $stock - $quantity;
            $query = "UPDATE task set stock = '$purchase'  WHERE id = '$id' ";
            $result= mysqli_query($conn, $query);
            if(!$result){
                // die("Query Failed");
                $return_data["query"] = $query;
                $return_data["error"] = "PURCHASE_ERROR";
            }
        }
    }




    $return_data["query"] = $query;
    $return_data['message'] ='Product purchase succesfully';
    $return_data['message_type'] ='success';

    echo json_encode($return_data);
    // header("Location: index.php");



?>