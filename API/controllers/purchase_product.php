<?php
include("../config/db.php"); 
    
    $id = $_GET['id'];
    $quantity = $_GET['quantity'];

    $query = "SELECT * FROM product WHERE id = '$id'";

    //dar la cadena de conexión y la consulta
    $result= mysqli_query($conn, $query);


    if(!$result){
        // die("Query Failed");
        $return_data["query"] = $query;
        $return_data["error"] = "GET_ERROR";
        
    }else{
        $stock = 0;
        $price = 0;
        while($row = mysqli_fetch_row($result)){
            $stock = $row[3];
            $price = $row[4];
        }
        if($stock >= 1 ){

            $purchase = $stock - $quantity;
            $total_pay = $price * $quantity;
            $query = "UPDATE product set stock  = '$purchase'  WHERE id = '$id' ";
            $result= mysqli_query($conn, $query);
            if(!$result){
                // die("Query Failed");
                $return_data["query"] = $query;
                $return_data["error"] = "PURCHASE_ERROR";
            }else{
                $query = "INSERT INTO purchase_log(product_id,price,quantity) VALUES ('$id','$total_pay', '$quantity')  ";
                $result = mysqli_query($conn,$query);
                if(!$result){
                    $return_data["query"] = $query;
                    $return_data["error"] = "INSERT_ERROR";
                }
            }
        
        }
    }




    $return_data["query"] = $query;
    $return_data['message'] ='Product purchase succesfully';
    $return_data['message_type'] ='success';

    echo json_encode($return_data);
    // header("Location: index.php");



?>