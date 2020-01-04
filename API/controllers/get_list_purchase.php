<?php
include("../config/db.php"); 


    $query = "SELECT * FROM purchase_log";
    
    //dar la cadena de conexión y la consulta
    $result= mysqli_query($conn, $query);
    $return_data = array();
    $return_data['data'] = [];
    if(!$result){
        // die("Query Failed");
        $return_data["query"] = $query;
        $return_data["error"] = "INSERT_ERROR";
        
    }else{
        while ($row = mysqli_fetch_row($result)){ 
            array_push($return_data['data'], array("id"=>$row[0],"product_id"=>$row[1],"price"=>$row[2],"date"=>$row[3],"quantity"=>$row[4] ));
     } 
    }

    $return_data["query"] = $query;
    $return_data['message'] ='Product saved succesfully';
    $return_data['message_type'] ='success';

    echo json_encode($return_data);
    // header("Location: index.php");

?>