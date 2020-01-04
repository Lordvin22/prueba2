<?php
include("../config/db.php"); 


    $query = "SELECT * FROM product";
    
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
            array_push($return_data['data'], array("id"=>$row[0],"name"=>$row[1],"description"=>$row[2],"stock"=>$row[3],"price"=>$row[4] ));
     } 
    }

    $return_data["query"] = $query;
    $return_data['message'] ='Product saved succesfully';
    $return_data['message_type'] ='success';

    echo json_encode($return_data);
    // header("Location: index.php");

?>